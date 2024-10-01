import { Button, Card, Div, Flex, Text } from '../../../../../components';
import { cDark } from '../../../../../shared/styles/colors';

const Portofolio = () => {
  return (
    <Card row flexDir="row" p="xl" gap={16}>
      <Div flex={3}>
        <Text size="xl" weight="bold">
          Nama File
        </Text>
        <Text size="md" mt={12} numberOfLines={3}>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Text>
        <Flex mt={24}>
          <Flex.Between>
            <Button label="Open" type="primary" />
          </Flex.Between>
          <Flex.Between>
            <Button label="Edit" type="outline-primary" />
          </Flex.Between>
        </Flex>
      </Div>
      <Card bg={cDark[400]} h={100} w={100} p={8}>
        <Text
          size="md"
          style={{ textAlign: 'center' }}
          weight="bold"
          flex={1}
          justifyContent="center">
          Preview File
        </Text>
      </Card>
    </Card>
  );
};

export default Portofolio;
