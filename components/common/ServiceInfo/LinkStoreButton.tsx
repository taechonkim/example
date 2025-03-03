import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface LinkStoreButtonProps {
  iconPath: string;
  title: string;
  link: string;
}

const LinkStoreButton = ({ iconPath, title, link }: LinkStoreButtonProps) => {
  return (
    <Link href={link} className="w-fit" target="_blank" rel="noopener noreferrer">
      <Button className="w-[264px] md:w-[296px] h-12 md:h-[60px] bg-white hover:bg-white flex items-center ml-2 mr-2 mt-3 md:mt-0">
        <Image
          src={iconPath}
          alt={`link-store-btn-${title}-icon`}
          width={28}
          height={28}
          sizes="(max-width: 1024px) 24px"
        />
        <p className="text-sm md:text-[18px] text-[#05141f] font-semibold inline-block ml-1">
          {title}
        </p>
      </Button>
    </Link>
  );
};

export default LinkStoreButton;
