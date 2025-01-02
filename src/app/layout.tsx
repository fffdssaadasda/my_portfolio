"use client"

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// const Header = dynamic(() => import('@/components/Header'), { ssr: false })
const queryClient = new QueryClient({

})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-[2vw]">
        <SessionProvider >
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Header />
            <main className="mt-[15px]">{children}</main>
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
