import UsageProcessStep from '../common/ServiceInfo/UsageProcessStep';

// 이용 프로세스 안내 영역

const usageProcessData = [
  {
    iconPath: '/ic_process01.svg',
    title: '1. 문의 등록',
    description: '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.'
  },
  {
    iconPath: '/ic_process02.svg',
    title: '2. 관리자 설정',
    description: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.'
  },
  {
    iconPath: '/ic_process03.svg',
    title: '3. 임직원 가입',
    description: '사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.'
  },
  {
    iconPath: '/ic_process04.svg',
    title: '4. 서비스 이용',
    description: '사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!',
    last: true
  }
];

const UsageProcess = () => {
  return (
    <>
      <h2 className="text-xl md:text-2xl font-bold mt-12 mb-4 md:mb-6">이용 프로세스 안내</h2>
      <div className="flex flex-col md:flex-row">
        {usageProcessData.map(data => {
          const { iconPath, title, description, last } = data;
          return (
            <UsageProcessStep
              key={title}
              iconPath={iconPath}
              title={title}
              description={description}
              last={last}
            />
          );
        })}
      </div>
    </>
  );
};

export default UsageProcess;
