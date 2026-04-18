import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vyns Banking — Modern Banking Infrastructure",
  description:
    "Secure, reliable banking infrastructure for individuals and businesses. Open an account, manage funds, and track your balance in real time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
