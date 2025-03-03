import { GetFaqListRequest } from '@/api/types';
import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

function getGetFaqListQueryKey(params: GetFaqListRequest) {
  return ['/faq', params];
}

function useGetFaqList(params: GetFaqListRequest) {
  const fetcher = async () => {
    const response = await axios.get('/faq', { params });
    return response.data;
  };

  return useQuery({
    queryKey: getGetFaqListQueryKey(params),
    queryFn: fetcher
  });
}

export { getGetFaqListQueryKey };

export default useGetFaqList;
