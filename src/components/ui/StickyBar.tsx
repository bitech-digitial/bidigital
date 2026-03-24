'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Calendar, MessageCircle } from 'lucide-react'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)
  const [inContact, setInContact] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)

      const contact = document.getElementById('contact')
      if (contact) {
        const rect = contact.getBoundingClientRect()
        setInContact(rect.top <= window.innerHeight && rect.bottom >= 0)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && !inContact && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl py-3 px-4"
          style={{ background: "rgba(5,8,20,0.92)", borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-4">
            {/* Desktop left */}
            <div className="hidden md:flex items-center gap-2">
              <Clock className="w-4 h-4 flex-shrink-0" style={{ color: "#818cf8" }} />
              <span
                className="font-semibold text-sm"
                style={{ fontFamily: 'var(--font-heading)', color: "#e0e0ff" }}
              >
                Site vitrine conforme RGPD · SEO inclus · Maintenance 19,99€/mois
              </span>
            </div>

            {/* Mobile text */}
            <span
              className="md:hidden text-sm font-semibold"
              style={{ fontFamily: 'var(--font-heading)', color: "#e0e0ff" }}
            >
              Site conforme RGPD · Maintenance 19,99€/mois
            </span>

            {/* Desktop buttons */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#2563eb] hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Calendar className="w-4 h-4" />
                Réserver un appel gratuit
              </a>
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-[#25d366] hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Mobile button — full width */}
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2563eb] hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <Calendar className="w-4 h-4" />
              Réserver un appel gratuit
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
