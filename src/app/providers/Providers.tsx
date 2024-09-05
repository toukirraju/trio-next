"use client"
import { PatternBG, ThemeController, ThemeProvider } from '@/lib'
import Loader from '@/lib/components/Loader/Loader'
import React from 'react'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            themeLoader={<Loader />}
            config={{
                shades: ["25", '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', "950", 'light', 'dark'],
                algorithm: 'base-500',
                colorType: 'hex',
                // alpha: 1,
                variables: {
                    primary: '#0fffff',
                    secondary: '#00FF00',
                    // danger: '#d91a47',
                }
            }}

        >
            <ThemeController />
            <PatternBG
                backgroundImage="/pattern/square.svg"
                className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] dark:from-[var(--primary-dark)] dark:to-[var(--secondary-dark)] h-screen"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundAttachment="fixed"
                backgroundClip="border-box"
                backgroundSize="cover"
            >
                {children}
            </PatternBG>
        </ThemeProvider>
    )
}

export default Providers
