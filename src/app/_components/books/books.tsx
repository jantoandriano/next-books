'use client'

import { FunctionComponent } from 'react';
import { Card } from '../card';
import { useQuery } from '@tanstack/react-query'
import { mappingResponse, mappingResponseByYear } from '@/app/_helper';


type Props = {
  query: string;
  pageIndex: string;
  year: string;
  sort: string
};


async function getBooks(query: string, index: number | string = 1, year: string, sort: string) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&maxResults=10&startIndex=${index}&key=AIzaSyBQ_6EXMyfegzv4XJ4VCvc5CgZT1zuXwLQ`, {
    cache: 'force-cache'
  }
  );
  const response = await res.json()

  if (response.error) {
    throw new Error('Failed to fetch data')
  }

  if (year) {
    return mappingResponseByYear(response, year, sort);
  }
  return mappingResponse(response, sort);
}

export const Books: FunctionComponent<Props> = ({ query, pageIndex, sort, year }) => {  
  const { data } = useQuery({ queryKey: ['books', [query, pageIndex, year, sort]], queryFn: () => getBooks(query, pageIndex, year, sort) })
  
  return (
    <>
      <section className="grid grid-cols-4 gap-4 p-10">
        {data?.map((val) => (
          <div key={val.id}>
            <Card {...val} />
          </div>
        ))}
      </section>
    </>
  );
};
