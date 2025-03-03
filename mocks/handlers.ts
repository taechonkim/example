import {
  CategoryIdNameMapper,
  ConsultCategoryIdEnum,
  TabTypeEnum,
  UsageCategoryIdEnum
} from '@/api/const';
import { HttpResponse, http } from 'msw';
import data from './dummy';

export const handlers = [
  http.get('/faq', ({ request }) => {
    const url = new URL(request?.url);
    const offset = url.searchParams.get('offset') || '0';
    const limit = url.searchParams.get('limit') || '10';
    const tab = url.searchParams.get('tab') || TabTypeEnum.CONSULT;
    const faqCategoryId = url.searchParams.get('faqCategoryId');
    const question = url.searchParams.get('question');

    let filteredItems = data[tab as TabTypeEnum];

    if (faqCategoryId) {
      filteredItems = filteredItems.filter(
        item =>
          item.subCategoryName ===
          CategoryIdNameMapper[faqCategoryId as ConsultCategoryIdEnum | UsageCategoryIdEnum]
      );
    }

    if (question) {
      filteredItems = filteredItems.filter(
        item => item.answer.includes(question) || item.question.includes(question)
      );
    }

    const items = filteredItems.slice(Number(offset), Number(limit));

    // totalRecord
    const totalRecord = filteredItems.length || 0;

    // prevOffset 계산
    const prevOffset = Number(offset) - Number(limit) >= 0 ? Number(offset) - Number(limit) : 0;

    // nextOffset 계산
    const nextOffset =
      Number(offset) + Number(limit) <= totalRecord ? Number(offset) + Number(limit) : 0;

    const pageInfo = {
      totalRecord,
      offset,
      limit,
      prevOffset,
      nextOffset
    };

    return HttpResponse.json({ items, pageInfo });
  })
];
