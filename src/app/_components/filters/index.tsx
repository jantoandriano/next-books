'use client';
import { useQueryString } from '@/app/_hooks/useQueryString';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Sort from '../sort-arrow';
import { FaCalendar } from 'react-icons/fa';

const Filters = () => {
  const { onChangeQuery } = useQueryString();
  const [startDate, setStartDate] = useState(new Date());

  const onSelectYear = (date: any) => {
    const yeardate = new Date(date);
    const year = yeardate.getFullYear();
    onChangeQuery('year', String(year));
    setStartDate(date);
  };

  const onSortName = (sortDir: string) => {
    onChangeQuery('sort', `title:${sortDir}`);
  }

  const onSortYear = (sortDir: string) => {
    onChangeQuery('sort', `publishedDate:${sortDir}`);
  }

  return (
    <div className="flex justify-between pt-5">
      <div className='flex input bg-cyan-900 text-white justify-center items-center'>
        <DatePicker
          selected={startDate}
          onChange={(date: any) => onSelectYear(date)}
          selectsStart
          startDate={startDate}
          dateFormat="yyyy"
          showYearPicker
          className='bg-cyan-900'
        />
        <FaCalendar />
      </div>
      <div className='flex gap-2'>
        <Sort title="Title" onClick={onSortName} />
        <Sort title="Year" onClick={onSortYear} />
      </div>
    </div>
  );
};

export default Filters;
