"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';


const WishlisContext = createContext<any>(null);

export function WishlistContextProvider({ children }: {
    children: React.ReactNode;
}) {

    const [wishlistState, setState] = useState(getWishList())

    const addWishList = (addWish: any) => {
        const wishlist = getWishList()
        const add = wishlist ? [...wishlist, addWish] : [addWish]
        setState(add)
        toast.success(addWish.title + "Added to wishlist")
        setWishList(add);
    }

    const removeWishList = (removeWish: any) => {
        const wishlist = getWishList()
        const remove = wishlist.filter((val: any) => val.id !== removeWish.id)
        setState(remove)
        toast.success(`${removeWish.title} - Removed from wishlist`)
        setWishList(remove)
    }


    return (
        <WishlisContext.Provider value={{ wishlistState, removeWishList, addWishList }}>
            {children}
        </WishlisContext.Provider>
    );
}

export function useWishlistContext() {
    return useContext(WishlisContext);
}


function getWishList() {
    return JSON.parse(window.localStorage.getItem('wishlist') as string)
}

function setWishList(wishlist: any) {
    const item = JSON.stringify(wishlist)
    localStorage.setItem('wishlist', item)
}