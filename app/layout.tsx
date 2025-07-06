import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageWrapper from '@/components/PageWrapper'; // ✅ import

export const metadata: Metadata = {
  title: 'Dr. Serena Blake',
  description: 'Therapy and wellness support with Dr. Serena Blake',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
