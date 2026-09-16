'use server'

import { randomBytes } from 'node:crypto'
import { and, eq } from 'drizzle-orm'
import { z } from 'zod'
import { db } from '@/lib/db'
import { travelBookings, travelDestinations, travelPlaces, travelExperiences } from '@/lib/db/schema'

const bookingSchema = z.object({
  catalogType: z.enum(['destination', 'place', 'experience']),
  catalogSlug: z.string().min(1).max(120),
  fullName: z.string().trim().min(2).max(120),
  email: z.string().email().max(160),
  phone: z.string().trim().min(7).max(40),
  travelers: z.coerce.number().int().min(1).max(20),
  departureDate: z.string().date(),
  notes: z.string().trim().max(2000).optional().default(''),
})

export async function createBooking(input: z.input<typeof bookingSchema>) {
  const values = bookingSchema.parse(input)
  const today = new Date().toISOString().slice(0, 10)
  if (values.departureDate < today) throw new Error('Departure date must be in the future.')

  const catalog = values.catalogType === 'destination'
    ? await db.select({ name: travelDestinations.name, priceCents: travelDestinations.priceCents, currency: travelDestinations.currency }).from(travelDestinations).where(and(eq(travelDestinations.slug, values.catalogSlug), eq(travelDestinations.isPublished, true))).limit(1)
    : values.catalogType === 'place'
      ? await db.select({ name: travelPlaces.name, priceCents: travelPlaces.priceCents, currency: travelPlaces.currency }).from(travelPlaces).where(and(eq(travelPlaces.slug, values.catalogSlug), eq(travelPlaces.isPublished, true))).limit(1)
      : await db.select({ name: travelExperiences.name, priceCents: travelExperiences.priceCents, currency: travelExperiences.currency }).from(travelExperiences).where(and(eq(travelExperiences.slug, values.catalogSlug), eq(travelExperiences.isPublished, true))).limit(1)

  if (!catalog[0]) throw new Error('This travel offering is not currently available.')
  const item = catalog[0]
  const confirmationCode = `WL-${randomBytes(4).toString('hex').toUpperCase()}`
  const [booking] = await db.insert(travelBookings).values({
    confirmationCode,
    catalogType: values.catalogType,
    catalogSlug: values.catalogSlug,
    catalogName: item.name,
    fullName: values.fullName,
    email: values.email,
    phone: values.phone,
    travelers: values.travelers,
    departureDate: values.departureDate,
    notes: values.notes,
    totalCents: item.priceCents * values.travelers,
    currency: item.currency,
  }).returning({ confirmationCode: travelBookings.confirmationCode, totalCents: travelBookings.totalCents, currency: travelBookings.currency })

  return booking
}
