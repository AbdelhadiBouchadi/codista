import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import Navbar from '@/components/shared/Navbar/Navbar';
import Menus from '@/components/shared/Navbar/Menus/Menu';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.abdelhadev.com'),
  title: 'Abdelhadev | Fullstack Developer',
  description:
    "I'm Abdelhadi — a full-stack developer specializing in fullstack web and mobile app development, UI/UX design. I build thoughtful, performant digital experiences that bring your ideas to life. Let’s connect — I regularly share updates and projects.",
  keywords: [
    'Full Stack Development',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/favicon-180x180.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'Abdelhadev | Fullstack Developer',
    description:
      "I'm Abdelhadi — a full-stack developer specializing in fullstack web and mobile app development, UI/UX design. I build thoughtful, performant digital experiences that bring your ideas to life. Let’s connect — I regularly share updates and projects.",
    url: 'https://www.abdelhadev.com',
    siteName: 'Abdelhadev Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdelhadev | Fullstack Developer',
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

export default function ProjectsLayout({
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
