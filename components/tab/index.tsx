import { ComponentType, ReactElement, useMemo, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { cDark, cPrimary } from '../../shared/styles/colors';
import { DivProps } from '../../shared/types/components/div.type';
import Div from '../div';
import Icon from '../icon';
import Text from '../text';

interface TabProps extends DivProps {
  tabs: Array<{ title: string; component: ComponentType | ReactElement; icon?: string }>;
  height?: number;
}

const Tab = ({ tabs, px = 16, height, ...propsTab }: TabProps) => {
  const [index, setIndex] = useState<number>(0);

  const layout = useWindowDimensions();

  const routes: Array<{ key: string; title: string; icon?: string }> = useMemo(() => {
    return tabs.map((e) => ({
      ...e,
      key: e?.title?.toLowerCase(),
    }));
  }, [tabs]);

  const maps = useMemo(() => {
    return tabs.reduce(
      (obj, item) => Object.assign(obj, { [item.title?.toLowerCase()]: item.component }),
      {}
    );
  }, [tabs]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap(maps)}
      onIndexChange={setIndex}
      style={{ height: height || layout.height }}
      renderTabBar={(props) => {
        return (
          <Div px={px} {...propsTab}>
            <TabBar
              {...props}
              renderLabel={({ route, focused, color }) => {
                return (
                  <Div flexDir="row" justifyContent="flex-start" gap={8} alignItems="center">
                    {route?.icon && (
                      <Icon.FA
                        name={route?.icon}
                        size={16}
                        color={focused ? 'white' : cDark.default}
                      />
                    )}
                    <Text
                      hex={focused ? 'white' : color}
                      size="sm"
                      color="primary"
                      tone="500"
                      weight={focused ? 'bold' : 'normal'}>
                      {route.title}
                    </Text>
                  </Div>
                );
              }}
              activeColor={cPrimary.default}
              indicatorContainerStyle={{
                backgroundColor: cDark[100],
                borderRadius: 12,
              }}
              style={{ backgroundColor: 'transparent' }}
              indicatorStyle={{
                backgroundColor: cPrimary.default,
                height: '100%',
                borderRadius: 12,
              }}
              labelStyle={{ color: cDark.default }}
            />
          </Div>
        );
      }}
    />
  );
};

export default Tab;
