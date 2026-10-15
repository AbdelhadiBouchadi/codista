import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { hosting, legalIdentity, siteUrl } from '@/lib/site';
import { cn } from '@/lib/utils';

type Props = {
  params: Promise<{ locale: string }>;
};

const path = '/mentions-legales';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'LegalNotice' });
  const url = `${siteUrl}/${locale}${path}`;

  return {
    metadataBase: new URL(siteUrl),
    title: t('metaTitle'),
    description: t('metaDescription'),
    authors: [{ name: legalIdentity.legalName, url: siteUrl }],
    creator: legalIdentity.legalName,
    publisher: legalIdentity.legalName,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${siteUrl}/${l}${path}`])
      ),
    },
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      url,
      siteName: 'Abdelhadev Portfolio',
      locale,
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default async function LegalNoticePage({ params }: Props) {
  const { locale } = await params;
  const isArabic = locale === 'ar';
  const t = await getTranslations({ locale, namespace: 'LegalNotice' });
  const { legalName, status, city, contactEmail, phone } = legalIdentity;

  const publisher: { label: string; value: React.ReactNode }[] = [
    { label: t('legalName'), value: legalName },
    { label: t('status'), value: status },
    { label: t('activity'), value: t('activityValue') },
    { label: t('city'), value: city },
    {
      label: t('email'),
      value: (
        <a href={`mailto:${contactEmail}`} className="underline break-all">
          {contactEmail}
        </a>
      ),
    },
    ...(phone ? [{ label: t('phone'), value: phone }] : []),
    { label: t('director'), value: legalName },
  ];

  return (
    <main
      className={cn(
        'min-h-screen bg-alt-black text-alt-white antialiased select-text',
        isArabic ? 'tajawal-regular' : 'font-sans'
      )}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="max-w-3xl mx-auto sm:px-4 tablet:px-10 sm:py-12 tablet:py-24">
        <Link
          href="/"
          className="text-sm text-alt-white/70 hover:text-alt-white underline-offset-2 hover:underline"
        >
          {t('back')}
        </Link>

        <h1
          className={cn(
            'mt-8 sm:text-4xl tablet:text-6xl uppercase',
            isArabic ? 'tajawal-font' : 'houseMontage-font'
          )}
        >
          {t('title')}
        </h1>

        <section className="mt-12">
          <h2 className="text-xl font-semibold border-b border-alt-white/20 pb-2">
            {t('publisherTitle')}
          </h2>
          <dl className="mt-4 grid tablet:grid-cols-[14rem_1fr] gap-x-6 gap-y-2 text-sm">
            {publisher.map(({ label, value }) => (
              <div key={label} className="contents">
                <dt className="text-alt-white/60 sm:mt-2 tablet:mt-0">
                  {label}
                </dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold border-b border-alt-white/20 pb-2">
            {t('hostingTitle')}
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            <span dir="ltr">{hosting.name}</span>
            <br />
            <span dir="ltr">{hosting.address}</span>
            <br />
            <a href={hosting.url} className="underline">
              {hosting.url.replace('https://', '')}
            </a>
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold border-b border-alt-white/20 pb-2">
            {t('dataTitle')}
          </h2>
          <p className="mt-4 text-sm leading-relaxed">{t('dataText')}</p>
        </section>
      </div>
    </main>
  );
}
