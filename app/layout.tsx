import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/nav-bar";
import { ReactNode } from "react";
import "./globals.css"; // Ensure global styles are imported

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col h-full">
              <Navbar />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
