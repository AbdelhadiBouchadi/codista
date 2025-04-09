import { CardCarouselData, cardCarouselData } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useLenis } from 'lenis/react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { PiPhoneCallBold } from 'react-icons/pi';

export default function CardCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const t = useTranslations('ServicesSection.CarouselCardData');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const carousel = carouselRef.current;
    if (!carousel) return;

    const mediaQuery = {
      mobile: window.matchMedia('(max-width: 767px)'),
      laptop: window.matchMedia('(min-width: 1440px)'),
    };

    const createAnimation = () => {
      gsap.to(carousel, {
        x: () =>
          isArabic
            ? (carousel.scrollWidth - window.innerWidth) * 1.5
            : -(carousel.scrollWidth - window.innerWidth) * 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: mediaQuery.mobile.matches
            ? 'top top+=100'
            : mediaQuery.laptop.matches
            ? 'top top+=100'
            : 'top top+=128',
          pin: true,
          scrub: 3,
          end: () =>
            `+=${(carousel.scrollWidth - window.innerWidth) * 1.5 + 200}`,
          invalidateOnRefresh: true,
        },
      });
    };

    createAnimation();

    Object.values(mediaQuery).forEach((mq) => {
      mq.addEventListener('change', createAnimation);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      Object.values(mediaQuery).forEach((mq) => {
        mq.removeEventListener('change', createAnimation);
      });
    };
  }, [isArabic]);

  return (
    <div className="my-8">
      <div
        ref={sectionRef}
        className="sm:h-[70vh] tablet:h-screen"
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <div>
          <div
            ref={carouselRef}
            className={cn(
              'flex items-center justify-start gap-4 md:gap-6 lg:gap-8',
              isArabic
                ? 'mr-[5%] md:mr-[8%] lg:mr-[10%]'
                : 'ml-[5%] md:ml-[8%] lg:ml-[10%]'
            )}
          >
            {cardCarouselData.map((card, cardsIndex) => {
              const heading = t(`${card.key}.heading`);
              const description = t(`${card.key}.description`);

              return (
                <div
                  key={cardsIndex}
                  className="h-[35rem] w-[20rem] md:h-[38rem] md:w-[22rem]  lg:w-[25rem] bg-white text-black rounded-3xl border-4 overflow-hidden relative flex-shrink-0 p-3 md:p-4 lg:p-5"
                >
                  <h1
                    className={cn(
                      'text-4xl h-12 md:h-14 lg:h-16 capitalize',
                      isArabic ? 'tajawal-font' : 'sarcolenta-font'
                    )}
                  >
                    {heading}
                  </h1>

                  <div className="h-[calc(100%-8rem)] flex items-center justify-center">
                    <DotLottieReact src={card.src} loop autoplay />
                  </div>

                  {cardsIndex !== 5 && (
                    <Link
                      href={'#contacts'}
                      onClick={() => {
                        lenis?.scrollTo('#contacts', { lerp: 0.02 });
                      }}
                      className="w-full flex justify-center items-center absolute bottom-3 left-0 z-30"
                    >
                      <p className="px-4 md:px-6 lg:px-8 text-sm md:text-base">
                        {description}
                      </p>
                    </Link>
                  )}

                  {cardsIndex === 5 && (
                    <Link
                      href={'#contacts'}
                      onClick={() => {
                        lenis?.scrollTo('#contacts', { lerp: 0.02 });
                      }}
                      className="w-full flex justify-center items-center absolute bottom-3 left-0 z-30"
                    >
                      <div className="bg-alt-black text-white rounded-full text-base md:text-lg p-2">
                        <PiPhoneCallBold />
                      </div>

                      <p
                        className={cn(
                          'text-sm md:text-base',
                          isArabic ? 'mr-2' : 'ml-2'
                        )}
                      >
                        {description}
                      </p>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
