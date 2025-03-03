import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface DetailInfoItemProps {
  children: ReactNode;
}

const DetailInfoItem = ({ children }: DetailInfoItemProps) => {
  return (
    <span className="text-[#82898f] text-xs md:text-sm ml-0 md:ml-3 block md:inline-block leading-[22px]">
      {children}
    </span>
  );
};

const Footer = () => {
  // TODO
  // 이용약관 모달
  return (
    <footer className="bg-[#05141f] h-[284px] md:h-[176px] pt-[18px] pr-6 pb-[29px] pl-6 md:pl-12 md:pr-12 flex flex-col md:flex-row-reverse justify-between md:items-center">
      <div className="flex flex-col md:items-end">
        <div className="flex">
          <Link href="https://privacy.kia.com/overview/full-policy" target={'_blank'}>
            <p className="text-sm md:text-base font-bold hover:underline text-white">
              개인정보 처리방침
            </p>
          </Link>
          <p className="text-sm md:text-base font-bold hover:underline text-white cursor-pointer ml-6">
            이용약관
          </p>
        </div>

        <div>
          <DetailInfoItem>서울특별시 서초구 헌릉로 12 기아㈜</DetailInfoItem>
          <DetailInfoItem>대표: 송호성, 최준영</DetailInfoItem>
          <DetailInfoItem>사업자등록번호: 119-81-02316</DetailInfoItem>
          <DetailInfoItem>통신판매번호: 2006-07935</DetailInfoItem>
          <DetailInfoItem>
            고객센터: 1833-4964
            <Link href="mailto:wible.biz@kia.com">
              <span className="underline ml-1">제휴문의: wible.biz@kia.com</span>
            </Link>
          </DetailInfoItem>
        </div>
      </div>
      <div className="w-fit">
        <div className="relative w-[108px] md:w-[236px] h-8 md:h-14">
          <Image
            src="/logo_kia.svg"
            alt="kia-logo"
            fill
            className="object-contain object-left"
            sizes="(max-width: 1024px) 16px, 108px"
          />
        </div>

        <p className="text-xs md:text-sm text-[#82898f]">© 2023 KIA CORP. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
