"use client";
import { createContext, useContext, useState } from "react";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/config";
import { HeroUIProvider } from "@heroui/react";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import { LoginForm } from "@/components/login-form";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const LoginContext = createContext();

export function useLogin() {
  return useContext(LoginContext);
}

export default function RootLayout({ children }) {
  const [isLoginVisible, setLoginVisible] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoginVisible, setLoginVisible }}>
      <html lang="en" suppressHydrationWarning className="overflow-x-clip">
        <body
          className={`${ubuntu.variable} relative antialiased font-ubuntu overflow-x-clip`}
        >
          <HeroUIProvider>
            <Providers>
              <FloatingNav navItems={navItems} />
              {isLoginVisible && (
                <div className="h-auto w-full overflow-clip">
                  <div className="absolute inset-0 flex min-h-screen h-screen flex-col items-center justify-center gap-6 bg-transparent/90 z-50 p-6 md:p-10">
                    <div className="flex w-full max-w-sm flex-col gap-6">
                      <LoginForm />
                      
                    </div>
                  </div>
                </div>
              )}
              {children}
              <Footer />
            </Providers>
          </HeroUIProvider>
        </body>
      </html>
    </LoginContext.Provider>
  );
}
