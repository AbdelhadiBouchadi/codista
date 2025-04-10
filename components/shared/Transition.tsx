'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useTimeOut } from '@/hooks/use-time-out';
const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: '-100vh',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

type TransitionProps = {
  children: React.ReactNode;
};

export function Transition({ children }: TransitionProps) {
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();

  useTimeOut({
    callback: () => {
      setLoading(false);
      window.scrollTo(0, 0);
    },
    duration: 2000,
    deps: [pathname],
  });

  return (
    <div key={pathname} className="overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <IntroLoader />}
      </AnimatePresence>
      {children}
    </div>
  );
}

function IntroLoader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen flex items-center justify-center fixed z-[99] bg-[#EFEFEF] houseMontage-font"
      dir="ltr"
    >
      {dimension.width > 0 && (
        <>
          <div className="relative h-full flex items-center justify-center">
            <motion.div
              variants={opacity}
              initial="initial"
              animate="enter"
              className="text-alt-black z-[1]"
            >
              <h1 id="animated-text" className="sm:text-6xl tablet:text-8xl">
                CODISTA
                <span className="text-4xl align-super">™</span>
              </h1>
              <div className="mt-4 text-3xl text-center tracking-widest portfolio-text">
                PORTFOLIO
              </div>
            </motion.div>
          </div>

          <svg className="absolute top-0 w-full h-[calc(100%+300px)] ">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className="fill-[#EFEFEF]"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
