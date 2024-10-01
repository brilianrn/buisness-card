import { Badge, Div, Flex, Tab, Text } from '../../../components';
import { cDark } from '../../../shared/styles/colors';
import { DuaComp, SatuComp } from '../components';

const Connection = () => {
  return (
    <Div>
      <Flex py={8} px={16}>
        <Flex.Between>
          <Text weight="bold" size="xl">
            Connection
          </Text>
        </Flex.Between>
        <Flex.Between>
          <Div bg={cDark[400]} h={36} w={36} alignSelf="flex-end" rounded="md" />
        </Flex.Between>
      </Flex>
      <Div p={12} mx={16} mb={12} bg={cDark[100]} alignItems="center" mt={24} rounded="lg">
        <Badge type="primary" alignSelf="flex-end" h={24} w={24} />
      </Div>
      <Tab
        tabs={[
          { title: 'Satu', component: SatuComp },
          { title: 'Tiga', component: DuaComp },
        ]}
      />
    </Div>
  );
};

export default Connection;
