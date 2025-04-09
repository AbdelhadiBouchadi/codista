import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import Navbar from '@/components/shared/Navbar/Navbar';
import Menus from '@/components/shared/Navbar/Menus/Menu';

export const metadata: Metadata = {
  metadataBase: new URL('https://codistaservices.com'),
  title: 'Codista | Coding and Digital Studio Agency',
  description:
    'Codista is a full-stack development agency specializing in web and mobile app development, UI/UX design, and other digital services like business card design. Connect with us for updates.',
  keywords: [
    'Full Stack Development',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Business Card Design',
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
  ],
  authors: [
    {
      name: 'Abdelhadi',
      url: 'https://www.abdelhadev.com/',
    },
  ],
  creator: 'Abdelhadi',
  publisher: 'Abdelhadi',
  alternates: {
    canonical: 'https://abdelhadev.com',
  },
  openGraph: {
    title: 'Codista | Coding and Digital Studio Agency',
    description:
      'Codista is a full-stack development agency specializing in web and mobile app development, UI/UX design, and other digital services like business card design. Connect with us for updates.',
    url: 'https://codistaservices.com',
    siteName: 'Codista Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Codista - Full Stack Development and Digital Services',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-alt-black text-white selection:bg-white selection:text-black cursor-none antialiased">
      <Navbar />
      <Menus />
      {children}
      <Toaster />
    </main>
  );
}
