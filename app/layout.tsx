import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-delta-hazel-98.vercel.app"),
  title: "Aditya Yadav | AI/ML Engineer",
  description: "Aditya Yadav is an AI/ML Engineer at Atlassian, previously at Zoho. Explore enterprise AI, backend systems, and interactive projects. Based in Sunnyvale, California.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aditya Yadav | AI/ML Engineer",
    description: "Engineering intelligence into products people can use. Atlassian · Zoho · Selected projects.",
    type: "website", url: "/", siteName: "Aditya Yadav",
    images: [{ url: "/images/skyline.jpg", alt: "A cinematic skyline framing Aditya Yadav's engineering portfolio" }],
  },
  twitter: { card: "summary_large_image", title: "Aditya Yadav | AI/ML Engineer", images: ["/images/skyline.jpg"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preload" href="/images/skyline-ay-study.jpg" as="image" /></head><body>{children}</body></html>;
}
