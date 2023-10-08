import { Books } from './_components/books/books';
import { Pagination } from './_components/pagination';
import { Suspense } from 'react';
import Loading from './loading';
import Filters from './_components/filters';
import { mappingResponse, mappingResponseByYear } from './_helper';
import { Toaster } from 'react-hot-toast';
import RecommendedBooks from './recommended-books';

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

export default async function Page({
  searchParams
}: {
  searchParams: { q: string; pageIndex: string; year: string, name: string, tahun: string, sort: string };
}) {
  const query = searchParams.q;
  const pageIndex = searchParams.pageIndex;
  const year = searchParams.year;
  const sort = searchParams.sort;

  const booksData = await getBooks(query ? query : 'flowers', pageIndex, year, sort);

  return (
    <div className="mt-20">
      <Filters />
      <RecommendedBooks />
      <Suspense fallback={<Loading />}>
        <Books data={booksData} />
      </Suspense>
      <Pagination />
      <Toaster />
    </div>
  );
}
