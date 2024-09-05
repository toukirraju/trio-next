let styleSheet: CSSStyleSheet | null = null;

export const initializeStyleSheet = () => {
    if (typeof window !== 'undefined' && !styleSheet) {
        const style = document.createElement('style');
        style.setAttribute('id', 'dynamic-theme-styles');
        document.head.appendChild(style);
        styleSheet = style.sheet;
    }
};

export const updateStyles = (theme: any, colorHooks: any[]) => {
    if (!styleSheet) {
        initializeStyleSheet();
    }

    if (styleSheet) {
        // Clear existing rules
        while (styleSheet.cssRules.length > 0) {
            styleSheet.deleteRule(0);
        }

        // Add root rule
        const rootRuleIndex = styleSheet.insertRule(':root {}', 0);
        const rootRule = styleSheet.cssRules[rootRuleIndex] as CSSStyleRule;

        // Apply base variables
        Object.entries(theme.colorVars).forEach(([key, value]) => {
            rootRule.style.setProperty(`--${key}`, value as string);
        });

        // Apply generated shades
        colorHooks.forEach(([shades, variable, setVariable]: any) => {
            Object.entries(shades).forEach(([shade, color]: any) => {
                rootRule.style.setProperty(`--${variable}-${shade}`, color);
            });
        });
    }
};