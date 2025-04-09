import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import AboutScroll from './AboutScroll/AboutScroll';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export default function About() {
  const aboutTextRef = useRef<HTMLHeadingElement>(null);
  const locale = useLocale();
  const t = useTranslations('AboutSection');
  const isArabic = locale === 'ar';

  useEffect(() => {
    if (!aboutTextRef.current) return;

    // Split text into words for animation while preserving spaces
    const text = aboutTextRef.current.textContent || '';
    const words = text.split(/(\s+)/); // Split on spaces but keep the spaces
    aboutTextRef.current.innerHTML = words
      .map((word) => {
        // If it's just whitespace, preserve it without wrapping in span
        if (word.trim() === '') {
          return word;
        }
        return `<span class="inline-block">${word}</span>`;
      })
      .join('');

    const wordSpans = aboutTextRef.current.querySelectorAll('span');

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
          trigger: aboutTextRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="about"
      className="text-alt-white houseMontage-font w-screen overflow-hidden mt-32"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <h1
        ref={aboutTextRef}
        className={cn(
          'sm:text-6xl tablet:text-8xl uppercase perspective-1000 text-alt-white ',
          isArabic
            ? 'tajawal-font sm:pr-6 laptop:pr-16 laptop_l:pr-32'
            : 'milker-font sm:pl-6 laptop:pl-16 laptop_l:pl-32'
        )}
      >
        {t('title')}
      </h1>
      <AboutScroll />
    </div>
  );
}
