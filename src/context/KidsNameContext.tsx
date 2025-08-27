import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Ctx = {
  kidName: string;
  setKidName: (n: string) => void;
  clearKidName: () => Promise<void>;
};

const KidCtx = createContext<Ctx>({
  kidName: 'Little Star',
  setKidName: () => {},
  clearKidName: async () => {},
});

export const KidProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [kidName, setKidNameState] = useState('Little Star');

  useEffect(() => {
    (async () => {
      const n = await AsyncStorage.getItem('kidName');
      if (n) setKidNameState(n);
    })();
  }, []);

  const setKidName = (n: string) => {
    setKidNameState(n);
    AsyncStorage.setItem('kidName', n).catch(() => {});
  };

  const clearKidName = async () => {
    await AsyncStorage.removeItem('kidName');
    setKidNameState('Little Star');
  };

  return (
    <KidCtx.Provider value={{ kidName, setKidName, clearKidName }}>
      {children}
    </KidCtx.Provider>
  );
};

export const useKid = () => useContext(KidCtx);
