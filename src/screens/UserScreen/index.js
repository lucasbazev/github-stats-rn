import React from 'react';

import { UsernameText, Avatar } from '../../components';
import { InfoBlock } from '../../components';
import {
  ContentContainer,
  ScreenContainer,
  TopContainer,
  BottomContainer,
} from './styles';
import { useStore } from '../../stores';

export const UserScreen = () => {
  const { data } = useStore();

  return (
    <ScreenContainer>
      <ContentContainer>
        <TopContainer>
          <UsernameText>
            {data.name ? data.name : 'You must enter a username.'}
          </UsernameText>
          <Avatar source={data?.avatar_url} />
        </TopContainer>

        <BottomContainer>
          <InfoBlock label="Username" infoText={data?.login} />
          <InfoBlock label="Location" infoText={data?.location} />
          <InfoBlock label="Biography" infoText={data?.bio} />
          <InfoBlock label="GitHub profile" infoText={data?.html_url} />
        </BottomContainer>
      </ContentContainer>
    </ScreenContainer>
  );
};
