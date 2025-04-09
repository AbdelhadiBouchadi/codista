import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="h-screen w-screen relative bg-alt-black">
      <Spline scene="https://prod.spline.design/l3e2Yz0hydL8rwNE/scene.splinecode" />

      <Link href={'/'} className="absolute bottom-0 left-0 w-full">
        <VelocityScroll
          text={t('clickHere')}
          default_velocity={3}
          className="text-4xl milker-font py-4 bg-alt-white text-alt-black"
        />
      </Link>
    </div>
  );
}
