import { ConsultCategoryIdEnum, TabTypeEnum, UsageCategoryIdEnum } from './const';

export type TabType = TabTypeEnum.CONSULT | TabTypeEnum.USAGE;

export type ConsultCategoryIdType =
  | ConsultCategoryIdEnum.PRODUCT
  | ConsultCategoryIdEnum.COUNSELING
  | ConsultCategoryIdEnum.CONTRACT;

export type UsageCategoryIdType =
  | UsageCategoryIdEnum.SIGN_UP
  | UsageCategoryIdEnum.BUSINESS
  | UsageCategoryIdEnum.ACCIDENT
  | UsageCategoryIdEnum.RESERVATION
  | UsageCategoryIdEnum.VEHICLE
  | UsageCategoryIdEnum.REFUEL
  | UsageCategoryIdEnum.COUPON;

export interface Faq {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}

export interface PageInfo {
  totalRecord: number;
  offset: number;
  limit: number;
  prevOffset: number;
  nextOffset: number;
}

export interface GetFaqListResponse {
  pageInfo: PageInfo;
  items: Faq[];
}

export interface GetFaqListRequest {
  limit: number;
  offset: number;
  tab: TabType;
  faqCategoryId?: ConsultCategoryIdType | UsageCategoryIdType;
  question?: string;
}
