import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import SplitType from 'split-type';

export default function Intro() {
  const introRef = useRef(null);
  const textRef = useRef(null);
  const countRef = useRef(null);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    gsap.set([textRef.current, ...overlayRefs.current], {
      visibility: 'hidden',
    });

    const text = new SplitType('#animated-text', { types: 'chars' });
    const chars = text.chars;
    const portfolioText = document.querySelector('.portfolio-text');
    const tl = gsap.timeline();

    // Count animation
    const countAnimation = gsap.to(countRef.current, {
      duration: 2,
      onUpdate: () => {
        const progress = Math.round(countAnimation.progress() * 100);
        setCount(progress);
      },
    });

    gsap.set([textRef.current, ...overlayRefs.current], {
      visibility: 'visible',
    });

    tl.from(overlayRefs.current, {
      scaleX: 0,
      transformOrigin: 'left',
      duration: 1.2,
      stagger: 0.1,
      ease: 'power4.inOut',
    })
      .from(chars, {
        y: 100,
        opacity: 0,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: 'back.out(1.7)',
      })
      .from(
        portfolioText,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power4.out',
        },
        '-=0.4'
      )
      .to(
        chars,
        {
          y: -100,
          rotateX: 90,
          opacity: 0,
          stagger: 0.02,
          duration: 0.6,
          ease: 'power4.in',
        },
        '-=0.2'
      )
      .to(
        portfolioText,
        {
          y: -50,
          opacity: 0,
          duration: 0.4,
          ease: 'power4.in',
        },
        '-=0.4'
      )
      .to(
        countRef.current,
        {
          scale: 1.2,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        },
        '-=0.3'
      )
      .to([overlayRefs.current, textRef.current], {
        x: '150%',
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.05,
        onComplete: () => {
          gsap.set(introRef.current, { display: 'none' });
        },
      });
    return () => {
      tl.kill();
      countAnimation.kill();
    };
  }, []);

  return (
    <div
      ref={introRef}
      className="fixed top-0 left-0 h-screen w-screen z-[9999] overflow-hidden bg-none houseMontage-font"
      dir="ltr"
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el: HTMLDivElement | null) => {
            overlayRefs.current[i] = el;
          }}
          className="absolute h-[20%] w-full"
          style={{
            top: `${i * 20}%`,
            backgroundColor: '#EFEFEF',
          }}
        />
      ))}

      <div className="relative h-full flex items-center justify-center">
        <div ref={textRef} className="text-alt-black z-10">
          <h1 id="animated-text" className="sm:text-6xl tablet:text-8xl">
            CODISTA
            <span className="text-4xl align-super">&trade;</span>
          </h1>
          <div className="mt-4 text-3xl text-center tracking-widest portfolio-text">
            PORTFOLIO
          </div>
        </div>
      </div>

      <div
        ref={countRef}
        className="sarcolenta-font fixed bottom-10 right-10 sm:text-6xl tablet:text-8xl text-alt-black"
      >
        {count}%
      </div>
    </div>
  );
}
