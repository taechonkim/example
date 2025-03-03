'use client';

import { ChangeEvent, useState } from 'react';
import { Button } from '../ui/button';
import clsx from 'clsx';
import Image from 'next/image';
import { Input } from '../ui/input';
import { ConsultCategoryIdEnum, UsageCategoryIdEnum } from '@/api/const';
import useGetFaqList from '@/hooks/remotes/useGetFaqList';
import { Faq, GetFaqListResponse, PageInfo } from '@/api/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

enum TabTypeEnum {
  CONSULT = 'CONSULT',
  USAGE = 'USAGE'
}

type TabType = TabTypeEnum.CONSULT | TabTypeEnum.USAGE;

const tabs = [
  {
    label: '서비스 도입',
    value: TabTypeEnum.CONSULT
  },
  {
    label: '서비스 이용',
    value: TabTypeEnum.USAGE
  }
];

const faqCategories = {
  [TabTypeEnum.CONSULT]: [
    {
      label: '전체',
      value: ''
    },
    {
      label: '서비스 상품',
      value: ConsultCategoryIdEnum.PRODUCT
    },
    {
      label: '도입 상담',
      value: ConsultCategoryIdEnum.COUNSELING
    },
    {
      label: '계약',
      value: ConsultCategoryIdEnum.CONTRACT
    }
  ],
  [TabTypeEnum.USAGE]: [
    {
      label: '전체',
      value: ''
    },
    {
      label: '가입문의',
      value: UsageCategoryIdEnum.SIGN_UP
    },
    {
      label: '비즈니스(업무용)',
      value: UsageCategoryIdEnum.BUSINESS
    },
    {
      label: '사고/보험',
      value: UsageCategoryIdEnum.ACCIDENT
    },
    {
      label: '예약/결제',
      value: UsageCategoryIdEnum.RESERVATION
    },
    {
      label: '차량문의',
      value: UsageCategoryIdEnum.VEHICLE
    },
    {
      label: '충전',
      value: UsageCategoryIdEnum.REFUEL
    },
    {
      label: '쿠폰/기타',
      value: UsageCategoryIdEnum.COUPON
    }
  ]
};

