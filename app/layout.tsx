import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Portuguese Jewish News — Design System",
  description: "Design system editorial, componentes e tokens de marca.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
