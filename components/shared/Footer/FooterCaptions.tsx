import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';
import { FaHeart } from 'react-icons/fa';

export default function FooterCaptions() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const t = useTranslations('Footer');

  return (
    <div className="absolute bottom-0 left-0 w-full">
      <div className="text-white py-3 sm:px-6 tablet:px-12 flex justify-between gap-4 items-center font-sans sm:text-[5px] mobile_m:text-[6.5px] tablet:text-xs whitespace-nowrap">
        <div
          className={cn(
            isArabic
              ? 'text-right  tajawal-regular'
              : 'text-left houseMontague-font'
          )}
        >
          &copy; {new Date().getFullYear()} {t('copyright')}
        </div>

        <div
          className={cn(
            'flex justify-center items-center sm:gap-1 tablet:gap-2',
            isArabic
              ? 'text-left tajawal-regular'
              : 'text-right houseMontague-font'
          )}
        >
          {t('thankYou')}
          <FaHeart className="text-red-600" />
        </div>
      </div>
    </div>
  );
}
