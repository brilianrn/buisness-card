import AsyncStorage from '@react-native-async-storage/async-storage';

type TKeyStore = 'token' | 'user';

export const _storeData = async ({
  storeKey,
  storeValue,
}: {
  storeKey: TKeyStore;
  storeValue: string;
}) => {
  try {
    await AsyncStorage.setItem(storeKey, storeValue);
    return true;
  } catch (error) {
    return false;
  }
};

export const _retrieveData = async (storeKey: TKeyStore) => {
  try {
    const res = await AsyncStorage.getItem(storeKey);
    return res;
  } catch (error) {
    return false;
  }
};

export const _removeData = async (storeKey: TKeyStore) => {
  try {
    await AsyncStorage.removeItem(storeKey);
    return true;
  } catch (error) {
    return false;
  }
};
