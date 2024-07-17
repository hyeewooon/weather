import Image from 'next/image';
import { getDate } from 'date-fns';

import useWeeklyInfo from './useWeeklyInfo';

export default function WeeklyInfo() {
  const { list } = useWeeklyInfo();

  return (
    <div className="min-h-[134px] p-5 overflow-y-scroll scrollbar-hide">
      <ul className="flex">
        {list.map((info) => {
          return (
            <li key={info.date} className="flex flex-col items-center p-3">
              <p className="text-[12px]">{getDate(info.date)}일</p>
              <Image
                className="opacity-50"
                src={info.condition.icon.replace('//', 'https://')}
                alt={info.condition.text}
                width={28}
                height={28}
              />
              <p className="relative left-1">{info.avgtemp_c}°</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
