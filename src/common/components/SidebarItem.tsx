'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  label: string;
  icon: React.ReactNode;
  href: string;
}

export const SidebarItem = ({ label, icon, href }: Props) => {
  const currentPath = usePathname();

  return (
    <li className='flex border-gray-200 border-2 w-full shadow-2xl rounded-md text-gray-700'>
      <Link
        href={href}
        className={`flex w-full px-4 py-3 items-center space-x-4 rounded-md group ${
          href === currentPath
            ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400'
            : ''
        }`}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
};
