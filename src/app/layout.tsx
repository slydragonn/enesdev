import { Provider } from "@/components/ui/provider"
import type { Metadata } from 'next'
import "@/styles/global.css"

export const metadata: Metadata = {
  title: 'English Essencials for Developers',
  description: 'English Essentials for Developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
