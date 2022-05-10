import { ILocalPassword } from 'types/local-storage';
import { IManageLocalPassword } from './types';

// Getters and settser
const getLocalPassword = (clientKey: string) => {
  const storageStr = window.localStorage.getItem(clientKey);
  return storageStr || null;
};

const setLocalPassword = (clientKey: string, storageStr: string) => {
  window.localStorage.setItem(clientKey, storageStr);
};

// JSON creators
const createNewPassword = (passwordObj: ILocalPassword) => {
  const newArray = [passwordObj];
  return JSON.stringify(newArray);
};

const manageExistingPassword = (
  storageStr: string,
  passwordObj: ILocalPassword
) => {
  const parsedPassword = JSON.parse(storageStr);
  const updatedArray = [...parsedPassword, passwordObj];
  return JSON.stringify(updatedArray);
};

/**
 * Hook to add passwords to local storage,
 * or to create a new password object in an array.
 * @returns {void} - Returns nothing
 */
const useLocalPassword = () => {
  const manageLocalPassword = ({
    clientKey,
    passwordObj
  }: IManageLocalPassword) => {
    const storageStr = getLocalPassword(clientKey);
    switch (storageStr) {
      case null:
        setLocalPassword(clientKey, createNewPassword(passwordObj));
        break;
      default:
        setLocalPassword(
          clientKey,
          manageExistingPassword(storageStr, passwordObj)
        );
        break;
    }
  };

  return {
    addPassword: manageLocalPassword
  };
};

export { useLocalPassword };
