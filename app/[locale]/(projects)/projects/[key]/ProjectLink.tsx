'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectLinkProps {
  link: string;
  title: string;
}

export function ProjectLink({ link, title }: ProjectLinkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !buttonRef.current) return;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(buttonRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 50,
      });

      gsap.set(glowRef.current, {
        opacity: 0,
        scale: 0.5,
      });

      // Entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(buttonRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
      }).to(
        glowRef.current,
        {
          opacity: 0.6,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.4'
      );

      // Hover animations
      const button = buttonRef.current;
      const glow = glowRef.current;

      button?.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(glow, {
          opacity: 1,
          scale: 1.2,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      button?.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(glow, {
          opacity: 0.6,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      // Sparkles animation
      const sparkleElements = sparklesRef.current?.children;
      if (sparkleElements) {
        gsap.set(sparkleElements, {
          opacity: 0,
          scale: 0,
          rotation: 0,
        });

        const sparkleAnimation = gsap.timeline({ repeat: -1, duration: 4 });
        sparkleAnimation
          .to(sparkleElements, {
            opacity: 1,
            scale: 1,
            rotation: 360,
            duration: 0.6,
            stagger: 0.2,
            ease: 'back.out(1.7)',
          })
          .to(
            sparkleElements,
            {
              opacity: 0,
              scale: 0,
              duration: 0.4,
              stagger: 0.1,
              ease: 'power2.in',
            },
            '+=1'
          );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    // Add a subtle animation on click
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
      });
    }
  };

  return (
    <div ref={containerRef} className="flex justify-center mt-16 relative">
      {/* Background glow effect - matching aurora colors */}
      <div
        ref={glowRef}
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-300/20 to-violet-200/20 rounded-full blur-xl"
      ></div>

      {/* Sparkles decoration - matching aurora colors */}
      <div ref={sparklesRef} className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-0 left-1/4 w-4 h-4 text-blue-400" />
        <Sparkles className="absolute top-1/4 right-1/4 w-3 h-3 text-indigo-300" />
        <Sparkles className="absolute bottom-1/4 left-1/3 w-5 h-5 text-violet-200" />
        <Sparkles className="absolute bottom-0 right-1/3 w-3 h-3 text-blue-300" />
      </div>

      {/* Main button - matching aurora colors */}
      <a
        ref={buttonRef}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="relative group px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-300 to-violet-200 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 z-10"
      >
        {/* Button content */}
        <span className="relative z-10 text-slate-900 font-bold">
          Visit {title}
        </span>
        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10 text-slate-900" />

        {/* Animated border - matching aurora colors */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-indigo-200 to-violet-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

        {/* Inner background - matching aurora colors */}
        <div className="absolute inset-[2px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-300 to-violet-200 group-hover:from-blue-400 group-hover:via-indigo-200 group-hover:to-violet-100 transition-all duration-300"></div>
      </a>
    </div>
  );
}
