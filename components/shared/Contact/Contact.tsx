import SVGCurve from './SVGcurve/SVGCurve';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ContactForm from './ContactForm/ContactForm';

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);
  const paths = useRef<SVGTextPathElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  useEffect(() => {
    scrollYProgress.on('change', (e) => {
      paths.current.forEach((path, i) => {
        if (path) {
          path.setAttribute('startOffset', `${-40 + i * 40 + e * 40}%`);
        }
      });
    });
  }, [scrollYProgress]);

  return (
    <div
      id="contacts"
      className="h-fit w-screen overflow-hidden"
      ref={container}
    >
      <SVGCurve paths={paths} /> <ContactForm />
    </div>
  );
}
