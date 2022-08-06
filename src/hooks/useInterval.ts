import { Callback } from '@types';
import { useCallback, useEffect, useLayoutEffect } from 'react';

export const useInterval = (callback: Callback) => {
  useLayoutEffect(() => {}, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoCallback = useCallback(callback, []);

  useEffect(() => {
    memoCallback();
    return () => {};
  }, [memoCallback]);
};
