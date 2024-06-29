import axios from 'axios';

type Method = 'get' | 'post' | 'put' | 'delete' | 'options' | 'patch';

type FetcherParams = {
  method: Method;
  reqPath: string;
  formData?: Record<string, unknown>;
};

const fetcher = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: process.env.NEXT_PUBLIC_WEATHER_API_URL,
});

function createQueryString(params: Record<string, unknown>) {
  const form: Record<string, string> = Object.keys(params).reduce(
    (acc, currentKey) => {
      let currentValue = params[currentKey] as unknown;

      if (!currentValue && currentValue !== 0) return acc;
      if (Array.isArray(currentValue) && currentValue.length === 0) return acc;
      if (Array.isArray(currentValue)) {
        currentValue = currentValue
          .map((value, index) => (index > 0 ? `${currentKey}=${value}` : `${value}`))
          .join('&');
      }

      return {
        ...acc,
        [currentKey]: `${currentValue}`,
      };
    },
    {} as Record<string, string>,
  );

  const urlParams = new URLSearchParams(form);

  return `?${decodeURIComponent(urlParams.toString())}`;
}

export const fetchData = async <ResData>(params: FetcherParams): Promise<ResData> => {
  const { method } = params;
  let { reqPath, formData } = params;

  if (method === 'get' && formData) {
    reqPath = `${reqPath}${createQueryString(formData)}`;
    formData = undefined;
  }

  if (method === 'delete') {
    const deleteRes = await fetcher.delete<ResData>(reqPath, {
      data: formData,
    });

    return deleteRes.data;
  }

  const res = await fetcher[method]<ResData>(reqPath, formData);

  return res.data;
};
