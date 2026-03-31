import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-7xl font-serif font-bold text-foreground">404</h1>
          <h2 className="text-3xl font-serif font-bold text-foreground">Place Not Found</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          The destination you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="/">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
          </Link>
          <Link href="/#places">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:border-accent transition-colors">
              Browse Destinations
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
