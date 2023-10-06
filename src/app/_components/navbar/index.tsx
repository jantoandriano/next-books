'use client';
import { ShoppingBagIcon, HeartIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { MdOutlineExplore } from 'react-icons/md';

import { BiLogIn } from 'react-icons/bi';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { SearchBar } from '../searchbar';

const Navbar = () => {
  return (
    <header>
      <div className="fixed top-0 left-0 right-0 z-30 py-2 overflow-hidden bg-gray-900">
        <div aria-label="Top" className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between">
              <div className="flex w-1/2 overflow-hidden sm:ml-4 md:w-1/12 lg:ml-0">
                <Link href="/">
                  <span className="sr-only">The Book Shelf</span>
                  <img
                    src="https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/logo-no-background.png?updatedAt=1684597528087"
                    alt="THE BOOK SHELF"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-end w-4/5">
                <div className="flex justify-end w-3/4">
                  <div className="hidden lg:block">
                    <Link
                      href="/"
                      className="flex items-center p-2 -m-2 text-gray-100 rounded-md hover:bg-gray-700 group"
                    >
                      <SearchBar />
                    </Link>
                  </div>
                  <span className="w-px h-6 ml-4 bg-gray-700 lg:ml-6 mt-3" aria-hidden="true" />
                  <div className="flow-root ml-4 lg:ml-6 mt-3">
                    <Link href="wishlist" className="flex items-center p-2 -m-2 group">
                      <HeartIcon
                        className="flex-shrink-0 w-6 h-6 text-gray-100 group-hover:text-white"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-gray-800 rounded-lg lg:hidden">
            <SearchBar />
            <span className="flex justify-end p-2">
              <Link
                href="/books"
                className="flex items-center p-2 -m-2 text-gray-100 rounded-md hover:bg-gray-700 group"
              >
                {' '}
                <span className="hidden md:block">Explore</span>
                <MdOutlineExplore className="flex-shrink-0 w-6 h-6 text-gray-100 sm:ml-2 group-hover:text-white" />
                <span className="sr-only">products explore</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
