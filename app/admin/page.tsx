import Link from 'next/link'
import { count, desc } from 'drizzle-orm'
import { db } from '@/lib/db'
import { travelBookings, travelDestinations, travelExperiences, travelPlaces } from '@/lib/db/schema'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const [destinationCount, placeCount, experienceCount, bookings] = await Promise.all([
    db.select({ value: count() }).from(travelDestinations),
    db.select({ value: count() }).from(travelPlaces),
    db.select({ value: count() }).from(travelExperiences),
    db.select().from(travelBookings).orderBy(desc(travelBookings.createdAt)).limit(25),
  ])

  const stats = [
    ['Destinations', destinationCount[0]?.value ?? 0],
    ['Places', placeCount[0]?.value ?? 0],
    ['Experiences', experienceCount[0]?.value ?? 0],
    ['Bookings', bookings.length],
  ]

  return (
    <main className="min-h-screen overflow-x-hidden bg-background px-4 py-6 text-foreground sm:px-8 sm:py-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Wanderlust CMS</p>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl">Travel operations</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">Review catalog content and incoming booking requests from one place.</p>
          </div>
          <Link href="/" className="text-sm font-semibold text-primary hover:underline">Back to website</Link>
        </div>

        <section className="mb-8 grid grid-cols-2 gap-3 sm:mb-10 lg:grid-cols-4">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="mt-2 text-3xl font-bold">{value}</p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-border bg-card">
          <div className="border-b border-border p-5">
            <h2 className="text-xl font-bold">Recent booking requests</h2>
          </div>
          {bookings.length === 0 ? (
            <p className="p-8 text-muted-foreground">No bookings have been submitted yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-muted/50 text-muted-foreground">
                  <tr><th className="px-5 py-3 font-medium">Reference</th><th className="px-5 py-3 font-medium">Traveler</th><th className="px-5 py-3 font-medium">Trip</th><th className="px-5 py-3 font-medium">Departure</th><th className="px-5 py-3 font-medium">Total</th><th className="px-5 py-3 font-medium">Status</th></tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="px-5 py-4 font-semibold">{booking.confirmationCode}</td>
                      <td className="px-5 py-4"><p className="font-medium">{booking.fullName}</p><p className="text-xs text-muted-foreground">{booking.email}</p></td>
                      <td className="px-5 py-4">{booking.catalogName}</td>
                      <td className="px-5 py-4">{booking.departureDate}</td>
                      <td className="px-5 py-4">{new Intl.NumberFormat('en-US', { style: 'currency', currency: booking.currency }).format(booking.totalCents / 100)}</td>
                      <td className="px-5 py-4"><span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold capitalize text-primary">{booking.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
