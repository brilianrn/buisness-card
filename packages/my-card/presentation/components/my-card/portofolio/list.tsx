import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Div, For, Icon, Modal, Text } from '../../../../../../components';
import { cDanger, cDark, cPrimary } from '../../../../../../shared/styles/colors';

const MyPortofolio = () => {
  const [isShowOpt, setIsShowOpt] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Modal size="sm" isVisible={isShowOpt} setIsVisible={setIsShowOpt} flex={1} flexDir="row">
        <Div
          py={24}
          px={36}
          flexDir="column"
          gap={32}
          h="100%"
          flex={1}
          alignItems="center"
          justifyContent="center">
          <Div flexDir="row" gap={16}>
            <Div w={28} alignItems="center">
              <Icon.FA name="pencil" size={20} />
            </Div>
            <Text weight="medium" size="lg" flex={1}>
              Edit Portofolio
            </Text>
          </Div>
          <Div flexDir="row" gap={16}>
            <Div w={28} alignItems="center">
              <Icon.FA name="cloud-download" size={20} />
            </Div>
            <Text weight="medium" size="lg" flex={1}>
              Download
            </Text>
          </Div>
          <Div flexDir="row" gap={16}>
            <Div w={28} alignItems="center">
              <Icon.FA name="trash" size={20} color={cDanger[500]} />
            </Div>
            <Text weight="medium" size="lg" color="danger" tone="500" flex={1}>
              Delete
            </Text>
          </Div>
        </Div>
      </Modal>
      <Card p={0} pb={16} mb={16} mt="lg" shadow="sm" position="relative" flexDir="column" gap={12}>
        <Text size="lg" weight="bold" p={16} borderBottomWidth={1} borderBottomColor={cDark[200]}>
          My Portofolio
        </Text>
        <For count={4} px={16} gap={16}>
          <Div
            flexDir="row"
            justifyContent="space-between"
            gap={8}
            borderWidth={1}
            borderColor={cDark[200]}
            bg={cDark[100]}
            rounded={12}
            p={16}>
            <Div flexDir="row" justifyContent="flex-start" gap={8}>
              <Icon.FA name="file-image-o" color={cPrimary[300]} size={44} />
              <Text weight="bold" size="md">
                Portofolio
              </Text>
            </Div>
            <TouchableOpacity onPress={() => setIsShowOpt(true)}>
              <Icon.FA name="ellipsis-v" size={16} />
            </TouchableOpacity>
          </Div>
        </For>
      </Card>
    </React.Fragment>
  );
};

export default MyPortofolio;
