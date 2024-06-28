import { useState, useEffect } from 'react';

// zustand의 persist 미들웨어를 사용하여 브라우저 데이터(ex 스토리지)를 가져오는 경우,
// 스토어의 초기 상태와 브라우저 저장소의 상태가 일치하지 않아서 발생하는 문제 방지하기 위함.
const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F,
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default useStore;
