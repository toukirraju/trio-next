"use client";
import { PatternBG, ThemeController, ThemeProvider } from '@/lib';
import Loader from '@/lib/components/Loader/Loader';
import React from 'react';
const Providers = ({ children }) => {
    return (<ThemeProvider themeLoader={<Loader />}>
            <ThemeController />
            <PatternBG backgroundImage="/pattern/square.svg" className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] dark:from-[var(--primary-dark)] dark:to-[var(--secondary-dark)] h-screen" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundAttachment="fixed" backgroundClip="border-box" backgroundSize="cover">
                {children}
            </PatternBG>
        </ThemeProvider>);
};
export default Providers;
//# sourceMappingURL=Providers.jsx.map