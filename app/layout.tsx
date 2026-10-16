import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Whispering Woods",
  description: "A voice-first story adventure with Pip the Fox and Ms Ria."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
