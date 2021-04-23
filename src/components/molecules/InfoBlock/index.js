import React from 'react';

import { Container, InfoArea } from './styles';
import { RegularText, SubTitleText } from '../../atoms';

export const InfoBlock = ({ label, infoText }) => (
  <Container>
    <RegularText>{label}</RegularText>
    <InfoArea>
      <SubTitleText>{infoText}</SubTitleText>
    </InfoArea>
  </Container>
);
