import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/shared/SmoothScroll';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import NotFound from './not-found';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import { cn } from '@/lib/utils';
import { notFound } from 'next/navigation';

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
        url: '/og-image.png',
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  const messages = await getMessages();
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        suppressHydrationWarning
        className={cn(
          'select-none',
          locale === 'ar' && '__rtl_lang text-right'
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SmoothScroll>{children}</SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
