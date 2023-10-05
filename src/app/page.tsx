import axios from "axios";
import { SearchBar } from "./_components/searchbar";
import { Books } from "./_components/books/books";
import { Pagination } from "./_components/pagination";
import { Suspense } from "react";
import Loading from "./loading";
import Filters from "./_components/filters";
import { mappingResponse, mappingResponseByYear } from "./_helper";


async function getBooks(query: string, index: number | string = 1, year: string) {    
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&maxResults=10&startIndex=${index}&key=AIzaSyBQ_6EXMyfegzv4XJ4VCvc5CgZT1zuXwLQ`);    
    let temp = [];
    if (year) {
       temp = mappingResponseByYear(res, year)        
       return temp
    }
    temp = mappingResponse(res)
    return temp;
}

export default async function Page({ searchParams }: { searchParams: { q: string, pageIndex: string, year: string } }) {
    const query = searchParams.q
    const pageIndex = searchParams.pageIndex
    const year = searchParams.year
    const booksResponse = getBooks(query ? query : "flowers", pageIndex, year);

    const [booksData] = await Promise.all([booksResponse]);
    
    return (
        <div className="flex justify-center items-center flex-col" >
            <section className="mt-2">
                <SearchBar />
            </section>
            <section>
                <Filters />
            </section>
            <Suspense fallback={<Loading />}>
                <Books data={booksData} />
            </Suspense>
            <section>
                <Pagination/>
            </section>
        </div>
    )
}
