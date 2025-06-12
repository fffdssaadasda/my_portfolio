"use client"
import "./globals.css";
import Header from "@/components/Header";
import { useEffect } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <head>
        <title>الصفحة الرئيسية | Home Page</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="this is Yosef Arafa web developer Website" />
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </head>
      <body className="p-[2vw]">
        <Header />
        <main className="mt-[15px] relative top-[80px]">
          <QueryClientProvider client={queryClient}>

            {children}
          </QueryClientProvider>

        </main>

      </body>
    </html>
  );
}
