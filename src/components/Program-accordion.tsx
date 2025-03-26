"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface ProgramAccordionProps {
    title: string
    content: React.ReactNode
    defaultOpen?: boolean
}

export default function ProgramAccordion({ title, content, defaultOpen = false }: ProgramAccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div className="border rounded-md overflow-hidden">
            <button
                className={`w-full flex justify-between items-center p-4 text-left font-medium text-lg ${isOpen ? "bg-primary text-white" : "bg-red-500 text-primary hover:bg-blue-300"
                    }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>

            {isOpen && <div className="p-4 ">{content}</div>}
        </div>
    )
}

