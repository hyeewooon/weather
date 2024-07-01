import { useWeeklyWeatherStore } from '@/app/_store/weeklyWeather';

function useWeeklyInfo() {
  const list = useWeeklyWeatherStore((state) => state.list);

  return { list };
}

export default useWeeklyInfo;
