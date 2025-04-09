import AWSSVG from '@/components/shared/Skills/SVGs/AWS';
import FirebaseSVG from '@/components/shared/Skills/SVGs/Firebase';
import GithubSVG from '@/components/shared/Skills/SVGs/Github';
import MongodbSVG from '@/components/shared/Skills/SVGs/MongoDB';
import NextjsSVG from '@/components/shared/Skills/SVGs/NextJS';
import NodeJsSVG from '@/components/shared/Skills/SVGs/NodeJS';
import PlaywrightSVG from '@/components/shared/Skills/SVGs/Playwright';
import PNPMSVG from '@/components/shared/Skills/SVGs/PNPM';
import ReactjsSVG from '@/components/shared/Skills/SVGs/ReactJS';
import TailwindSvg from '@/components/shared/Skills/SVGs/TailwindCSS';
import TypescriptSVG from '@/components/shared/Skills/SVGs/Typescript';
import VercelSVG from '@/components/shared/Skills/SVGs/Vercel';

interface FooterMenuItem {
  href: string;
  name: string;
}

export interface MenuItem {
  key: string;
  href: string;
  images: string[];
}

export const menuItems: MenuItem[] = [
  {
    key: 'About',
    href: '#about',
    images: ['1.jpg', '2.jpg'],
  },
  {
    key: 'Services',
    href: '#services',
    images: ['3.jpg', '4.jpg'],
  },
  {
    key: 'Projects',
    href: '#projects',
    images: ['5.jpg', '6.jpg'],
  },
  {
    key: 'Testimonials',
    href: '#testimonials',
    images: ['7.jpg', '8.jpg'],
  },
  {
    key: 'Contacts',
    href: '#contacts',
    images: ['9.jpg', '10.jpg'],
  },
];

export const footerMenuItem: FooterMenuItem[] = [
  {
    href: '#about',
    name: 'About',
  },
  {
    href: '#services',
    name: 'Services',
  },
  {
    href: '#projects',
    name: 'Projects',
  },
  {
    href: '#contacts',
    name: 'Contacts',
  },
  {
    href: '#testimonials',
    name: 'Testimonials',
  },
];

interface ServicesItem {
  id: string;
  label: string;
}

export const servicesItems: ServicesItem[] = [
  { id: 'website', label: 'Website Development' },
  { id: 'mobile', label: 'Mobile App Development' },
  { id: 'design', label: 'UI/UX Design' },
  { id: 'SEO', label: 'SEO Optimization' },
  { id: 'consulting', label: 'Technical Consulting' },
  { id: 'branding', label: 'Branding' },
  { id: 'courses Offered', label: 'Courses Offered' },
  { id: 'other', label: 'Other services' },
];

export const socials = [
  { name: 'Mail', href: 'mailto:codista.srv@gmail.com' },

  {
    name: 'Whatsapp',
    href: 'https://wa.me/+905526417998?text=Hello!%20I%27m%20interested%20in%20your%20services.%20Could%20you%20please%20provide%20more%20details%3F',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/codista.srv/',
  },
];

interface SocialMenus {
  name: string;
  href: string;
}

export const socialMenus: SocialMenus[] = [
  {
    name: 'WA',
    href: 'https://wa.me/+905526417998?text=Hello!%20I%27m%20interested%20in%20your%20web%20development%20services.%20Could%20you%20please%20provide%20more%20details%3F',
  },
  {
    name: 'IG',
    href: 'https://www.instagram.com/codista.srv/',
  },
  {
    name: 'GM',
    href: 'mailto:codista.srv@gmail.com',
  },
];

export interface CardCarouselData {
  key: string;
  src: string;
  heading: string;
  description?: string;
}

export const cardCarouselData: CardCarouselData[] = [
  {
    key: 'web',
    src: 'https://lottie.host/13d7c02a-8070-4fe1-ac44-617151c8ee72/TIn3RoTP6Q.lottie',
    heading: 'web/mobile app development',
    description:
      'Creating sleek, modern websites that bring your vision to life.',
  },
  {
    key: 'ecom',
    src: 'https://lottie.host/31fbf91b-f14d-436a-a96b-f449267c093f/jITmGRvjEj.lottie',
    heading: 'E-commerce Solutions',
    description:
      'Powering your online store with seamless and scalable solutions.',
  },
  {
    key: 'hosting',
    src: 'https://lottie.host/cafaa3ff-69e1-4dd9-b07f-16e1d66843d7/8N1Z6wzNkn.lottie',
    heading: 'Deployment and Hosting',
    description:
      'Reliable deployment and hosting for smooth, worry-free operations.',
  },
  {
    key: 'cms',
    src: 'https://lottie.host/c25383ca-9288-4141-bd37-2d68e14b0282/pkma0hC5ov.lottie',
    heading: 'C.M.S Management',
    description:
      'Effortless CMS management to keep your content fresh and engaging.',
  },
  {
    key: 'seo',
    src: 'https://lottie.host/5cac3316-31a5-4213-9645-455edfe6fa75/FGUvnraSaJ.lottie',
    heading: 'Boost Traffic with SEO',
  },
  {
    key: 'more',
    src: 'https://lottie.host/63d2f59b-40b8-4240-a579-25d5c20eb253/Tg6ONBypmm.lottie',
    heading: 'And much more...',
  },
];

interface Skills {
  skill: string;
  level: number | string;
  svgElement: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const skills: Skills[] = [
  // Frontend Skills
  { skill: 'Nextjs', level: 95, svgElement: NextjsSVG },
  { skill: 'Reactjs', level: 70, svgElement: ReactjsSVG },
  { skill: 'Typescript', level: 80, svgElement: TypescriptSVG },
  { skill: 'Tailwind CSS', level: 80, svgElement: TailwindSvg },

  // Backend & Database Skills
  { skill: 'Nodejs', level: 55, svgElement: NodeJsSVG },
  { skill: 'Mongo DB', level: 50, svgElement: MongodbSVG },
  { skill: 'Firebase', level: 64, svgElement: FirebaseSVG },

  // Tools & Deployment
  { skill: 'Github', level: 95, svgElement: GithubSVG },
  { skill: 'Vercel', level: 80, svgElement: VercelSVG },
  { skill: 'AWS', level: 60, svgElement: AWSSVG },
  { skill: 'PNPM', level: 80, svgElement: PNPMSVG },
  { skill: 'Playwright', level: 70, svgElement: PlaywrightSVG },
];
