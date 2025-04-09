import { useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const links = document.querySelectorAll('a');
    const cursorText = document.querySelector('.custom-cursor') as HTMLElement;
    const cursorPointerElements = document.querySelectorAll('.cursor-pointer');

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = (event: Event) => {
      const link = event.target as HTMLElement;
      if (link.classList.contains('view')) {
        gsap.to(cursor, { scale: 2 });
        if (cursorText) {
          cursorText.style.display = 'block';
        }
      } else {
        gsap.to(cursor, { scale: 2 });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
    };

    document.addEventListener('mousemove', onMouseMove as EventListener);
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });
    cursorPointerElements.forEach((element) => {
      element.addEventListener('mouseenter', onMouseEnterLink);
      element.addEventListener('mouseleave', onMouseLeaveLink);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 0.5, delay: 1 }}
      id="custom-cursor"
      className="custom-cursor sm:hidden lg:block"
    ></motion.div>
  );
}
