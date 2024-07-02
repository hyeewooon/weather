import Image from 'next/image';
import useDropdown from './useDropdown';

export default function Dropdown() {
  const { isOpen, isLoading, location, locationList, changeOpen, changeLocation } =
    useDropdown();

  return (
    <div className="relative">
      <button className="flex items-center" onClick={changeOpen}>
        <p className="min-w-6 mr-2">
          {isLoading ? '~' : location?.cityName ?? '지역을 선택해주세요.'}
        </p>
        <Image src="/images/ico_arrow_down_24.svg" alt="∨" width={16} height={16} />
      </button>

      {isOpen && (
        <ul className="flex-none p-3 rounded-md bg-white absolute">
          {locationList.map((loc) => {
            return (
              <li
                key={loc.id}
                className="pb-1 cursor-pointer hover:text-gray-600"
                onClick={() => changeLocation(loc)}
              >
                {loc.cityName}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
