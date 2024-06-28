import useDropdown from './useDropdown';

export default function Dropdown() {
  const { isOpen, location, locationList, changeOpen, changeLocation } = useDropdown();

  return (
    <div>
      <button onClick={changeOpen}>{location?.cityName ?? '~'}</button>

      {isOpen && (
        <ul>
          {locationList.map((loc) => {
            return (
              <li key={loc.id} onClick={() => changeLocation(loc)}>
                {loc.cityName}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
