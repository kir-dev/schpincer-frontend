'use client';

import useSWR, { KeyedMutator } from 'swr';

type ReturnProps = {
  data: any;
  setData: (value: any) => void;
  isLoading: boolean;
  mutate: KeyedMutator<any>;
};

const useLocalStorage = (key: string): ReturnProps => {
  // const [state, setState] = useState(() => {
  //   // Initialize the state
  //   try {
  //     const value = window.localStorage.getItem(key);
  //     // Check if the local storage already has any values,
  //     // otherwise initialize it with the passed initialValue
  //     return value ? JSON.parse(value) : initialValue;
  //   } catch (error) {
  //     return;
  //   }
  // });

  const { data, isLoading, mutate } = useSWR(key, (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  });

  const setData = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(data) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      mutate(valueToStore);
    } catch (error) {
      return;
    }
  };

  return { data, setData, isLoading, mutate };
};

export default useLocalStorage;
