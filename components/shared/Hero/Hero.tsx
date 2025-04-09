import { Tranquiluxe } from 'uvcanvas';
import HeroContent from './HeroContent';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations('Hero');
  const isArabic = locale === 'ar';

  return (
    <AuroraBackground data-scroll-container>
      <div></div>
      <div className="absolute sm:inset-5 tablet:inset-10 laptop_l:inset-20 text-alt-white z-10 text-center w-screen sm:py-12 tablet:py-24">
        <HeroContent />
      </div>
      {/* <Tranquiluxe /> */}

      <div className="absolute bottom-0 w-full">
        <VelocityScroll
          text={t('scroll')}
          default_velocity={isArabic ? -3 : 3}
          className={cn(
            'sm:text-2xl laptop:text-4xl milker-font py-4 bg-alt-white text-alt-black',
            isArabic && 'tajawal-font'
          )}
          rtl={isArabic}
        />
      </div>
    </AuroraBackground>
  );
}
