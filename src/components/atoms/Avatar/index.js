import React from 'react';

import { AvatarContainer } from './styles';

export const Avatar = ({ source }) => (
  <AvatarContainer>
    <img src={source} />
  </AvatarContainer>
);

