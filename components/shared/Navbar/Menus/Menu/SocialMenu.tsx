import { socialMenus } from '@/lib/constants';
import Link from 'next/link';

export default function SocialMenus() {
  return (
    <div className="sm:block laptop:hidden absolute bottom-32 left-0 text-alt-black w-full px-6">
      <div className="flex justify-between items-center">
        {socialMenus.map((menu, menuIndex) => (
          <Link
            key={menuIndex}
            href={menu.href}
            className="flex items-center gap-2 flex-col justify-center"
          >
            <span className="text-base houseMontage-font font-bold">
              {menu.name} <span className="text-alt-black">✦</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
