import axios from 'axios';
import { Books } from './_components/books/books';
import { Pagination } from './_components/pagination';
import { Suspense } from 'react';
import Loading from './loading';
import Filters from './_components/filters';
import { mappingResponse, mappingResponseByYear } from './_helper';

async function getBooks(query: string, index: number | string = 1, year: string, sort: string) {

  const res = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&maxResults=10&startIndex=${index}&key=AIzaSyBQ_6EXMyfegzv4XJ4VCvc5CgZT1zuXwLQ`
  );

  if (year) {
    return mappingResponseByYear(res, year, sort);
  }
  return mappingResponse(res, sort);
}

export default async function Page({
  searchParams
}: {
  searchParams: { q: string; pageIndex: string; year: string, name: string, tahun: string, sort: string };
}) {
  const query = searchParams.q;
  const pageIndex = searchParams.pageIndex;
  const year = searchParams.year;
  const sort = searchParams.sort;

  const booksResponse = getBooks(query ? query : 'flowers', pageIndex, year, sort);

  const [booksData] = await Promise.all([booksResponse]);

  return (
    <div className="mt-20">
      <div className='mx-10'>
        <Filters />
      </div>
      <Suspense fallback={<Loading />}>
        <Books data={booksData} />
      </Suspense>
      <Pagination />
    </div>
  );
}
