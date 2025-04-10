import gsap from 'gsap';
import { useEffect, useMemo, useRef } from 'react';
import TestimonialsCard from './TestimonialsCard/TestimonialsCard';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  const firstRef = useRef<HTMLHeadingElement>(null);
  const secondRef = useRef<HTMLHeadingElement>(null);
  const thirdRef = useRef<HTMLHeadingElement>(null);

  const testimonialRefs = useMemo(() => [firstRef, secondRef, thirdRef], []);

  const locale = useLocale();
  const isArabic = locale === 'ar';
  const t = useTranslations('TestimonialsSection');

  useEffect(() => {
    testimonialRefs.forEach((ref) => {
      if (!ref.current) return;

      // Split text into words for animation while preserving spaces
      const text = ref.current.textContent || '';
      const words = text.split(/(\s+)/);
      ref.current.innerHTML = words
        .map((word) => {
          // If it's just whitespace, preserve it without wrapping in span
          if (word.trim() === '') {
            return word;
          }
          return `<span class="inline-block">${word}</span>`;
        })
        .join('');

      const wordSpans = ref.current.querySelectorAll('span');

      gsap.fromTo(
        wordSpans,
        {
          y: 100,
          opacity: 0,
          scale: 0.5,
          filter: 'blur(10px)',
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [testimonialRefs]);

  return (
    <div
      id="testimonials"
      className="sm:mt-12 tablet:mt-40 w-screen overflow-hidden"
    >
      <h1
        ref={firstRef}
        className={cn(
          ' tracking-wider sm:text-3xl mobile_l:text-4xl tablet:text-6xl laptop:text-8xl uppercase perspective-1000 text-alt-white ',
          isArabic
            ? 'tajawal-font sm:pr-6 tablet:pr-16'
            : 'milker-font sm:pl-6 tablet:pl-16'
        )}
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        {t('heading')}
      </h1>

      <div
        className={cn(
          'sm:text-xl mobile_m:text-2xl mobile_l:text-3xl tablet:text-5xl laptop:text-6xl  sm:mt-2 tablet:mt-8',
          isArabic
            ? 'sm:pr-6 tablet:pr-16 tajawal-regular'
            : 'sm:pl-6 tablet:pl-16 houseMontage-font'
        )}
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <h2 ref={secondRef}> {t('subheading1')} </h2>
        <h2 ref={thirdRef}> {t('subheading2')} </h2>
      </div>

      <TestimonialsCard />
    </div>
  );
}
