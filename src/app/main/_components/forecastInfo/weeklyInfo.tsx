import { getDate } from 'date-fns';

import useWeeklyInfo from './useWeeklyInfo';

export default function WeeklyInfo() {
  const { list } = useWeeklyInfo();

  return (
    <div className="p-5 overflow-y-scroll scrollbar-hide">
      <ul className="flex">
        {list.map((info) => {
          return (
            <li key={info.date} className="p-3 text-center">
              <p className="text-[12px]">{getDate(info.date)}일</p>
              <p>{info.avgtemp_c}°</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
