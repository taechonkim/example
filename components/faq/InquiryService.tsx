import InquiryServiceButton from '../common/ServiceInfo/InquiryServiceButton';

// 서비스 문의 영역

const inqueryServiceData = [
  {
    iconPath: '/ic_download.svg',
    title: '상품제안서 다운로드',
    link: 'https://wiblebiz.kia.com/static/media/proposal.604393960f70e45463b6.pdf'
  },
  {
    iconPath: '/ic_write.svg',
    title: '상담문의 등록하기',
    link: '/Counsel',
    target: '_self'
  },
  {
    iconPath: '/ic_talk.svg',
    title: '카톡으로 문의하기',
    description: 'ID: Wible Biz(위블 비즈)',
    link: 'https://pf.kakao.com/_xfLxjdb'
  }
];

const InquiryService = () => {
  return (
    <>
      <h2 className="text-xl md:text-2xl font-bold mt-12 mb-4 md:mb-6">서비스 문의</h2>
      <div className="flex flex-col md:flex-row">
        {inqueryServiceData.map(data => {
          const { title, iconPath, link, description, target } = data;
          return (
            <InquiryServiceButton
              key={title}
              title={title}
              iconPath={iconPath}
              link={link}
              description={description}
              target={target}
            />
          );
        })}
      </div>
    </>
  );
};

export default InquiryService;
