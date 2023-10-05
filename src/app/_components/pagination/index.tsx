'use client'
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const Pagination = () => {
    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [page, setPage] = useState(Number(searchParams.get('pageIndex')) || 1);


    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams)
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )      


      useEffect(() => {        
        router.push(pathname + '?' + createQueryString('pageIndex', String(page)))
      }, [page])


      const onPrev = () => {
        if (page === 1) {
            return
        }
        setPage(prev => prev -= 10)
      }

      const onNext = () => {
        setPage(prev => prev += 10)
      }

    return (
        <div className="join">
            <button onClick={onPrev} className="join-item btn">«</button>

            <button onClick={onNext} className="join-item btn">»</button>
        </div>
    )
}