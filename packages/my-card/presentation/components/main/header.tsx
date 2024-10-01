import { FC } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Flex, Icon, Text } from '../../../../../components';
import { TPosition } from '../../../../../shared/types/app.type';

interface MainHeaderProps {
  rightIcons?: Array<ImageSourcePropType>;
  leftIcons?: Array<ImageSourcePropType>;
  title: string;
  titlePosition: TPosition;
}

const MainHeader: FC<MainHeaderProps> = ({ title, titlePosition, leftIcons, rightIcons }) => {
  return (
    <Flex>
      <Flex.Between>
        {titlePosition === 'left' ? (
          <Text size="lg" weight="bold" numberOfLines={1}>
            {title}
          </Text>
        ) : (
          leftIcons?.map((e, i) => <Icon key={i} src={e} height={24} width={24} />)
        )}
      </Flex.Between>
      <Flex.Between style={{ alignItems: 'center' }}>
        {titlePosition === 'center' && (
          <Text size="lg" weight="bold" numberOfLines={1}>
            {title}
          </Text>
        )}
      </Flex.Between>
      <Flex.Between style={{ alignItems: 'flex-end' }}>
        {titlePosition === 'right' ? (
          <Text size="lg" weight="bold" numberOfLines={1}>
            {title}
          </Text>
        ) : (
          rightIcons?.map((e, i) => <Icon key={i} src={e} height={24} width={24} />)
        )}
      </Flex.Between>
    </Flex>
  );
};

export default MainHeader;
