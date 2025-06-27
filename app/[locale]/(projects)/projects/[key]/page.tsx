'use client';
import Cursor from '@/components/shared/Cursor';
import { Transition } from '@/components/shared/Transition';
import { useParams } from 'next/navigation';
import { HeroScroll } from './HeroScroll';
import { useLocale, useTranslations } from 'next-intl';

const ProjectPage = () => {
  const params = useParams();
  const { key } = params;

  const t = useTranslations('ProjectsSection');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const isFrench = locale === 'fr';
  const isEnglish = locale === 'en';

  const title = t(`${key}.title`);
  const imageSrc = `/Projects/${key}.png`;
  const link = t(`${key}.link`);

  const text1 = t(`${key}.text1`);
  const text2 = t(`${key}.text2`);
  const text3 = t(`${key}.text3`);
  const text4 = t(`${key}.text4`);

  return (
    <main>
      <Transition>
        <Cursor />
        <HeroScroll
          title={title}
          image={imageSrc}
          description={[text1, text2, text3, text4]}
          link={link}
          isArabic={isArabic}
          isFrench={isFrench}
          isEnglish={isEnglish}
        />
      </Transition>
    </main>
  );
};

export default ProjectPage;
