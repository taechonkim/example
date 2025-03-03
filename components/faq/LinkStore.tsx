import LinkStoreButton from '../common/ServiceInfo/LinkStoreButton';

// 스토어 링크 영역

const LinkStore = () => {
  return (
    <div className="p-8 bg-[#f8f8f8] rounded-2xl text-center mt-12">
      <div className="mb-8">
        <h2 className="text-base md:text-[32px] font-bold text-[#70d7bf] inline-block">
          위블 비즈 App
        </h2>
        <h2 className="text-base md:text-[32px] font-bold inline-block ml-2">지금 만나보세요!</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <LinkStoreButton
          title={'Google Play'}
          link={'https://play.google.com/store/apps/details?id=kor.mop.user.app'}
          iconPath={'/logo_googleplay.svg'}
        />
        <LinkStoreButton
          title={'App Store'}
          link={'https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794'}
          iconPath={'/logo_appstore.svg'}
        />
      </div>
    </div>
  );
};

export default LinkStore;
