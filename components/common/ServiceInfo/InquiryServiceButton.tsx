import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface InquiryServiceButtonProps {
  iconPath: string;
  title: string;
  description?: string;
  link: string;
  target?: string;
}

const InquiryServiceButton = ({
  iconPath,
  title,
  description,
  link,
  target = '_blank'
}: InquiryServiceButtonProps) => {
  return (
    <Link
      href={link}
      target={target}
      rel="noopener noreferrer"
      className={'flex-1 ml-0 mr-0 md:ml-3 md:mr-3 mt-3 first:mt-0 md:mt-0'}
    >
      <Button className="bg-white hover:bg-[#f6f6f9] w-full h-[72px] md:h-20 border border-solid border-[#05141f] flex-1 rounded-none ">
        <Image
          src={iconPath}
          alt={`inqury-service-btn-${title}-icon`}
          width={48}
          height={48}
          sizes="(max-width: 1024px) 32px"
        />
        <div className="flex flex-col">
          <p className="text-base md:text-lg text-[#05141f] font-semibold">{title}</p>
          {description && <p className="text-sm text-[#697278]">{description}</p>}
        </div>
      </Button>
    </Link>
  );
};

export default InquiryServiceButton;
