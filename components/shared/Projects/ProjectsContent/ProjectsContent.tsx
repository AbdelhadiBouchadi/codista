import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Home.module.css';
import { projects } from '@/lib/constants';
import { useLocale } from 'next-intl';
import { useTranslations } from 'use-intl';
import { cn } from '@/lib/utils';
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react';

export default function ProjectsContent() {
  const router = useRouter();
  const [isShowMore, setIsShowMore] = useState<number | null>(null);

  const t = useTranslations('ProjectsSection');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const manageMouseEnter = (e: any, index: number) => {
    gsap.to(e.target, {
      top: '-2vw',
      backgroundColor: projects[index].color,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e: any, index: number) => {
    gsap.to(e.target, {
      top: '0',
      backgroundColor: 'white',
      duration: 0.3,
      delay: 0.1,
    });
  };

  return (
    <div
      className={`${styles.container} milker-font text-alt-black sm:mt-4 laptop_l:mt-8`}
    >
      <div className={styles.projectContainer}>
        {projects.map((project, index) => {
          const title = t(`${project.key}.title`);

          return (
            <div
              onClick={() => {
                const formattedTitle = encodeURIComponent(project.title);
                router.push(`/projects/${formattedTitle}`);
              }}
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
                setIsShowMore(index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, index);
                setIsShowMore(null);
              }}
              key={index}
              className="sm:px-3.5 tablet:px-4 laptop:px-16 flex justify-between items-center gap-4 relative"
            >
              <p className={cn(isArabic && 'tajawal-font')}>{title}</p>

              <AnimatePresence mode="wait">
                {isShowMore === index && (
                  <motion.span
                    initial={{
                      scale: 0,
                      rotate: -180,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0,
                      rotate: 180,
                      opacity: 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      mass: 1,
                      delay: 0.3,
                    }}
                    className={cn(
                      'h-32 w-32 bg-white !absolute -top-10 cursor-pointer rounded-full overflow-hidden hover:shadow-lg transition-shadow',
                      isArabic ? 'left-40' : 'right-40'
                    )}
                    style={{
                      border: `1px solid black`,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    }}
                  >
                    <motion.span
                      className="w-full h-full flex justify-center items-center p-4"
                      whileHover={{
                        scale: [1, 1.2, 1.1],
                        rotate: isArabic ? [0, 10, -45] : [0, 10, 45],
                        transition: {
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                          scale: {
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 1,
                          },
                        },
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                      }}
                    >
                      {isArabic ? (
                        <ArrowUpLeft className="size-12" />
                      ) : (
                        <ArrowUpRight className="size-12" />
                      )}
                    </motion.span>
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
