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
  {
    key: 'mail',
    name: 'Mail',
    href: 'mailto:abdelhadibouchadi2@gmail.com',
  },
  {
    key: 'wtsp',
    name: 'Whatsapp',
    href: 'https://wa.me/+905526417998?text=Hello!%20I%27m%20interested%20in%20your%20services.%20Could%20you%20please%20provide%20more%20details%3F',
  },
  {
    key: 'insta',
    name: 'Instagram',
    href: 'https://www.instagram.com/abdelhadi0812/',
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
    href: 'https://www.instagram.com/abdelhadi0812/',
  },
  {
    name: 'GM',
    href: 'mailto:abdelhadibouchadi2@gmail.com',
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

export interface Project {
  key: string;
  title: string;
  des: string;
  img: string;
  iconLists?: string[];
  link: string;
  color: string;
}

export const projects: Project[] = [
  {
    key: 'ai',
    color: '#FFFFC0',
    title: 'MeetAI - an AI Powered Meeting Plateform',
    des: 'An AI-powered meeting plateform that transcribes, summarizes, and allows meetings in real-time with an AI agent. Built with Next.js 15, tRPC, DrizzleORM, and OpenAI API',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/next.svg', '/dock.svg'],
    link: 'https://meetai-omega.vercel.app/',
  },
  {
    key: 'luxury',
    color: '#FFE4B5',
    title: 'Côte Royale - Luxury Brand Website',
    des: 'A luxury-focused website with a strong emphasis on interactivity and visual flow using Next.js 15 and GSAP along with prismic.io',
    img: '/luxury.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/next.svg', '/dock.svg'],
    link: 'https://cote-royale-ecru.vercel.app/',
  },
  {
    key: 'hms',
    color: '#FFD1DC',
    title: 'Hospital Management System',
    des: 'A fullstack hospital management system, to manage patients data , doctors and appointments. Nexj.js for both front-end and back-end , mongoDB with Prisma ORM and next-auth 5. ',
    img: '/eyecare.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/next.svg', '/dock.svg'],
    link: 'https://ophtachusm-submain.vercel.app/',
  },
  {
    key: 'ecom',
    color: '#C1FFC1',
    title: 'FlowShop - Complete E-com Platform',
    des: 'A complete e commerce platform using Next js 15, ReactQuery, Tailwindcss, Typescript, and wix API',
    img: '/flowshop.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/next.svg', '/dock.svg'],
    link: 'https://flowshop-nine.vercel.app/',
  },

  {
    key: 'phone',
    color: '#B0E2FF',
    title: 'CaseCobra - Custom iPhone Cases',
    des: 'A custom iPhone cases builder E-commerce shop with some fancy features',
    img: '/casecobra.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/next.svg', '/dock.svg'],
    link: 'https://casecobra-phonecase.vercel.app/',
  },
  {
    key: 'pms',
    color: '#E6E0F8',
    title: 'CarePulse - A Healthcare Management System',
    des: 'A user and admin friendly patient management system that includes patients medical records and much more features. ',
    img: '/carepulse.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/next.svg', '/dock.svg'],
    link: 'https://carepulse-two-lime.vercel.app/',
  },
];

export interface TestimonialCardDetails {
  name: string;
  position: string;
  src: string;
  blockquote: string;
  testimonialVideo: string;
}

export const testimonialCardDetails: TestimonialCardDetails[] = [
  {
    name: 'Dr. Anass Dalouhamouch',
    position: 'Ophthalmologist, CHU Souss Massa',
    src: '/Testimonials/testimonials/chu.png',
    blockquote:
      'Abdelhadi developed a complete Hospital Management System tailored for my ophthalmology practice. His ability to understand complex workflows and transform them into a smooth, intuitive experience was beyond impressive. His support and dedication throughout the process made everything feel effortless. Truly grateful to have had him on board.',
    testimonialVideo: '/Testimonials/video.mp4',
  },
  {
    name: 'Mohammed Bijddiguen',
    position: 'Manager, Dérive Casablancaise',
    src: '/Testimonials/testimonials/derive.webp',
    blockquote:
      "Working with Abdelhadi on our music festival's website was an incredible journey. He built the platform and the back office from scratch, allowing us to manage everything ourselves with ease. More than a developer, he's been a reliable friend, and I'm genuinely thankful for his talent and commitment.",
    testimonialVideo: '/Testimonials/sarah-video.mp4',
  },
  {
    name: 'Dr. Marouane Bouchadi',
    position: 'Dentist, Agadir',
    src: '/Testimonials/testimonials/marouane.jpg',
    blockquote:
      'My dental portfolio website is exactly how I envisioned it, thanks to Abdelhadi. He was meticulous, fast, and super receptive to every little detail I cared about. I’m proud of what we built together, and amazed by his capability of understanding exactly my needs. I highly recommend him to anyone looking for a talented developer.',
    testimonialVideo: '/Testimonials/michael-video.mp4',
  },
];

export interface FooterMenuItem {
  key: string;
  href: string;
  name: string;
}

export const footerMenuItem: FooterMenuItem[] = [
  {
    key: 'about',
    href: '#about',
    name: 'About',
  },
  {
    key: 'services',
    href: '#services',
    name: 'Services',
  },
  {
    key: 'projects',
    href: '#projects',
    name: 'Projects',
  },
  {
    key: 'contacts',
    href: '#contacts',
    name: 'Contacts',
  },
  {
    key: 'testimonials',
    href: '#testimonials',
    name: 'Testimonials',
  },
];
