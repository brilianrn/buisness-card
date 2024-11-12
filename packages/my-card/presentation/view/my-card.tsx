import React from 'react';
import { View } from 'react-native';
import { ReactNative } from '../../../../assets/icons/main';
import { Button, Card, Div, Flex, For, Image, Text } from '../../../../components';
import { cDark } from '../../../../shared/styles/colors';
import { ContactInformation, Portofolio, ProfileCard } from '../components';

const MyCardView = () => {
  return (
    <React.Fragment>
      <Div gap={16}>
        <ProfileCard />
        <Flex type="between">
          <Flex.Between>
            <View>
              <Text size={30} weight="bold">
                20+
              </Text>
              <Text size="lg" weight="normal">
                Connection
              </Text>
            </View>
          </Flex.Between>
          <Flex.Between>
            <Flex type="end" gap={8}>
              <Image
                src={ReactNative}
                height={48}
                width={48}
                style={{ backgroundColor: cDark.darker, borderRadius: 8 }}
              />
              <Image
                src={ReactNative}
                height={48}
                width={48}
                style={{ backgroundColor: cDark.darker, borderRadius: 8 }}
              />
            </Flex>
          </Flex.Between>
        </Flex>
        <Card p="xl">
          <For count={4} row justifyContent="center" gap={20}>
            <Image.Avatar
              alignItems="center"
              height={48}
              width={48}
              color="white"
              src="RN"
              bg={cDark[400]}
              style={{ backgroundColor: cDark.darker, borderRadius: 8 }}>
              <Div alignItems="center" mt="md" gap={2}>
                <Text size="md" weight="bold">
                  Nama
                </Text>
                <Text size="md">Jabatan</Text>
              </Div>
            </Image.Avatar>
          </For>
        </Card>
        <Div gap={12}>
          <Text weight="bold" size="xl">
            Contact Information
          </Text>
          <ContactInformation />
        </Div>
        <Div gap={12}>
          <Flex>
            <Flex.Between>
              <Text weight="bold" size="xl">
                Portofolio
              </Text>
            </Flex.Between>
            <Flex.Between>
              <Button.Link size="sm" alignItems="flex-end">
                See all
              </Button.Link>
            </Flex.Between>
          </Flex>
          <Card alignItems="center" p={32} bg={cDark[100]}>
            <Text weight="medium" size="lg">
              Upload File
            </Text>
          </Card>
        </Div>
        <For count={3} gap={8}>
          <Portofolio />
        </For>
        <Div gap={8}>
          <Text weight="bold" size="xl">
            Alamat
          </Text>
          <Text size="md">Lorem Ipsum as their default model text</Text>
        </Div>
        <Card h={200} />
      </Div>
    </React.Fragment>
  );
};

export default MyCardView;
