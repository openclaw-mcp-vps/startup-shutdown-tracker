import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Shutdown Tracker — Early Warning System",
  description: "Monitor startup health signals, funding gaps, and get alerts for potential shutdowns or acquisition opportunities."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4a2023ea-bcee-46bd-bf9d-7a7ca3283937"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
