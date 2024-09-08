
import React from 'react';

export interface ColorSchemeScriptProps extends React.ComponentPropsWithoutRef<'script'> {
  forceColorScheme?: 'light' | 'dark';
  defaultColorScheme?: 'light' | 'dark' | 'auto';
  localStorageKey?: string;
  themeLocalStorageKey?: string;
}


const getScript = ({
  defaultColorScheme,
  localStorageKey,
  forceColorScheme,
  themeLocalStorageKey,
}: Pick<ColorSchemeScriptProps, 'defaultColorScheme' | 'localStorageKey' | 'forceColorScheme' | 'themeLocalStorageKey'>) => `
try {
  var _colorScheme = window.localStorage.getItem("${localStorageKey}");
  var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" || _colorScheme === "system" ? _colorScheme : "${defaultColorScheme}";
  var computedColorScheme = (colorScheme !== "auto" && colorScheme !== "system") ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.setAttribute("data-mode", ${forceColorScheme ? `"${forceColorScheme}"` : 'computedColorScheme'});

  // Define the default theme
  var defaultTheme = {
    "name": "default",
    "mode": "light",
    "shades": [
        {
            "name": "primary",
            "color": "#0fffff",
            "shade": {
                "25": "#F7FFFF",
                "50": "#F2FFFF",
                "100": "#E8FFFF",
                "200": "#C4FFFF",
                "300": "#9EFFFF",
                "400": "#57FFFF",
                "500": "#0fffff",
                "600": "#0BDBE6",
                "700": "#08A7BF",
                "800": "#067C99",
                "900": "#035373",
                "950": "#01314A",
                "light": "#F7FFFF",
                "dark": "#01314A"
            }
        },
        {
            "name": "secondary",
            "color": "#0f6fff",
            "shade": {
                "25": "#f7fffe",
                "50": "#f2fffe",
                "100": "#e8f7ff",
                "200": "#c4e4ff",
                "300": "#9eb5ff",
                "400": "#578cff",
                "500": "#0f6fff",
                "600": "#0b2ce6",
                "700": "#0839bf",
                "800": "#063599",
                "900": "#035373",
                "950": "#011b4a",
                "light": "#f7fdff",
                "dark": "#010c4a"
            }
        }
    ]
  };

  // Insert theme colors
  var themeData = JSON.parse(window.localStorage.getItem("${themeLocalStorageKey}") || "null");

  // If themeData doesn't exist, use the default theme
  themeData = themeData && themeData.shades ? themeData : defaultTheme;

  var styleElementId = 'trio-theme-style';
  var existingStyleElement = document.getElementById(styleElementId);
  var style = existingStyleElement || document.createElement('style');
  
  if (!existingStyleElement) {
    style.id = styleElementId;
    document.head.appendChild(style);
  }
  
  var cssRules = ':root {';
  themeData.shades.forEach(shade => {
    Object.entries(shade.shade).forEach(([key, value]) => {
      cssRules += \`--\${shade.name}-\${key}: \${value};\`;
    });
  });
  cssRules += '}';
  style.textContent = cssRules;
  
  // Store default theme in localStorage if not already stored
  if (!window.localStorage.getItem("${themeLocalStorageKey}")) {
    window.localStorage.setItem("${themeLocalStorageKey}", JSON.stringify(defaultTheme));
  }
} catch (e) {
  console.error("Error setting color scheme:", e);
}
`;
export function ColorSchemeScript({
  defaultColorScheme = 'light',
  localStorageKey = 'trio-color-scheme-value',
  themeLocalStorageKey = 'trio-theme',
  forceColorScheme,
  ...others
}: ColorSchemeScriptProps) {
  const _defaultColorScheme = ['light', 'dark', 'auto'].includes(defaultColorScheme)
    ? defaultColorScheme
    : 'light';
  return (
    <script
      {...others}
      data-trio-script
      dangerouslySetInnerHTML={{
        __html: getScript({
          defaultColorScheme: _defaultColorScheme,
          localStorageKey,
          forceColorScheme,
          themeLocalStorageKey,
        }),
      }}
    />
  );
}