const FaqTable = () => {
  const [tab, setTab] = useState<TabType>(TabTypeEnum.CONSULT);
  const [faqCategoryId, setFaqCategoryId] = useState('');

  const [question, setQuestion] = useState('');
  const [searchVal, setSearchVal] = useState('');

  const offset = 0;
  const [limit, setLimit] = useState(10);

  const { data = {} as GetFaqListResponse } = useGetFaqList({
    offset,
    limit,
    question,
    tab,
    ...(faqCategoryId !== ''
      ? { faqCategoryId: faqCategoryId as ConsultCategoryIdEnum | UsageCategoryIdEnum }
      : {})
  });

  const { pageInfo = {} as PageInfo, items } = data;

  const { nextOffset } = pageInfo;

  const dataCnt = items?.length || 0;

  const empty = dataCnt === 0;

  const onClickTab = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const newTab = evt.currentTarget.value as unknown as TabType;
    if (tab !== newTab) {
      setTab(newTab);
      setFaqCategoryId('');
      setLimit(10);
    }
  };

  const onClickCategory = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const newCategoryId = evt.currentTarget.value;
    if (faqCategoryId !== newCategoryId) setFaqCategoryId(newCategoryId);
  };

  const onClickInit = () => {
    setQuestion('');
  };

  const onChangeSearchVal = (evt: ChangeEvent<HTMLInputElement>) => {
    const val = evt.target.value;
    setSearchVal(val);
  };

  const onSearch = evt => {
    if (evt?.type === 'click' || (evt?.type === 'keydown' && evt?.key === 'Enter'))
      setQuestion(searchVal);
  };

  const onClickNext = () => {
    setLimit(prev => prev + 10);
  };

  return (
    <div>
      {/* Tab */}
      <div>
        <ul className="mb-12 flex">
          {tabs.map(({ label, value }) => {
            return (
              <li key={value} className="flex-1 h-[54px]">
                <Button
                  value={value}
                  onClick={onClickTab}
                  className={clsx(
                    'w-full h-full bg-white rounded-none hover:bg-transparent text-xl text-[#05141f] text-center border border-[#cdd0d2]',
                    value === tab &&
                      'bg-[#05141f] text-white font-semibold hover:bg-[#05141f] hover:text-white'
                  )}
                >
                  {label}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Search */}
      <div className="flex w-full bg-[#f8f8f8] mb-6 p-0 md:p-6 justify-center">
        <div className="relative w-full md:w-fit">
          <Input
            placeholder={'찾으시는 내용을 입력해 주세요'}
            className="w-full md:w-[480px] h-[56px] border border-[#05141f] rounded-none placeholder:text-base placeholder:text-[#82898f] focus-visible:ring-0"
            onChange={onChangeSearchVal}
            onKeyDown={onSearch}
          />
          <button
            type="button"
            onClick={onSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <Image src="/ic_search.svg" alt="search-icon" width={32} height={32} />
          </button>
        </div>
      </div>
      {/* 검색결과 갯수, 초기화버튼 */}
      {!!question && (
        <div className="flex justify-between mt-4 mb-4 md:mt-6 md:mb-6">
          <h2 className="text-base md:text-2xl font-bold">
            검색결과 총 <span className="text-[#70d7bf]">{dataCnt}</span>건
          </h2>
          <Button
            onClick={onClickInit}
            className="bg-white text-[#05141f] text-sm md:text-base hover:bg-transparent"
          >
            <Image
              src={'/ic_init.svg'}
              alt={`search-init-icon`}
              width={24}
              height={24}
              sizes="(max-width: 1024px) 20px"
            />
            검색초기화
          </Button>
        </div>
      )}

      {/* faqCategoryId */}
      <div>
        <ul className="mb-6 flex flex-wrap">
          {faqCategories[tab].map(({ label, value }) => {
            return (
              <li key={value}>
                <Button
                  value={value}
                  onClick={onClickCategory}
                  className={clsx(
                    'w-fit h-9 md:h-12 pl-3 pr-3 md:pl-5 md:pr-5 bg-white rounded-[18px] md:rounded-3xl hover:bg-transparent font-semibold text-sm md:text-[18px] text-[#05141f] text-center',
                    value === faqCategoryId &&
                      'bg-[#70d7bf] text-white font-semibold hover:bg-[#70d7bf] hover:text-white'
                  )}
                >
                  {label}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 데이터 영역 */}
      {empty ? (
        <div className="flex flex-col items-center p-[120px] pl-0 pr-0">
          <Image src="/ic_nodata.svg" alt="nodata-icon" width={48} height={48} />
          <p className="text-[#697278] mt-2">검색결과가 없습니다.</p>
        </div>
      ) : (
        <div>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item: Faq) => {
              const { id, categoryName, subCategoryName, question, answer } = item;
              return (
                <AccordionItem key={id} value={id.toString()}>
                  <AccordionTrigger className="pt-4 pb-4 md:pt-[18px] md:pb-[18px]">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex flex-row mb-[4px] md:mb-0">
                        <span className="text-[#697278] text-xs md:text-[18px] inline-block w-auto md:w-[184px]">
                          {categoryName}
                        </span>
                        <span className="text-[#697278] text-xs ml-[2px] mr-[2px] md:hidden">
                          &gt;
                        </span>
                        <span className="text-[#697278] text-xs md:text-[18px] inline-block w-auto md:w-[148px]">
                          {subCategoryName}
                        </span>
                      </div>
                      <strong className="text-[#05141f] text-base md:text-[18px] text-left">
                        {question}
                      </strong>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="html-container pt-6 pb-6 pl-8 pr-8"
                      dangerouslySetInnerHTML={{ __html: answer }}
                    />
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      )}

      {/* 추가 데이터가 있는 경우 더보기 */}
      {nextOffset !== 0 && (
        <div className="flex justify-center">
          <Button onClick={onClickNext} className="text-[#05141f] bg-white hover:bg-transparent ">
            더보기
          </Button>
        </div>
      )}
    </div>
  );
};

export default FaqTable;
