import Link from 'next/link';
import { FunctionComponent } from 'react';
import WishlistButton from '../wishlistbutton';

type Props = {
  id: string;
  title: string;
  description: string;
  image: string;
  publishedDate: string;
};

export const Card: FunctionComponent<Props> = (props) => {
  const {
    id,
    title,
    description,
    image,
    publishedDate,
  } = props
  return (
    <div>
      <Link href={`/book/${id}`}>
        <div className="flex flex-col items-center self-start border border-gray-900 rounded-lg bg-gray-800 ">
          <div className="relative">
            <img className="w-40 h-56 p-4 rounded-t-lg lg:w-56 lg:h-80" src={image} alt={title} />
          </div>
          <div className="flex flex-col flex-wrap content-between justify-center px-5 pb-5 align-middle">
            <h5
              title={title}
              className="w-32 h-12 text-base font-semibold tracking-tight text-gray-100 lg:w-48 lg:text-lg lg:h-14 line-clamp-2"
            >
              {title}
            </h5>
            <div className="flex flex-col space-y-2">
              <div>
                <div className="text-xs sm:text-sm w-20 before:mr-1 truncate text-white">
                  {description}
                </div>
                <span className="text-xs right-0 font-semibold rounded text-white">
                  {publishedDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="mt-2">
        <WishlistButton data={props} />
      </div>
    </div>
  );
};
