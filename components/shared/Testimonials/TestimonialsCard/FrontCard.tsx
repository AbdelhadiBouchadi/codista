import { CardSpotlight } from '@/components/ui/card-spotlight';
import { TestimonialCardDetails } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FrontCardProps {
  data: TestimonialCardDetails;
}

export default function FrontCard({ data }: FrontCardProps) {
  return (
    <CardSpotlight
      className="absolute inset-0 h-96 w-full text-alt-white rounded-3xl overflow-hidden p-4 backface-hidden"
      dir="ltr"
    >
      <Image
        src={data.src}
        alt="logo"
        width={50}
        height={50}
        className="w-12 h-12 object-cover rounded-full shadow-lg relative z-20"
      />

      <motion.blockquote
        className="mt-8 relative z-20"
        initial={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        dir="ltr"
      >
        <motion.p
          className="sm:text-base mobile_m:text-lg h-40"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          dir="ltr"
        >
          &ldquo;{data.blockquote}&ldquo;
        </motion.p>

        <motion.footer
          className="mt-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          dir="ltr"
        >
          <cite className="testimonial">
            <p className="font-medium">{data.name}</p>
          </cite>
          <span className="text-sm text-gray-600 italic">
            - {data.position}
          </span>
        </motion.footer>
      </motion.blockquote>
    </CardSpotlight>
  );
}
