import CurrentInfo from './_components/currentInfo';
import ForecastInfo from './_components/forecastInfo';

export default function Home() {
  return (
    <main className="w-full h-full bg-gray-50">
      <CurrentInfo />
      <ForecastInfo />
    </main>
  );
}
