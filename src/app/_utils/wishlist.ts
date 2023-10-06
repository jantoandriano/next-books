const WISHLIST = 'wishlist';

export const setWishList = (book: any) => {
  localStorage.setItem(WISHLIST, JSON.stringify(book));
};

export const getWishlist = () => {
  const wishList = JSON.parse(localStorage.getItem(WISHLIST) as string);
  return wishList;
};

export const updateWishlist = (payload: any) => {
  const wish = getWishlist();
  setWishList({ ...wish, payload });
};

export const handleLocalStorageLogOut = () => {
  localStorage.removeItem(WISHLIST);
};
