"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Minimize2, Phone, Mail, Clock } from "lucide-react"

const quickReplies = [
  "I need help planning a trip",
  "What destinations do you offer?",
  "Tell me about your pricing",
  "I have a question about booking",
]

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<{ id: number; text: string; sender: "user" | "agent"; time: string }[]>([
    { id: 1, text: "Hello! Welcome to Wanderlust Travel. How can I help you today?", sender: "agent", time: "Just now" },
  ])
  const [inputValue, setInputValue] = useState("")
  const [showQuickReplies, setShowQuickReplies] = useState(true)

  const handleSend = () => {
    if (!inputValue.trim()) return

    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user" as const,
      time: "Just now",
    }
    setMessages([...messages, newUserMessage])
    setInputValue("")
    setShowQuickReplies(false)

    setTimeout(() => {
      const agentResponse = {
        id: messages.length + 2,
        text: "Thank you for your message! One of our travel experts will be with you shortly. In the meantime, feel free to browse our destinations or check out our travel guides.",
        sender: "agent" as const,
        time: "Just now",
      }
      setMessages(prev => [...prev, agentResponse])
    }, 1000)
  }

  const handleQuickReply = (reply: string) => {
    const newUserMessage = {
      id: messages.length + 1,
      text: reply,
      sender: "user" as const,
      time: "Just now",
    }
    setMessages([...messages, newUserMessage])
    setShowQuickReplies(false)

    setTimeout(() => {
      const responses: Record<string, string> = {
        "I need help planning a trip": "I'd love to help you plan your perfect trip! Could you tell me your preferred travel dates, destination, and any specific interests or activities you'd like to include?",
        "What destinations do you offer?": "We offer over 50 destinations worldwide! From tropical beaches in Bali and Maldives to cultural adventures in Europe and Asia. You can browse our destinations here: /destinations",
        "Tell me about our pricing": "Our pricing varies based on destination, duration, and travel style. We offer options for every budget from luxury getaways to affordable adventures. Would you like me to recommend some packages?",
        "I have a question about booking": "I'd be happy to help with your booking! You can book directly on our website or I can transfer you to one of our agents. What would you prefer?",
      }
      const agentResponse = {
        id: messages.length + 2,
        text: responses[reply] || "Thanks for reaching out! How can I assist you further?",
        sender: "agent" as const,
        time: "Just now",
      }
      setMessages(prev => [...prev, agentResponse])
    }, 1000)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-all ${
          isOpen ? "bg-muted" : "bg-primary hover:bg-primary/90"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MessageCircle className="h-7 w-7 text-primary-foreground" />
          </motion.div>
        )}
      </motion.button>

      {/* Notification badge */}
      {!isOpen && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-20 right-20 z-50 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-white"
        >
          1
        </motion.span>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-md overflow-hidden rounded-2xl bg-background border border-border shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-primary bg-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Wanderlust Support</h3>
                  <p className="text-xs text-white/70">Online • Ready to help</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="rounded-full p-2 text-white/70 hover:bg-white/10 transition-colors"
                >
                  <Minimize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex h-80 flex-col overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-[10px] mt-1 ${msg.sender === "user" ? "text-white/60" : "text-muted-foreground"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}

              {/* Quick Replies */}
              {showQuickReplies && (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground text-center">Quick questions:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {quickReplies.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => handleQuickReply(reply)}
                        className="rounded-full bg-accent/10 px-3 py-1.5 text-xs text-accent hover:bg-accent hover:text-white transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSend}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
            </div>

            {/* Footer Info */}
            <div className="bg-muted/50 px-4 py-3 flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <a href="tel:+15551234567" className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Phone className="h-3 w-3" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a href="mailto:hello@wanderlust.travel" className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Mail className="h-3 w-3" />
                <span>hello@wanderlust.travel</span>
              </a>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}