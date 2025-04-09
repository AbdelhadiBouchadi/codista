'use client';

import { inter } from '@/fonts';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';

export default function HeroContent() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <div
      className={cn('text-left', isArabic && 'text-right')}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', delay: 4 }}
        className={cn(
          'sm:text-5xl tablet:text-7xl ',
          isArabic ? 'text-right tajawal-font mb-5' : 'text-left milker-font'
        )}
      >
        {t('welcome')}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', delay: 4.5 }}
        className={`${inter.className} w-[90%] laptop:w-1/2 lowercase ${
          isArabic
            ? 'sm:text-lg tablet:text-2xl tajawal-regular'
            : 'sm:text-base tablet:text-lg'
        }`}
      >
        {t('tagline')}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', delay: 5 }}
        className={cn(
          'sm:text-base tablet:text-lg sm:w-[90%] laptop:w-3/5 py-8 text-justify ',
          isArabic && 'tajawal-regular'
        )}
      >
        {t('intro')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', delay: 5.5 }}
        className="sm:w-[90%] laptop:w-3/5"
      >
        <h4
          className={cn(
            ' milker-font',
            isArabic
              ? 'sm:text-4xl tablet:text-5xl tajawal-font'
              : 'sm:text-2xl tablet:text-3xl'
          )}
        >
          {t('visionTitle')}
        </h4>
        <p
          className={cn(
            'mt-2 sm:text-base tablet:text-lg text-justify ',
            isArabic && 'tajawal-regular'
          )}
        >
          {t('visionText')}
        </p>
      </motion.div>
    </div>
  );
}
