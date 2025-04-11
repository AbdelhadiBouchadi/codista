import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';

export default function SVGCurve({
  paths,
}: {
  paths: React.MutableRefObject<SVGTextPathElement[]>;
}) {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const t = useTranslations('ContactSection');

  return (
    <div
      className={cn(
        'tracking-wide',
        isArabic ? 'tajawal-regular' : 'houseMontage-font'
      )}
    >
      <svg className="w-full sm:mb-12 laptop:mb-40" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text
          className="text-[6px] uppercase"
          style={{
            fill: 'white',
            letterSpacing: isArabic ? '0' : 'normal', // Adjust letter spacing for Arabic
          }}
        >
          {[...Array(9)].map((_, i) => (
            <textPath
              key={i}
              ref={(ref) => {
                if (ref) {
                  paths.current[i] = ref;
                }
              }}
              startOffset={`${i * (isArabic ? 20 : 40)}%`} // Reduce spacing for Arabic text
              href="#curve"
              className={cn(
                'font-semibold',
                isArabic && 'text-right' // Add text-right for Arabic
              )}
              style={{
                direction: isArabic ? 'rtl' : 'ltr', // Set text direction
              }}
            >
              {t('cta')}
            </textPath>
          ))}
        </text>
      </svg>
    </div>
  );
}
