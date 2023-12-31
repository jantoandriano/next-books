import { FunctionComponent } from 'react';
import { Card } from '../card';

type Props = {
    data: any[];
};

export const Wishlist: FunctionComponent<Props> = ({ data }) => {
    return (
        <section className="grid grid-cols-4 gap-4 p-10">
            {data.map((val) => (
                <div key={val.id}>
                    <Card {...val} pathname="wishlist" />
                </div>
            ))}
        </section>
    );
};
