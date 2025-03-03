export enum TabTypeEnum {
  CONSULT = 'CONSULT',
  USAGE = 'USAGE'
}

export enum ConsultCategoryIdEnum {
  PRODUCT = 'PRODUCT',
  COUNSELING = 'COUNSELING',
  CONTRACT = 'CONTRACT'
}

export enum UsageCategoryIdEnum {
  SIGN_UP = 'SIGN_UP',
  BUSINESS = 'BUSINESS',
  ACCIDENT = 'ACCIDENT',
  RESERVATION = 'RESERVATION',
  VEHICLE = 'VEHICLE',
  REFUEL = 'REFUEL',
  COUPON = 'COUPON'
}

export const CategoryIdNameMapper = {
  [ConsultCategoryIdEnum.PRODUCT]: '서비스 상품',
  [ConsultCategoryIdEnum.COUNSELING]: '도입 상담',
  [ConsultCategoryIdEnum.CONTRACT]: '계약',
  [UsageCategoryIdEnum.SIGN_UP]: '가입',
  [UsageCategoryIdEnum.BUSINESS]: '상품',
  [UsageCategoryIdEnum.ACCIDENT]: '사고',
  [UsageCategoryIdEnum.RESERVATION]: '예약',
  [UsageCategoryIdEnum.VEHICLE]: '차량',
  [UsageCategoryIdEnum.REFUEL]: '충전',
  [UsageCategoryIdEnum.COUPON]: '쿠폰'
};
