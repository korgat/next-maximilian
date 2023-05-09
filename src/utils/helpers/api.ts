export const createQueryString = (params: { [key: string]: string | boolean | number }) => {
  //   return '?' + new URLSearchParams(params).toString();
  return (
    '?' +
    Object.keys(params)
      .map((key) => {
        return `${key}=${encodeURIComponent(params[key].toString())}`;
      })
      .join('&')
  );
};
