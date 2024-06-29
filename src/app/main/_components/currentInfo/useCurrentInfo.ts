import { useLocationStore } from '@/app/_store/location';
import useGetCurrentInfo from '@/app/_queries/useGetCurrentInfo';

function useCurrentInfo() {
  const location = useLocationStore((state) => state.location);
  const { data } = useGetCurrentInfo(location);

  return { data };
}

export default useCurrentInfo;
