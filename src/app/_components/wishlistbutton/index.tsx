'use client'

import { useWishlistContext } from "@/app/_context/WishListContext";
import { usePathname } from "next/navigation";

const WishlistButton = ({ data }: any) => {
  const ctx = useWishlistContext()
  const pathname = usePathname();
  const fromWishlist = pathname === '/wishlist'

  return (
    <div>
      {
        fromWishlist ? <div
          onClick={() => {
            ctx.removeWishList(data)
          }}
          className="w-full px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950" >
          Remove
        </div > : <div
          onClick={() => {
            ctx.addWishList(data)
          }}
          className="w-full px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950" >
          Simpan
        </div >
      }
    </div>
  )
};

export default WishlistButton;
