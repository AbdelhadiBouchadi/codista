import Link from 'next/link';
import { RiShoppingBag4Line } from 'react-icons/ri';

export default function Pricing() {
  return (
    <Link href={'/pricing'} className="sm:mr-6 laptop:mr-0">
      <RiShoppingBag4Line className="text-base laptop:text-lg" />
    </Link>
  );
}
