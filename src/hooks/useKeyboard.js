import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

export const KEYBOARD_STATUSES = {
  SHOWN: 'SHOWN',
  HIDDEN: 'HIDDEN',
};

export const useKeyboard = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(KEYBOARD_STATUSES.SHOWN);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(KEYBOARD_STATUSES.HIDDEN);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return [keyboardStatus, setKeyboardStatus];
};
