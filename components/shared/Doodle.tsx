import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocale } from 'next-intl';
gsap.registerPlugin(ScrollTrigger);

export default function Doodle() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  useEffect(() => {
    gsap.to('.doodle-image', {
      scale: 2,
      ease: 'Power1.inOut',
      scrollTrigger: {
        trigger: '.doodle-image',
        start: 'top 80%',
        end: 'top 10%',
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    gsap.to('.doodle-image2', {
      scale: 2,
      ease: 'Power1.inOut',
      scrollTrigger: {
        trigger: '.doodle-image2',
        start: 'top 80%',
        end: 'top 10%',
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    gsap.to('.my-text', {
      x: isArabic ? '-17vw' : '17vw',
      ease: 'Power1.inOut',
      scrollTrigger: {
        trigger: '.my-text',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [isArabic]);

  useEffect(() => {
    gsap.to('.my-text2', {
      x: isArabic ? '-17vw' : '-17vw',
      ease: 'Power1.inOut',
      scrollTrigger: {
        trigger: '.my-text',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [isArabic]);

  return (
    <div
      className="text-white w-screen overflow-hidden font-medium sm:px-6 sm:py-10 tablet:px-8 tablet:py-40 sm:text-4xl tablet:text-6xl laptop:text-8xl houseMontage-font rounded-b-3xl"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div
        className="flex w-full justify-center items-center"
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <div className="sm:h-20 tablet:h-32 w-96 rounded-full overflow-hidden">
          <Image
            src="/kaleidoscope1.jpg"
            alt="image"
            height={1000}
            width={4000}
            className="sm:h-20 tablet:h-32 w-[40rem] rounded-full doodle-image object-cover"
          />
        </div>
        <p className="px-4">With</p>
      </div>

      <div className="my-text" dir={isArabic ? 'rtl' : 'ltr'}>
        <p className="py-8 px-4">Changes</p>
      </div>

      <div
        className="flex w-full justify-center items-center"
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <div className="sm:h-20 tablet:h-32 w-96 rounded-full overflow-hidden">
          <Image
            src="/kaleidoscope2.jpg"
            alt="image"
            height={6000}
            width={6000}
            priority
            className="sm:h-20 tablet:h-32 w-[50rem] rounded-full object-cover doodle-image2"
          />
        </div>
        <p className="px-4">Come</p>
      </div>

      <div className="my-text2" dir={isArabic ? 'rtl' : 'ltr'}>
        <p className="py-8 text-right pl-4">Opportunities</p>
      </div>
    </div>
  );
}
