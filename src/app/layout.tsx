"use client"
import "./globals.css";
import Header from "@/components/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <main className="mt-[15px] relative top-[80px]">{children}</main>
      </body>
    </html>
  );
}
