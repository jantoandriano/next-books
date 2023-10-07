import { FunctionComponent } from 'react';
import { Card } from '../card';
import { useWishlistContext } from '@/app/_context/WishListContext';

type Props = {
  data: any[];
};

export const Books: FunctionComponent<Props> = ({ data }) => {
  return (
    <section className="grid grid-cols-4 gap-4 p-10">
      {data.map((val) => (
        <div key={val.id}>
          <Card {...val} pathname="/" />
        </div>
      ))}
    </section>
  );
};
