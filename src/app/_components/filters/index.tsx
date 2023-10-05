'use client'
import { useQueryString } from "@/app/_hooks/useQueryString";
import {  useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Filters  = () => {
    const {onChangeQuery} = useQueryString();
    const [startDate, setStartDate] = useState(new Date());

    const onSelectYear = (date: any) => {  
        const yeardate = new Date(date)  
        const year = yeardate.getFullYear()
        onChangeQuery("year", String(year))
        setStartDate(date)
    }

    return (
        <div className="mt-4">
            <DatePicker
            selected={startDate}
            onChange={(date: any) => onSelectYear(date)}
            selectsStart
            startDate={startDate}
            dateFormat="yyyy"
            showYearPicker
      />
        </div>
    )
}

export default Filters