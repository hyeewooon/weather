import { useEffect, useState } from 'react';

import { useLocationStore } from '@/app/_store/location';

import type { LocationInfo } from '@/app/_store/location';

const locationList: LocationInfo[] = [
  {
    id: 'seoul',
    cityName: '서울특별시',
    lat: 37.5519,
    lng: 126.9918,
  },
  {
    id: 'incheon',
    cityName: '인천광역시',
    lat: 37.4563,
    lng: 126.7052,
  },
  {
    id: 'busan',
    cityName: '부산광역시',
    lat: 35.21,
    lng: 129.0689,
  },
];

function useDropdown() {
  const location = useLocationStore((state) => state.location);
  const changeLocationInfo = useLocationStore((state) => state.changeLocation);

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (location.id === '') {
      changeLocationInfo(locationList[0]);
    }
  }, [location, changeLocationInfo]);

  function changeOpen() {
    setOpen((prev) => !prev);
  }

  function changeLocation(loc: LocationInfo) {
    changeLocationInfo(loc);
    changeOpen();
  }

  return {
    isOpen,
    location,
    locationList,
    changeOpen,
    changeLocation,
  };
}

export default useDropdown;
