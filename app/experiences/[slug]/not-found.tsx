"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
          <h2 className="text-3xl font-bold text-foreground">Experience Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The experience you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/#experiences">
              <ArrowLeft className="h-4 w-4" />
              View All Experiences
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}