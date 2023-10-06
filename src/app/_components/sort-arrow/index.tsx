'use client';

import { FaSortUp, FaSortDown } from 'react-icons/fa';

type Props = {
    onClick: any;
    title: string;
};

const Sort: React.FC<Props> = ({ onClick, title }) => {
    return (
        <div className="border rounded-md flex gap-2 items-center p-2  bg-cyan-900 justify-center">
            <div className="text-white capitalize">{title}</div>
            <div className="flex flex-col">
                <FaSortUp className={`text-sm translate-y-1/2 text-white mb-2`} onClick={() => onClick("asc")} />
                <FaSortDown className={`text-sm -translate-y-1/2 text-white`} onClick={() => onClick("desc")} />
            </div>
        </div>
    );
};

export default Sort;
