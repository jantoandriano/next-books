'use client'

import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Successfully created!');


const WishlistButton = () => {
  return (
    <div>
      <div onClick={notify} className="w-full px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950">
        Simpan
      </div>
      <Toaster />
    </div>
  );
};

export default WishlistButton;
