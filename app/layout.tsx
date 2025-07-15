import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/nav-bar";
import { ReactNode } from "react";
import "./globals.css"; // Ensure global styles are imported

import { NavigationMenuDemo } from "@/components/navigation";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Yash Parakh</title>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className="h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col h-full">
              <NavigationMenuDemo />
              <div className="flex-1 overflow-y-auto">{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
