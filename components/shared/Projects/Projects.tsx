import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ProjectsContent from './ProjectsContent/ProjectsContent';
import { useLocale, useTranslations } from 'next-intl';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

export default function Projects() {
  const ProjectsTextRef = useRef<HTMLHeadingElement>(null);
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const t = useTranslations('ProjectsSection');

  useEffect(() => {
    if (!ProjectsTextRef.current) return;

    // Split text into words for animation while preserving spaces
    const text = ProjectsTextRef.current.textContent || '';
    const words = text.split(/(\s+)/); // Split on spaces but keep the spaces
    ProjectsTextRef.current.innerHTML = words
      .map((word) => {
        // If it's just whitespace, preserve it without wrapping in span
        if (word.trim() === '') {
          return word;
        }
        return `<span class="inline-block">${word}</span>`;
      })
      .join('');

    const wordSpans = ProjectsTextRef.current.querySelectorAll('span');

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
          trigger: ProjectsTextRef.current,
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
      id="projects"
      className="text-alt-white houseMontage-font w-screen overflow-hidden"
    >
      <h1
        ref={ProjectsTextRef}
        className={cn(
          'sm:text-2xl mobile_l:text-3xl tablet:text-6xl laptop:text-7xl laptop_l:text-8xl uppercase perspective-1000 text-alt-white ',
          isArabic
            ? 'text-right tajawal-font sm:pr-6 laptop:pr-16'
            : 'text-left milker-font sm:pl-6 laptop:pl-16'
        )}
      >
        {t('heading')}
      </h1>

      <ProjectsContent />
    </div>
  );
}
