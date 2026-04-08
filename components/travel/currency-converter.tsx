"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DollarSign, ChevronDown } from "lucide-react"

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar", rate: 1 },
  { code: "EUR", symbol: "€", name: "Euro", rate: 0.92 },
  { code: "GBP", symbol: "£", name: "British Pound", rate: 0.79 },
  { code: "JPY", symbol: "¥", name: "Japanese Yen", rate: 149.50 },
  { code: "AUD", symbol: "A$", name: "Australian Dollar", rate: 1.53 },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar", rate: 1.36 },
  { code: "INR", symbol: "₹", name: "Indian Rupee", rate: 83.12 },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan", rate: 7.24 },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar", rate: 1.34 },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham", rate: 3.67 },
]

interface CurrencyConverterProps {
  isScrolled?: boolean
  variant?: 'default' | 'dark'
}

export function CurrencyConverter({ isScrolled = false, variant = 'default' }: CurrencyConverterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const textColor = variant === 'dark' || isScrolled ? "text-black" : "text-white/90"
  const bgColor = variant === 'dark' || isScrolled ? "bg-black/10" : "bg-white/10"

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-full ${bgColor} backdrop-blur-sm border border-black/10 hover:border-black/20 transition-all ${textColor}`}
      >
        <DollarSign className="h-4 w-4" />
        <span className="text-sm font-medium">{selectedCurrency.code}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 origin-top-right rounded-xl bg-background border border-border shadow-xl overflow-hidden z-50"
          >
            <div className="p-2">
              <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Select Currency
              </p>
              {currencies.map((currency) => (
                <button
                  key={currency.code}
                  onClick={() => {
                    setSelectedCurrency(currency)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors hover:bg-accent/10 ${
                    selectedCurrency.code === currency.code
                      ? "bg-accent/10 text-accent"
                      : "text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">{currency.symbol}</span>
                    <span>{currency.code}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{currency.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function useCurrencyConverter(amountInUSD: number, targetCurrency: string = "USD") {
  const currency = currencies.find(c => c.code === targetCurrency)
  if (!currency) return amountInUSD
  return (amountInUSD * currency.rate).toFixed(2)
}