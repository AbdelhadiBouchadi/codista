'use client';

import { inter } from '@/fonts';
import { footerMenuItem, socials } from '@/lib/constants';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function FooterMenu() {
  const lenis = useLenis();
  const menuRefs = useRef<Array<HTMLDivElement | null>>([]);
  const socialRefs = useRef<Array<HTMLDivElement | null>>([]);

  const locale = useLocale();
  const isArabic = locale === 'ar';
  const t = useTranslations('Footer.menu');
  const t2 = useTranslations('Footer.socials');

  const setMenuRef = (el: HTMLDivElement | null, index: number) => {
    menuRefs.current[index] = el;
  };

  const setSocialRef = (el: HTMLDivElement | null, index: number) => {
    socialRefs.current[index] = el;
  };

  useEffect(() => {
    const allRefs = [...menuRefs.current, ...socialRefs.current];

    allRefs.forEach((item) => {
      if (!item) return;

      const text = item.querySelector('.text-original');
      const textClone = item.querySelector('.text-clone');

      const tl = gsap.timeline({ paused: true });
      tl.to(text, { yPercent: -100, duration: 0.4, ease: 'power2.inOut' }).to(
        textClone,
        { yPercent: -200, duration: 0.4, ease: 'power2.inOut' },
        0
      );

      item.addEventListener('mouseenter', () => tl.play());
      item.addEventListener('mouseleave', () => tl.reverse());
    });
  }, []);

  return (
    <div className="flex justify-between items-start">
      <div className="w-1/3">
        <ul
          className={`sm:text-[8px] tablet:text-xs uppercase ${isArabic ? 'tajawal-regular' : inter.className} font-medium text-left`}
        >
          {socials.map((social, index) => {
            const name = t2(`${social.key}`);

            return (
              <li key={index}>
                <Link href={social.href} target="_blank">
                  <div
                    ref={(el) => setSocialRef(el, index)}
                    className="menu-item-container sm:h-[22px] tablet:h-8 overflow-hidden cursor-pointer"
                  >
                    <div className="text-original">
                      <p>{name}</p>
                    </div>
                    <div className="text-clone absolute top-full">
                      <p>{name}</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}{' '}
        </ul>
      </div>

      <div className="w-1/3">
        <ul
          className={`sm:text-[8px] tablet:text-xs uppercase ${isArabic ? 'tajawal-regular' : inter.className} font-medium text-right`}
        >
          {footerMenuItem.map((menu, index) => {
            const name = t(`${menu.key}`);

            return (
              <li key={index}>
                <Link
                  onClick={() => {
                    lenis?.scrollTo(`${menu.href}`, { lerp: 0.02 });
                  }}
                  href={menu.href}
                >
                  <div
                    ref={(el) => setMenuRef(el, index)}
                    className="menu-item-container sm:h-[22px] tablet:h-8 overflow-hidden cursor-pointer"
                  >
                    <div className="text-original">{name}</div>
                    <div className="text-clone absolute top-full">{name}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
