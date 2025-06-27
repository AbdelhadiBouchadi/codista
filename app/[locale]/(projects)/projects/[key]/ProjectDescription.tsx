'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectDescriptionProps {
  description: string[];
  isArabic?: boolean;
  isFrench?: boolean;
  isEnglish?: boolean;
}

export function ProjectDescription({
  description,
  isArabic,
  isFrench,
  isEnglish,
}: ProjectDescriptionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const paragraphRefs = useRef<Array<HTMLParagraphElement | null>>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set([titleRef.current], {
        opacity: 0,
        y: 100,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(lineRef.current, {
        scaleX: 1,
        duration: 1.2,
        ease: 'power3.out',
      }).to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      );

      // Animate each paragraph (split by words)
      paragraphRefs.current.forEach((p, i) => {
        if (p) {
          const text = p.textContent || '';
          const words = text.split(' ');
          p.innerHTML = words
            .map((word) => `<span class="inline-block">${word}&nbsp;</span>`)
            .join('');

          const wordSpans = p.querySelectorAll('span');

          gsap.set(wordSpans, { opacity: 0, y: 20 });

          gsap.to(wordSpans, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.04,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: p,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [description]);

  if (!description || description.length === 0) return null;

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto px-6 md:px-8">
      {/* Decorative line */}
      <div
        ref={lineRef}
        className="h-1 bg-gradient-to-r from-blue-500 via-indigo-300 to-violet-200 mb-12 rounded-full w-full"
      ></div>

      {/* Title */}
      <h2
        ref={titleRef}
        className={cn(
          'text-3xl md:text-5xl font-bold text-white mb-8 houseMontage-font text-center',
          isArabic ? 'tajawal-font' : 'milker-font'
        )}
      >
        {isArabic && 'وصف المشروع'}
        {isFrench && 'A propos du projet'}
        {isEnglish && 'About Project'}
      </h2>

      {/* Paragraphs */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {description.map((text, idx) => (
          <p
            key={idx}
            ref={(el) => {
              paragraphRefs.current[idx] = el;
            }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl "
          >
            {text}
          </p>
        ))}
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
      <div
        className="absolute top-1/2 left-10 w-1 h-1 bg-indigo-300 rounded-full opacity-40 animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-violet-200 rounded-full opacity-50 animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>
    </div>
  );
}
