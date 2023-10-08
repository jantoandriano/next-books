"use client"

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useWishlistContext } from "../../_context/WishListContext";


const RecommendedBooks = () => {
    const ctx = useWishlistContext()
    const title = ctx?.wishlistState[0]?.title || 'flowers'
    const author = ctx?.wishlistState[0]?.authors ? ctx?.wishlistState[0]?.authors[0] : 'keyes'


    const { isLoading, error, data } = useQuery(['recommended-book'], async () => {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=AIzaSyBQ_6EXMyfegzv4XJ4VCvc5CgZT1zuXwLQ`);
        return res.data.items

    })


    if (isLoading) return (
        <div className="flex justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    )

    if (error) return 'An error has occurred'

    return (
        <div>
            <div className="font-bold text-lg px-10">
                Recommended books
            </div>

            <div className="flex gap-2 px-10">
                {
                    data.slice(0, 5).map((val: any) => (
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src={val?.volumeInfo?.imageLinks?.thumbnail} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-md">{val.volumeInfo.title}</h2>
                                <div className="card-actions justify-end">
                                    <button onClick={() => {
                                        ctx.addWishList({
                                            id: val.id,
                                            description: val.volumeInfo.description,
                                            image: val?.volumeInfo?.imageLinks?.thumbnail || '',
                                            publishedDate: val.volumeInfo.publishedDate,
                                            title: val.volumeInfo.title,
                                            authors: val.volumeInfo.authors
                                        })
                                    }} className="btn btn-primary">Simpan</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecommendedBooks