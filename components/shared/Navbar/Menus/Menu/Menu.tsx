'use client';

import { motion } from 'framer-motion';
import { mountAnim, opacity, slideLeft } from '../anim';
import Link from './link';
import styles from './style.module.scss';
import { menuItems } from '@/lib/constants';
import SocialMenus from './SocialMenu';
import { useLocale } from 'next-intl';

export default function Menu({ closeMenu }: { closeMenu: () => void }) {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <motion.div
      className={styles.menu}
      variants={opacity}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            closeMenu();
          }}
          width="30"
          height="30"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L67 67" stroke="#0c0c0c" />
          <path d="M66.5 1L0.999997 66.5" stroke="#0c0c0c" />
        </motion.svg>
      </div>

      <div className={styles.body}>
        {menuItems.map((item, index) => {
          return (
            <Link data={item} index={index} key={index} closeMenu={closeMenu} />
          );
        })}
      </div>

      <SocialMenus />
    </motion.div>
  );
}
