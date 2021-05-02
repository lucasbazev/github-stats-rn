import React from 'react';

import { ButtonContainer } from './styles';
import { ButtonText } from '../../../components';

export const Button = ({ onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>Search</ButtonText>
    </ButtonContainer>
  );
};
