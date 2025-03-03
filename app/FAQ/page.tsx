import Footer from '@/components/common/Footer';
import GNB from '@/components/common/GNB';
import FaqTable from '@/components/faq/FaqTable';
import InquiryService from '@/components/faq/InquiryService';
import LinkStore from '@/components/faq/LinkStore';
import UsageProcess from '@/components/faq/UsageProcess';

const FAQ = () => {
  return (
    <div>
      <GNB />
      <div className="p-12 pt-0 pb-20 max-w-full md:max-w-[1240px] m-0 md:ml-auto md:mr-auto md:pt-[80px]">
        <div className="h-[222px] flex flex-col justify-center">
          <h1 className="text-2xl md:text-[56px] font-bold text-center leading-[1.4]">
            자주 묻는 질문
          </h1>
          <p className="text-sm md:text-[18px] font-normal text-center mt-[7.2px]">
            궁금하신 내용을 빠르게 찾아보세요.{' '}
          </p>
        </div>
        <FaqTable />
        <InquiryService />
        <UsageProcess />
        <LinkStore />
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
