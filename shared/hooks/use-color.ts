import { useMemo } from 'react';
import { cDanger, cDark, cPrimary, cWarning } from '../styles/colors';
import { TColorComponent } from '../types/components/button.type';

const useColor = (type: TColorComponent) => {
  const color = useMemo(
    () =>
      type === 'primary'
        ? cPrimary
        : type === 'danger'
        ? cDanger
        : type === 'warning'
        ? cWarning
        : cDark,
    [type]
  );

  return { color };
};

export default useColor;
