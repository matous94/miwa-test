import * as React from 'react';

export default function useCreateChuncks<T>(
  toBeChuncked: T[],
  { size }: { size: number }
): T[][] {
  return React.useMemo(() => {
    const chuncks = [];
    const { length } = toBeChuncked;

    for (let i = 0; i < length; i += size) {
      chuncks.push(toBeChuncked.slice(i, i + size));
    }

    return chuncks;
  }, [toBeChuncked, size]);
}
