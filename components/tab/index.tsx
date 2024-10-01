import { ComponentType, useMemo, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { cDark, cPrimary } from '../../shared/styles/colors';
import { DivProps } from '../../shared/types/components/div.type';
import Div from '../div';
import Text from '../text';

interface TabProps extends DivProps {
  tabs: Array<{ title: string; component: ComponentType }>;
}

const Tab = ({ tabs, px = 16, ...propsTab }: TabProps) => {
  const [index, setIndex] = useState<number>(0);

  const layout = useWindowDimensions();

  const routes: Array<{ key: string; title: string }> = useMemo(() => {
    return tabs.map((e) => ({
      key: e?.title?.toLowerCase(),
      title: e?.title,
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
      style={{ height: layout.height }}
      renderTabBar={(props) => {
        return (
          <Div px={px} {...propsTab}>
            <TabBar
              {...props}
              renderLabel={({ route, focused, color }) => {
                return (
                  <Div>
                    <Text
                      hex={color}
                      size="md"
                      color="blue"
                      tone="500"
                      weight={focused ? 'bold' : 'normal'}
                      style={{ textTransform: 'uppercase' }}>
                      {route.title}
                    </Text>
                  </Div>
                );
              }}
              activeColor={cPrimary.default}
              indicatorContainerStyle={{
                backgroundColor: cDark[100],
                borderRadius: 8,
              }}
              style={{ backgroundColor: 'transparent' }}
              indicatorStyle={{
                backgroundColor: cDark[300],
                height: '100%',
                borderRadius: 8,
              }}
              labelStyle={{ color: 'white' }}
            />
          </Div>
        );
      }}
    />
  );
};

export default Tab;
