import { ScrollView } from 'react-native';
import { For, Text } from '../../../../components';

const Dua = () => {
  return (
    <ScrollView style={[{ height: '100%', flex: 1 }]} scrollEnabled={true}>
      <For count={220}>
        <Text size="md">Profile!</Text>
      </For>
    </ScrollView>
  );
};

export default Dua;
