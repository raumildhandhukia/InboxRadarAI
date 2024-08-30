import type { Metadata } from "next";
import { Anonymous_Pro, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
const poppins = Poppins({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});
const pro = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["greek"],
});

export const metadata: Metadata = {
  title: "Inbox Radar AI",
  description: "AI powered job application tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className}`}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className=" dark:bg-neutral-950">
              <Suspense>{children}</Suspense>
            </div>
          </ThemeProvider>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
