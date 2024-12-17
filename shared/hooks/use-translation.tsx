import React, { ReactNode } from 'react';
import en from '../../assets/messages/en.json';

type Messages = typeof en;

const useTranslations = <T extends keyof Messages>(name: T) => {
  const result = (
    key: keyof Messages[T],
    params?: Record<string, string | number | ReactNode>
  ): ReactNode => {
    const regex = /\{(\w+)\}/g;
    const parts: (string | ReactNode)[] = [];

    const translation = en[name]?.[key] ?? key;

    if (typeof translation !== 'string') {
      return key?.toString();
    }

    let lastIndex = 0;
    let match;

    while ((match = regex.exec(translation)) !== null) {
      const [placeholder, paramKey] = match;
      const textBefore = translation.slice(lastIndex, match.index);
      const paramValue = params?.[paramKey];

      parts.push(textBefore);

      if (paramValue !== undefined && paramValue !== null) {
        parts.push(paramValue);
      } else {
        parts.push(placeholder);
      }

      lastIndex = regex.lastIndex;
    }

    parts.push(translation.slice(lastIndex));

    const hasReactElement = Object.values(params || {}).some((param) =>
      React.isValidElement(param)
    );

    if (hasReactElement) {
      return <React.Fragment>{parts}</React.Fragment>;
    }

    return parts.length > 1 ? parts : parts[0];
  };

  return result;
};

export default useTranslations;
