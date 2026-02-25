"use client"

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeading({ 
    children, 
    subtitle, 
    description,
    align = "center", // "center" | "left"
    mode = "light", // "light" | "dark"
    spacing = "default", // "compact" | "default" | "spacious"
    className = "" 
}) {
    
    const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
    const modeVars = mode === "dark" 
        ? { title: "text-white", subtitle: "text-[#d5ad5c]", desc: "text-gray-400" }
        : { title: "text-[#232323]", subtitle: "text-[#d5ad5c]", desc: "text-gray-600" };
        
    const spacingVars = {
        compact: "mb-8",
        default: "mb-16",
        spacious: "mb-24"
    };

    return (
        <div className={cn("relative z-10 max-w-3xl", alignClass, spacingVars[spacing], className)}>
            
            {/* Subtitle */}
            {subtitle && (
                <motion.span 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={cn(
                        "font-black tracking-[0.2em] uppercase text-sm mb-4 sm:mb-6 block relative inline-block",
                        modeVars.subtitle
                    )}
                >
                    {subtitle}
                </motion.span>
            )}
            
            {/* Main Title */}
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className={cn(
                    "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15]",
                    modeVars.title,
                    description ? "mb-4" : "mb-6"
                )}
            >
                {children}
            </motion.h2>

            {/* Optional Description */}
            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className={cn(
                        "text-lg sm:text-xl font-medium leading-relaxed mb-8 max-w-2xl",
                        align === "center" && "mx-auto",
                        modeVars.desc
                    )}
                >
                    {description}
                </motion.p>
            )}

            {/* Animated Expand Line */}
            <motion.div 
               initial={{ width: 0, opacity: 0 }}
               whileInView={{ width: "80px", opacity: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, delay: 0.3, ease: "circOut" }}
               className={cn(
                    "h-1 bg-gradient-to-r from-[#d5ad5c] to-yellow-600 rounded-full",
                    align === "center" && "mx-auto"
               )}
            />
        </div>
    )
}
