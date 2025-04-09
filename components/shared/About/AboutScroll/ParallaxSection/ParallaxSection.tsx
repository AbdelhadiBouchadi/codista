import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ParallaxSection() {
  const locale = useLocale();
  const t = useTranslations('AboutSection');
  const isArabic = locale === 'ar';

  return (
    <>
      {/* Desktop Version */}
      <div
        className="sm:hidden tablet:flex justify-between gap-4 items-center relative"
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <div className="relative w-1/3">
          <div data-scroll data-scroll-speed="0.2">
            <Image
              src={'/About/1.jpg'}
              alt=""
              height={400}
              width={400}
              className="tablet:w-72 laptop:w-96"
            />

            <p className="font-sans text-alt-white opacity-70 pt-4 text-xs tablet:w-auto laptop_l:w-96 text-justify">
              {t('mission.description')}
            </p>
          </div>

          <div
            data-scroll
            data-scroll-speed="0.3"
            className={cn(
              'absolute top-1/2  tablet:text-6xl laptop:text-7xl laptop_l:text-8xl',
              isArabic
                ? 'tajawal-font tablet:-right-0 laptop_l:-right-20'
                : ' tablet:-left-0 laptop_l:-left-20'
            )}
          >
            {t('mission.title')}
          </div>
        </div>

        <div className="relative mt-32 w-1/3">
          <div data-scroll data-scroll-speed="0.4">
            <Image
              src={'/About/2.jpg'}
              alt=""
              height={400}
              width={400}
              className="tablet:w-72 laptop:w-96"
            />

            <p className="font-sans text-alt-white opacity-70 pt-4 text-xs tablet:w-auto laptop_l:w-96 text-justify">
              {t('vision.description')}
            </p>
          </div>

          <div
            data-scroll
            data-scroll-speed="0.5"
            className={cn(
              'absolute top-1/2  tablet:text-6xl laptop:text-7xl laptop_l:text-8xl',
              isArabic
                ? 'tajawal-font tablet:-right-0 laptop_l:-right-20'
                : ' tablet:-left-0 laptop_l:-left-20'
            )}
          >
            {t('vision.title')}
          </div>
        </div>

        <div className="relative mt-64 w-1/3">
          <div data-scroll data-scroll-speed="0.6">
            <Image
              src={'/About/3.jpg'}
              alt=""
              height={400}
              width={400}
              className="tablet:w-72 laptop:w-96"
            />

            <p className="font-sans text-alt-white opacity-70 pt-4 text-xs tablet:w-auto laptop_l:w-96 text-justify">
              {t('goal.description')}
            </p>
          </div>

          <div
            data-scroll
            data-scroll-speed="0.7"
            className={cn(
              'absolute top-1/2  tablet:text-6xl laptop:text-7xl laptop_l:text-8xl',
              isArabic
                ? 'tajawal-font tablet:-right-0 laptop_l:-right-20'
                : ' tablet:-left-0 laptop_l:-left-20'
            )}
          >
            {t('goal.title')}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div
        className="sm:block tablet:hidden mt-4 space-y-8"
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <div className="relative">
          <Image
            src={'/About/1.jpg'}
            alt=""
            height={400}
            width={400}
            className="w-full"
          />

          <p className="font-sans text-alt-white opacity-70 pt-4 text-sm w-full text-justify">
            {t('mission.description')}
          </p>

          <div
            data-scroll
            data-scroll-speed="0.3"
            className={cn(
              'absolute top-1/2  sm:text-7xl mobile_m:text-8xl transform  -translate-y-1/2 opacity-60',
              isArabic
                ? 'tajawal-font right-0 translate-x-1/2'
                : ' left-0 -translate-x-1/2'
            )}
          >
            {t('mission.title')}
          </div>
        </div>

        <div className="relative">
          <Image
            src={'/About/2.jpg'}
            alt=""
            height={400}
            width={400}
            className="w-full"
          />

          <p className="font-sans text-alt-white opacity-70 pt-4 text-sm w-full text-justify">
            {t('vision.description')}
          </p>

          <div
            data-scroll
            data-scroll-speed="0.3"
            className={cn(
              'absolute top-1/2  sm:text-7xl mobile_m:text-8xl transform  -translate-y-1/2 opacity-60',
              isArabic
                ? 'tajawal-font right-0 translate-x-1/2'
                : ' left-0 -translate-x-1/2'
            )}
          >
            {t('vision.title')}
          </div>
        </div>

        <div className="relative">
          <Image
            src={'/About/3.jpg'}
            alt=""
            height={400}
            width={400}
            className="w-full"
          />

          <p className="font-sans text-alt-white opacity-70 pt-4 text-sm w-full text-justify">
            {t('goal.description')}
          </p>

          <div
            data-scroll
            data-scroll-speed="0.3"
            className={cn(
              'absolute top-1/2  sm:text-7xl mobile_m:text-8xl transform  -translate-y-1/2 opacity-60',
              isArabic
                ? 'tajawal-font right-0 translate-x-1/2'
                : ' left-0 -translate-x-1/2'
            )}
          >
            {t('goal.title')}
          </div>
        </div>
      </div>
    </>
  );
}
