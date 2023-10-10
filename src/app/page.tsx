import { Books } from './_components/books/books';
import { Pagination } from './_components/pagination';
import Filters from './_components/filters';
import { Toaster } from 'react-hot-toast';
import RecommendedBooks from './_components/recommended-books';
import getQueryClient from './_lib/getQueryClient';
import { Hydrate, dehydrate } from '@tanstack/react-query';


export default async function Page({
  searchParams
}: {
  searchParams: { q: string; pageIndex: string; year: string, sort: string };
}) {
  const query = searchParams.q;
  const pageIndex = searchParams.pageIndex;
  const year = searchParams.year;
  const sort = searchParams.sort;

  const queryClient = getQueryClient()
  const dehydratedState = dehydrate(queryClient)


  return (
    <div className="mt-20">
      <Filters />
      <Hydrate state={dehydratedState}>
        <RecommendedBooks />
        <Books query={query} pageIndex={pageIndex} year={year} sort={sort} />
      </Hydrate>
      <Pagination />
      <Toaster />
    </div>
  );
}
