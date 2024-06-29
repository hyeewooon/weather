import Image from 'next/image';
import useDropdown from './useDropdown';

export default function Dropdown() {
  const { isOpen, location, locationList, changeOpen, changeLocation } = useDropdown();

  return (
    <div className="relative">
      <button className="flex items-center" onClick={changeOpen}>
        <p className="min-w-6 mr-2">{location?.cityName ?? '~'}</p>
        <Image src="/images/ico_arrow_down_24.svg" alt="∨" width={16} height={16} />
      </button>

      {isOpen && (
        <ul className="p-2 rounded-md bg-white absolute">
          {locationList.map((loc) => {
            return (
              <li
                className="cursor-pointer"
                key={loc.id}
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
