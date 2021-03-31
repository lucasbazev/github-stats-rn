import React from 'react';
import {IconButtonContainer} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const IconButton = ({iconName}) => {
  return (
    <IconButtonContainer>
      <Icon name={iconName} color="whitesmoke" size={20} />
    </IconButtonContainer>
  );
};
