import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KMWS s. r. o. – Digitální řešení pro sportovní odvětví',
  description: 'Vyvíjíme inovativní webové aplikace a poskytujeme consulting a projektový management pro sportovní projekty.',
  keywords: 'webové aplikace, sport, consulting, projektový management, digitální řešení',
  authors: [{ name: 'KMWS s. r. o.' }],
  openGraph: {
    title: 'KMWS s. r. o. – Digitální řešení pro sportovní odvětví',
    description: 'Vyvíjíme inovativní webové aplikace pro sport',
    type: 'website',
    locale: 'cs_CZ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
