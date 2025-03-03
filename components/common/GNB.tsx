'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface NavItemProps {
  value: string;
  title: string;
  active?: boolean;
  disabled?: boolean;
}

const NavItem = ({ value, title, active = false, disabled = false }: NavItemProps) => {
  return (
    <li
      value={value}
      className={clsx(
        'text-base text-[18px] font-bold ml-4 mr-4 h-[80px] flex items-center',
        disabled && 'cursor-not-allowed opacity-30',
        active && 'border-b-2 border-[#70d7bf]'
      )}
    >
      {title}
    </li>
  );
};

const navItemList = [
  {
    title: '서비스 소개',
    value: '/Guide'
  },
  {
    title: '자주 묻는 질문',
    value: '/FAQ'
  },
  {
    title: '새소식',
    value: '/News'
  },
  {
    title: '상담문의',
    value: '/Counsel'
  }
];

const GNB = () => {
  return (
    <header className="fixed w-full z-[999] pl-6 md:pl-12 pr-6 md:pr-6 h-[56px] md:h-[80px] flex justify-between items-center bg-white">
      <Link href="https://wiblebiz.kia.com" className="hidden md:block">
        <Image src="/logo_wible_lg.svg" alt="logo-wible-lg" width={160} height={80} />
      </Link>
      <Link href="https://wiblebiz.kia.com" className="block md:hidden">
        <Image src="/logo_wible_sm.svg" alt="logo-wible-sm" width={120} height={40} />
      </Link>

      {/* Desktop */}
      <div className="hidden md:block">
        <nav>
          <ul className="flex">
            {navItemList.map(item => {
              const { title, value } = item;
              return (
                <NavItem
                  key={title}
                  title={title}
                  value={value}
                  disabled={value !== '/FAQ'}
                  active={value === '/FAQ'}
                />
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">{/* TODO 햄버거 메뉴 */}</div>
    </header>
  );
};

export default GNB;
