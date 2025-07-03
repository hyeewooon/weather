'use client';

import Image from 'next/image';
import useDropdown from './useDropdown';

export default function Dropdown() {
  const { isOpen, location, locationList, changeOpen, changeLocation } = useDropdown();

  const styles /*tw*/ = {
    container: 'relative z-10',
    button: 'flex items-center',
    title: 'min-w-6 mr-2',
    list: 'flex-none min-w-[135px] p-3 rounded-md bg-white absolute',
    item: 'pb-1 cursor-pointer hover:text-gray-600',
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={changeOpen}>
        <p className={styles.title}>{location?.cityName ?? '지역을 선택해주세요.'}</p>
        <Image src="/images/ico_arrow_down_24.svg" alt="arrow" width={16} height={16} />
      </button>

      {isOpen && (
        <ul className={styles.list}>
          {locationList.map((loc) => {
            return (
              <li
                key={loc.id}
                className={styles.item}
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
