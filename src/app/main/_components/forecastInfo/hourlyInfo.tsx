import Chart from '../chart';
import useHourlyInfo from './useHourlyInfo';

export default function HourlyInfo() {
  const { list } = useHourlyInfo();

  console.log(list);

  return (
    <div className="p-5">
      <div className="min-h-[180px] h-full p-4 rounded-lg bg-gray-100/70">
        <Chart />
      </div>
    </div>
  );
}
