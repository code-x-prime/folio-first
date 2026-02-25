"use client"

import { Phone } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/static";
import { motion } from "framer-motion";

export default function FloatingButtons() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
             <motion.a
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-primary p-3 rounded-full shadow-lg border border-primary/20 hover:scale-110 transition-transform flex items-center justify-center"
              title="Call Us"
            >
              <Phone className="h-6 w-6" />
            </motion.a>

            {/* WhatsApp button wrapper */}
            <div className="relative">
                {/* NEW badge – top-left corner, bounce */}
                <span className="absolute -top-2 -left-2 z-20 bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full tracking-wider shadow-lg animate-bounce pointer-events-none">
                    NEW
                </span>

                {/* Ping ring – sits OUTSIDE the button via negative inset */}
                <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none z-0"></span>

                <motion.a
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1 }}
                  href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like a free consultation regarding my share/dividend recovery case. Please assist.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 bg-[#25D366] text-white p-3 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  title="Chat on WhatsApp"
                >
                  <Image
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    width={36}
                    height={36}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </motion.a>
            </div>
        </div>
    )
}
