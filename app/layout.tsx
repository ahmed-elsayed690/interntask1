// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./component/ThemeContext";
import { LanguageProvider } from "./component/LanguageContext"; // Add this

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BARÇA INNOVATION HUB",
  description: "Universities Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider> {/* Add this wrapper */}
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
