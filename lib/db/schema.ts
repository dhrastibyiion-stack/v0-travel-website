import { boolean, date, integer, jsonb, numeric, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const travelDestinations = pgTable('travel_destinations', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  country: text('country').notNull(),
  continent: text('continent').notNull(),
  tagline: text('tagline').notNull(),
  description: text('description').notNull(),
  heroImage: text('hero_image').notNull(),
  galleryImages: jsonb('gallery_images').$type<string[]>().notNull().default([]),
  priceCents: integer('price_cents').notNull().default(0),
  currency: text('currency').notNull().default('USD'),
  durationDays: integer('duration_days').notNull().default(1),
  rating: numeric('rating', { precision: 2, scale: 1 }).notNull().default('5.0'),
  bestTime: text('best_time').notNull().default('Year-round'),
  highlights: jsonb('highlights').$type<string[]>().notNull().default([]),
  itinerary: jsonb('itinerary').$type<{ day: number; title: string; description: string }[]>().notNull().default([]),
  isFeatured: boolean('is_featured').notNull().default(false),
  isPublished: boolean('is_published').notNull().default(true),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

export const travelPlaces = pgTable('travel_places', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  country: text('country').notNull(),
  continent: text('continent').notNull(),
  tagline: text('tagline').notNull(),
  description: text('description').notNull(),
  heroImage: text('hero_image').notNull(),
  galleryImages: jsonb('gallery_images').$type<string[]>().notNull().default([]),
  priceCents: integer('price_cents').notNull().default(0),
  currency: text('currency').notNull().default('USD'),
  durationDays: integer('duration_days').notNull().default(1),
  rating: numeric('rating', { precision: 2, scale: 1 }).notNull().default('5.0'),
  bestTime: text('best_time').notNull().default('Year-round'),
  highlights: jsonb('highlights').$type<string[]>().notNull().default([]),
  itinerary: jsonb('itinerary').$type<{ day: number; title: string; description: string }[]>().notNull().default([]),
  isFeatured: boolean('is_featured').notNull().default(false),
  isPublished: boolean('is_published').notNull().default(true),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

export const travelExperiences = pgTable('travel_experiences', {
  id: uuid('id').defaultRandom().primaryKey(), slug: text('slug').notNull().unique(), name: text('name').notNull(), tagline: text('tagline').notNull(), description: text('description').notNull(), image: text('image').notNull(), priceCents: integer('price_cents').notNull().default(0), currency: text('currency').notNull().default('USD'), durationHours: integer('duration_hours').notNull().default(1), isPublished: boolean('is_published').notNull().default(true), sortOrder: integer('sort_order').notNull().default(0), createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(), updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

export const travelBookings = pgTable('travel_bookings', {
  id: uuid('id').defaultRandom().primaryKey(), confirmationCode: text('confirmation_code').notNull().unique(), catalogType: text('catalog_type').notNull(), catalogSlug: text('catalog_slug').notNull(), catalogName: text('catalog_name').notNull(), fullName: text('full_name').notNull(), email: text('email').notNull(), phone: text('phone').notNull(), travelers: integer('travelers').notNull(), departureDate: date('departure_date').notNull(), notes: text('notes'), totalCents: integer('total_cents').notNull(), currency: text('currency').notNull().default('USD'), status: text('status').notNull().default('pending'), createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(), updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

export const cmsTables = { travelDestinations, travelPlaces, travelExperiences, travelBookings }
