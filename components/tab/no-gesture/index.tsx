import React, { Children, PropsWithChildren, ReactElement, ReactNode, useState } from 'react';
import { cDanger, cDark, cPrimary } from '../../../shared/styles/colors';
import { DivProps } from '../../../shared/types/components/div.type';
import { TabNoGestureItemProps } from '../../../shared/types/components/tab.type';
import Div from '../../div';
import Flex from '../../flex';
import Icon from '../../icon';
import Text from '../../text';
import TabNoGestureItem from './item';

interface TabNoGestureProps<T extends string> extends Partial<DivProps> {
  tabs: {
    label: T;
    icon?: string;
  }[];
  activeDefault?: T;
  children: ReactNode;
}

const TabNoGesture = <T extends string>({
  tabs,
  activeDefault,
  children,
  ...props
}: TabNoGestureProps<T>) => {
  const [activeTab, setActiveTab] = useState<T | undefined>(activeDefault);

  return (
    <React.Fragment>
      <Flex {...props} type="between" bg={cDark[100]} rounded={8}>
        {tabs?.map((e, i) => (
          <Flex.Between key={i}>
            <Div
              flexDir="row"
              gap={4}
              alignItems="center"
              justifyContent="center"
              flex={0.5}
              rounded={8}
              p={12}
              onPress={() => setActiveTab(e?.label)}
              bg={activeTab === e?.label ? cPrimary.default : undefined}>
              {e?.icon && (
                <Icon.FA
                  name={e?.icon}
                  size={16}
                  color={activeTab === e?.label ? 'white' : cDark.default}
                />
              )}
              <Text
                hex={activeTab === e?.label ? 'white' : cDark.default}
                size="sm"
                color="primary"
                tone="500"
                weight={activeTab === e?.label ? 'bold' : 'normal'}>
                {e?.label}
              </Text>
            </Div>
          </Flex.Between>
        ))}
      </Flex>
      {Children.map(children, (child) => {
        const item = child as ReactElement<PropsWithChildren<TabNoGestureItemProps>>;
        const isActive = item.props.tab === activeTab;
        const isRightChild = item?.type?.toString()?.includes('TabNoGestureItem');

        if (isRightChild) {
          return isActive && item?.props.children;
        }
        return (
          !isActive && (
            <Text size="md" hex={cDanger.default} weight="bold">
              Must Use the `TabNoGesture.Item` Component as the Item
            </Text>
          )
        );
      })}
    </React.Fragment>
  );
};

TabNoGesture.Item = TabNoGestureItem;

export default TabNoGesture;
