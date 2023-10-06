'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useCallback } from 'react';

export const useQueryString = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const onChangeQuery = (queryType: string, params: string) => {
    router.push(pathname + '?' + createQueryString(queryType, String(params)));
  };

  return {
    onChangeQuery,
    searchParams
  };
};
