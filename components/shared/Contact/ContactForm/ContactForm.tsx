import Link from 'next/link';
import { PiPhoneCallBold } from 'react-icons/pi';
import FormContent from './FormContent/FormContent';
import { useLocale } from 'next-intl';
import { useTranslations } from 'use-intl';
import { cn } from '@/lib/utils';

export default function ContactForm() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const t = useTranslations('ContactSection');

  return (
    <div
      className={cn(
        ' bg-alt-white text-black h-fit relative rounded-3xl',
        isArabic ? 'tajawal-regular' : 'houseMontage-font'
      )}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="flex justify-between items-center h-full">
        <FormContent />
      </div>

      <div
        className={cn(
          'absolute top-2 font-sans text-gray-400 flex justify-between items-center w-full',
          isArabic ? 'right-5 tajawal-regular' : 'left-5'
        )}
      >
        <div className="flex justify-center items-center">
          <div className="rounded-full text-lg p-2">
            <PiPhoneCallBold />
          </div>

          <p className="sm:ml-0 tablet:ml-2 text-xs">
            {t('wtspLink')}{' '}
            <Link
              href={'https://wa.me/+905526417998'}
              className="underline font-bold"
            >
              {t('clickHere')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
