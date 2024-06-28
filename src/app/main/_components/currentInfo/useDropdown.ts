import { useState } from 'react';

import { useLocationStore } from '@/app/_store/location';
import type { LocationInfo } from '@/app/_api/weather/model';
import useStore from '@/app/_hooks/useStore';

const locationList: LocationInfo[] = [
  {
    id: 'seoul',
    cityName: '서울특별시',
    lat: 37.5519,
    lng: 126.9918,
  },
  {
    id: 'busan',
    cityName: '부산광역시',
    lat: 35.21,
    lng: 129.0689,
  },
];

function useDropdown() {
  const location = useStore(useLocationStore, (state) => state.location);
  const changeLocationInfo = useLocationStore((state) => state.changeLocation);

  const [isOpen, setOpen] = useState(false);

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
