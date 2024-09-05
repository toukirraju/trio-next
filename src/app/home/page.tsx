"use client"
import { ThemeProvider } from "./components/theme/ThemeContext";
import ThemeWrapper from "./components/ThemeWrapper";


export default function Home() {

  return (
    <ThemeProvider
      config={{
        shades: ["25", '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', "950", 'light', 'dark'],
        algorithm: 'base-500',
        colorType: 'hex',
        // alpha: 1,
      }}
    >
      <ThemeWrapper />
    </ThemeProvider>

  );
}



