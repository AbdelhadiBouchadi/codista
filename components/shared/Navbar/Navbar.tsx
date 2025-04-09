'use client';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { MouseEvent, useState } from 'react';
import Logo from './Logo';
import Pricing from './Pricing';
import Menus from './Menus/Menu';
import LocaleDropdown from './LocaleDropdown/LocaleDropdown';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', () => {
    const footer = document.querySelector('.footer');
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      setHidden(footerTop <= window.innerHeight);
    }
  });

  return (
    <motion.div
      className="fixed top-0 w-full flex justify-between items-center sm:px-4 laptop:px-10 sm:py-2 laptop:py-1.5 border-b-2 border-alt-white bg-transparent backdrop-blur-sm z-[99]"
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      onContextMenu={(e: MouseEvent) => {
        e.preventDefault();
      }}
      dir="ltr"
    >
      <Logo />
      <div className="flex justify-center items-center gap-2">
        <LocaleDropdown />
        <Pricing />
      </div>
    </motion.div>
  );
}
