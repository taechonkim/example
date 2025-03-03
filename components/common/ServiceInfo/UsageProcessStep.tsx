import Image from 'next/image';

interface UsageProcessStepProps {
  iconPath: string;
  title: string;
  description: string;
  last?: boolean;
}

const UsageProcessStep = ({
  iconPath,
  title,
  description,
  last = false
}: UsageProcessStepProps) => {
  return (
    <div className="flex md:pl-6 md:pr-6 mt-5 first:mt-0 md:ml-[16px] md:mr-[16px]">
      <div className="flex flex-row md:flex-col ">
        <Image
          width={48}
          height={48}
          sizes="(max-width: 640px) 40px"
          src={iconPath}
          alt={`${title}-icon`}
          className={'mr-3 mb-0 md:mb-2'}
        />
        <div className="flex flex-col">
          <h2 className="text-base md:text-lg font-bold text-[#05141f]">{title}</h2>
          <p className="text-sm md:text-base text-[#37434c]">{description}</p>
        </div>
      </div>
      {!last && (
        <Image
          width={24}
          height={24}
          src={'/ic_step_arrow.svg'}
          alt={`next-icon`}
          className={'hidden md:block relative left-4'}
        />
      )}
    </div>
  );
};

export default UsageProcessStep;
