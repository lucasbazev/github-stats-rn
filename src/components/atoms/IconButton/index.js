import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { IconButtonContainer } from './styles';

export const IconButton = ({ iconName }) => {
  return (
    <IconButtonContainer>
      <Icon name={iconName} color="whitesmoke" size={20} />
    </IconButtonContainer>
  );
};
