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
  {
    id: 'daegu',
    cityName: '대구광역시',
    lat: 35.8703,
    lng: 128.5911,
  },
  {
    id: 'gwangju',
    cityName: '광주광역시',
    lat: 35.1547,
    lng: 126.9156,
  },
  {
    id: 'daejeon',
    cityName: '대전광역시',
    lat: 36.3214,
    lng: 127.4197,
  },
  {
    id: 'ulsan',
    cityName: '울산광역시',
    lat: 35.5372,
    lng: 129.3167,
  },
  {
    id: 'jeju',
    cityName: '제주특별자치도',
    lat: 33.4996,
    lng: 126.5312,
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
