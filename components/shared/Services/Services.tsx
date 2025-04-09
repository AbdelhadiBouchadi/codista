import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import CardCarousel from './CarouselCard/CarouselCard';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export default function Services() {
  const t = useTranslations('ServicesSection');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <div id="services" className="mt-64 w-screen overflow-hidden">
      <VelocityScroll
        text={t('heading')}
        default_velocity={isArabic ? -3 : 3}
        className={cn(
          'sm:text-2xl laptop:text-4xl milker-font py-4 bg-alt-white text-alt-black',
          isArabic && 'tajawal-font'
        )}
        rtl={isArabic}
      />

      <CardCarousel />
    </div>
  );
}
