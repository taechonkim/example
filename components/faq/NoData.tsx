import Image from 'next/image';

const NoData = () => {
  return (
    <div className="p-[120px] md:p-[160px] pl-0 pr-0">
      <Image
        src="/ic_nodata.svg"
        alt="nodata-icon"
        width={56}
        height={56}
        sizes="(max-width: 1024px) 32px"
      />
      <p className="text-[#697278] text-sm md:text-lg">검색결과가 없습니다.</p>
    </div>
  );
};

export default NoData;
