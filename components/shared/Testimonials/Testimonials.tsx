import gsap from 'gsap';
import { useEffect, useMemo, useRef } from 'react';
import SplitType from 'split-type';
import TestimonialsCard from './TestimonialsCard/TestimonialsCard';

export default function Testimonials() {
  const firstRef = useRef<HTMLHeadingElement>(null);
  const secondRef = useRef<HTMLHeadingElement>(null);
  const thirdRef = useRef<HTMLHeadingElement>(null);

  const testimonialRefs = useMemo(() => [firstRef, secondRef, thirdRef], []);

  useEffect(() => {
    const splits: SplitType[] = [];

    testimonialRefs.forEach((ref) => {
      if (!ref.current) return;

      const split = new SplitType(ref.current, {
        types: 'chars',
        absolute: false,
      });

      gsap.fromTo(
        split.chars,
        {
          y: 100,
          opacity: 0,
          rotationX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.02,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      splits.push(split);
    });

    return () => splits.forEach((split) => split.revert());
  }, [testimonialRefs]);

  return (
    <div
      id="testimonials"
      className="sm:mt-12 tablet:mt-40 w-screen overflow-hidden"
      dir="ltr"
    >
      <h1
        ref={firstRef}
        className="milker-font tracking-wider sm:text-3xl mobile_l:text-4xl tablet:text-6xl laptop:text-8xl uppercase perspective-1000 text-alt-white sm:pl-6 tablet:pl-16"
      >
        Testimonials
      </h1>

      <div className="sm:text-xl mobile_m:text-2xl mobile_l:text-3xl tablet:text-5xl laptop:text-6xl sm:pl-6 tablet:pl-16 sm:mt-2 tablet:mt-8 houseMontage-font">
        <h2 ref={secondRef}>Don&rsquo;t take my word for it!</h2>
        <h2 ref={thirdRef}>Hear it from my clients.</h2>
      </div>

      <TestimonialsCard />
    </div>
  );
}
