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
