'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

interface VelocityScrollProps {
  text: string;
  default_velocity?: number;
  className?: string;
  rtl?: boolean;
}

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
  rtl?: boolean;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll({
  text,
  default_velocity = 5,
  className,
  rtl = false,
}: VelocityScrollProps) {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  function ParallaxText({
    children,
    baseVelocity = 100,
    className,
    rtl,
  }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && textRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const textWidth = textRef.current.offsetWidth;
          const newRepetitions =
            Math.ceil((containerWidth / textWidth) * 3) + 2;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();
      window.addEventListener('resize', calculateRepetitions);
      return () => window.removeEventListener('resize', calculateRepetitions);
    }, [children]);

    const x = useTransform(
      baseX,
      (v) =>
        `${
          isArabic
            ? wrap(100 / repetitions, 0, v)
            : wrap(-100 / repetitions, 0, v)
        }%`
    );

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      if (rtl) {
        moveBy *= -1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap w-full"
        style={{ direction: rtl ? 'rtl' : 'ltr' }}
      >
        <motion.div
          className={cn('inline-block min-w-full', className)}
          style={{ x }}
        >
          {Array.from({ length: repetitions }).map((_, i) => (
            <span
              key={i}
              ref={i === 0 ? textRef : null}
              className="inline-block px-2"
            >
              {children}
            </span>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-screen bg-alt-white">
      <ParallaxText
        baseVelocity={default_velocity}
        className={className}
        rtl={rtl}
      >
        {text}
      </ParallaxText>
    </div>
  );
}
