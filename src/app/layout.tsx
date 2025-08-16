"use client"
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
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
      <body className="p-[2vw] ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <Header />
          <main className="mt-[15px] relative top-[30px]">
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>

          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}
