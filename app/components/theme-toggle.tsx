'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="py-2 rounded-lg"
            aria-label="Toggle theme"
        >
            {resolvedTheme === 'dark' ? (
                <SunIcon size={22} className="text-yellow-400 cursor-pointer" />
            ) : (
                <MoonIcon size={22} className="text-blue-700 cursor-pointer" />
            )}
        </button>
    )
}
