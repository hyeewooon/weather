import Dropdown from './dropdown';
import useCurrentInfo from './useCurrentInfo';

export default function CurrentInfo() {
  const { data } = useCurrentInfo();

  return (
    <section className="flex justify-between p-5">
      <div className="flex-none">
        <Dropdown />
        <p className="text-[32px]">
          {data?.current.temp_c ? `${data.current.temp_c}°` : ''}
        </p>
      </div>
      <div className="max-w-[200px] ml-5">
        <p>{data?.current.condition.text}</p>
      </div>
    </section>
  );
}
