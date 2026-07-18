import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mekark – Warehouse Contractors Built for Execution Certainty",
  description:
    "Mekark specializes in end-to-end warehouse contracting, design-integrated execution, and large-scale manufacturing-driven infrastructure delivery across India.",
  keywords: "warehouse contractors, warehouse construction, manufacturing infrastructure, Mekark",
  openGraph: {
    title: "Mekark – Warehouse Contractors Built for Execution Certainty",
    description:
      "End-to-end warehouse contracting with manufacturing-grade precision. 15+ years. 5 Lakh sq ft. 3000+ tonnes monthly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
