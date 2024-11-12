import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ICCloseWhite } from '../../assets/icons/main';
import { cDanger, cPrimary, cSuccess } from '../../shared/styles/colors';
import Icon from '../icon';

type ToastType = 'success' | 'error' | 'info';

interface ToastContextType {
  showToast: (props: { message: ReactNode; type: ToastType; duration?: number }) => void;
  hideToast: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{
    message: ReactNode;
    type: ToastType;
    duration: number;
  } | null>(null);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [toastTimeout, setToastTimeout] = useState<NodeJS.Timeout | null>(null);

  const showToast = useCallback(
    ({
      message,
      type,
      duration = 2000,
    }: {
      message: ReactNode;
      type: ToastType;
      duration?: number;
    }) => {
      if (toastTimeout) {
        clearTimeout(toastTimeout);
      }

      setToast({ message, type, duration });

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();

      const timeout = setTimeout(() => {
        hideToast();
      }, duration);

      setToastTimeout(timeout);
    },
    [fadeAnim, toastTimeout]
  );

  const hideToast = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toast && (
        <Animated.View
          style={[
            styles.toastContainer,
            toast.type === 'success' && styles.successToast,
            toast.type === 'error' && styles.errorToast,
            toast.type === 'info' && styles.infoToast,
          ]}>
          <Text style={styles.toastText}>{toast.message}</Text>
          <TouchableOpacity onPress={hideToast}>
            <Icon src={ICCloseWhite} height={16} width={16} />
          </TouchableOpacity>
        </Animated.View>
      )}
    </ToastContext.Provider>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: 50,
    left: '10%',
    right: '10%',
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 1000,
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toastText: {
    color: '#fff',
    fontSize: 14,
  },
  toastClose: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  successToast: {
    backgroundColor: cSuccess.default,
  },
  errorToast: {
    backgroundColor: cDanger[500],
  },
  infoToast: {
    backgroundColor: cPrimary.default,
  },
});
