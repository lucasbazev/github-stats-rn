import React from 'react';

import { Container, InfoArea } from './styles';
import { LabelText, InfoText } from '../../atoms';

export const InfoBlock = ({ label, infoText }) => (
  <Container>
    <LabelText>{label}</LabelText>
    <InfoArea>
      <InfoText>{infoText}</InfoText>
    </InfoArea>
  </Container>
);
