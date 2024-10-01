import { ScrollDiv } from 'react-native-magnus';
import { For } from '../../../../components';
import { Portofolio as CardPortofolio } from '../../../my-card/presentation/components/my-card';

const Portofolio = () => {
  return (
    <ScrollDiv mt={16} px={16}>
      <For count={5}>
        <CardPortofolio />
      </For>
    </ScrollDiv>
  );
};

export default Portofolio;
