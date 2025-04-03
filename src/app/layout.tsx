"use client"

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";

// const Header = dynamic(() => import('@/components/Header'), { ssr: false })
const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="this is Yosef Arafa web developer Website" />
      </head>
      <body className="p-[2vw]">
        {/* <PathNameContext> */}
        <SessionProvider >
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Header />
            <main className="mt-[15px] relative top-[80px]">{children}</main>
          </QueryClientProvider>
        </SessionProvider>
        {/* </PathNameContext> */}
      </body>
    </html>
  );
}
