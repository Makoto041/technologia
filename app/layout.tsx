// app/layout.tsx
import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "Technologia",
  description: "Technologiaを共有しましょう",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
