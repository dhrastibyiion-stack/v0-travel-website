"use client"

import { Download, TicketCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

type BookingTicketProps = {
  confirmationCode: string
  tripName: string
  fullName: string
  email: string
  travelers: number
  departureDate: string
  totalCents?: number
  currency?: string
}

export function BookingTicket({ confirmationCode, tripName, fullName, email, travelers, departureDate, totalCents, currency = "USD" }: BookingTicketProps) {
  const downloadTicket = () => window.print()
  const total = totalCents === undefined ? null : new Intl.NumberFormat("en-US", { style: "currency", currency }).format(totalCents / 100)

  return (
    <div className="space-y-5 text-left">
      <div className="booking-ticket rounded-2xl border border-border bg-background p-5 shadow-sm">
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-dashed border-border pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Wanderlust Travel</p>
            <h4 className="mt-1 text-xl font-bold">Booking ticket</h4>
          </div>
          <TicketCheck className="h-7 w-7 shrink-0 text-primary" aria-hidden="true" />
        </div>
        <div className="grid gap-4 text-sm sm:grid-cols-2">
          <div><p className="text-muted-foreground">Trip</p><p className="font-semibold">{tripName}</p></div>
          <div><p className="text-muted-foreground">Ticket number</p><p className="font-semibold">{confirmationCode}</p></div>
          <div><p className="text-muted-foreground">Traveler</p><p className="font-semibold">{fullName}</p></div>
          <div><p className="text-muted-foreground">Email</p><p className="break-all font-semibold">{email}</p></div>
          <div><p className="text-muted-foreground">Departure</p><p className="font-semibold">{departureDate}</p></div>
          <div><p className="text-muted-foreground">Travelers</p><p className="font-semibold">{travelers}</p></div>
          {total && <div><p className="text-muted-foreground">Total</p><p className="font-semibold">{total}</p></div>}
        </div>
        <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">Keep this ticket for your records. Our travel team will contact you to confirm availability.</p>
      </div>
      <Button type="button" onClick={downloadTicket} className="w-full gap-2 rounded-full print:hidden">
        <Download className="h-4 w-4" aria-hidden="true" /> Download ticket as PDF
      </Button>
    </div>
  )
}
