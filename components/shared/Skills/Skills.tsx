import { skills } from '@/lib/constants';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

export function Skills() {
  const skillsTextRef = useRef<HTMLHeadingElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  const locale = useLocale();
  const isArabic = locale === 'ar';
  const t = useTranslations('SkillsSection');

  useEffect(() => {
    if (!skillsTextRef.current) return;

    // Split text into words for animation while preserving spaces
    const text = skillsTextRef.current.textContent || '';
    const words = text.split(/(\s+)/); // Split on spaces but keep the spaces
    skillsTextRef.current.innerHTML = words
      .map((word) => {
        // If it's just whitespace, preserve it without wrapping in span
        if (word.trim() === '') {
          return word;
        }
        return `<span class="inline-block">${word}</span>`;
      })
      .join('');

    const wordSpans = skillsTextRef.current.querySelectorAll('span');

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
          trigger: skillsTextRef.current,
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

  // Skills animation
  useEffect(() => {
    const skillCards = skillsContainerRef.current?.children;
    if (!skillCards) return;

    gsap.fromTo(
      skillCards,
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillsContainerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  // Progress animation
  useEffect(() => {
    progressRefs.current.forEach((progressBar, index) => {
      if (!progressBar) return;

      gsap.fromTo(
        progressBar,
        {
          width: '0%',
        },
        {
          width: `${skills[index].level}%`,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: progressBar,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative bg-alt-black text-alt-white sm:mt-0 tablet:mt-20 sm:mb-12 tablet:mb-32 laptop:mb-40 laptop_l:mb-52 w-screen overflow-hidden">
      <div
        className={cn(
          'relative',
          isArabic ? ' sm:pr-6 laptop:pr-16 ' : 'sm:pl-6 laptop:pl-16 '
        )}
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <h1
          ref={skillsTextRef}
          className={cn(
            'sm:text-6xl tablet:text-8xl uppercase perspective-1000',
            isArabic ? 'tajawal-font text-right' : 'milker-font  text-left '
          )}
        >
          {t('heading')}
        </h1>
      </div>

      <div
        ref={skillsContainerRef}
        className="sm:px-6 laptop:px-16 mt-8 grid sm:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4"
        dir="ltr"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 px-2 gap-4 h-fit w-auto overflow-hidden border-2 border-gray-900 rounded-2xl"
            dir="ltr"
          >
            <skill.svgElement />

            <div className="w-full" dir="ltr">
              <p className="font-medium sm:text-sm laptop_l:text-lg capitalize tracking-wider font-sans text-left">
                {skill.skill}
              </p>

              <div className="flex justify-start items-center gap-4">
                <div className="bg-gray-900 w-3/4 rounded-full">
                  <div
                    ref={(el) => {
                      progressRefs.current[index] = el;
                    }}
                    className="h-1 bg-alt-white rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="font-sans sm:text-xs laptop_l:text-base whitespace-nowrap">
                  {skill.level} %
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
