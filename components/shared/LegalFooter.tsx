import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { legalIdentity } from '@/lib/site';
import { cn } from '@/lib/utils';

export default async function LegalFooter() {
  const locale = await getLocale();
  const isArabic = locale === 'ar';
  const t = await getTranslations('Footer');
  const { legalName, status, city, contactEmail, phone } = legalIdentity;

  return (
    <footer
      className={cn(
        'w-full bg-alt-black text-alt-white/70 font-sans text-xs py-4 sm:px-4 tablet:px-10',
        isArabic && 'tajawal-regular'
      )}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-center">
        <span dir="ltr">
          &copy; {new Date().getFullYear()} {legalName}
        </span>
        <span aria-hidden="true">—</span>
        <span>{status}</span>
        <span aria-hidden="true">—</span>
        <span>{city}</span>
        <span aria-hidden="true">—</span>
        <a
          href={`mailto:${contactEmail}`}
          className="underline-offset-2 hover:underline break-all"
        >
          {contactEmail}
        </a>
        {phone && (
          <>
            <span aria-hidden="true">—</span>
            <a href={`tel:${phone}`} className="hover:underline">
              {phone}
            </a>
          </>
        )}
        <span aria-hidden="true">·</span>
        <Link
          href="/mentions-legales"
          className="underline underline-offset-2 hover:text-alt-white"
        >
          {t('legalNotice')}
        </Link>
      </div>
    </footer>
  );
}
