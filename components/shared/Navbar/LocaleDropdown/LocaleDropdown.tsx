'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe2 } from 'lucide-react';
import styles from './style.module.scss';
import { useLocale } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Locale {
  code: string;
  name: string;
  dir?: 'ltr' | 'rtl';
}

const locales: Locale[] = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
];

export default function LocaleDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale();

  const selectedLocale =
    locales.find((locale) => locale.code === currentLocale) || locales[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocaleChange = (nextLocale: string) => {
    const path = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
    const search = searchParams.toString();
    const newUrl = search ? `${path}?${search}` : path;

    startTransition(() => {
      router.replace(newUrl);
      setIsOpen(false);
    });
  };

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <motion.button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe2 className="w-4 h-4" />
        <span className={selectedLocale.code === 'ar' ? 'tajawal-font' : ''}>
          {selectedLocale.name}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {locales.map((locale) => (
              <motion.button
                key={locale.code}
                className={`${styles.option} ${
                  selectedLocale.code === locale.code ? styles.selected : ''
                } ${
                  locale.code === 'ar'
                    ? 'tajawal-font text-lg'
                    : 'milker-font text-sm'
                } ${isPending && 'opacity-50 cursor-not-allowed'}`}
                onClick={() => handleLocaleChange(locale.code)}
                whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                dir={locale.dir}
              >
                {locale.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
