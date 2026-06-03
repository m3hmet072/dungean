import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "ARK Mobile PvP Custom Server",
  description: "Premium ARK Mobile PvP server with custom saves, caves, events, amber shop, and seasonal wipes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
