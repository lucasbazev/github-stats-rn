import React, { useState } from 'react';

import {
  ScreenContainer,
  ContentContainer,
  TopContainer,
  BottomContainer,
} from './styles';
import { TitleText, SubTitleText, Input, Button } from '../../components';
import { getUserInfoCall } from '../../services/calls';
import { useStore } from '../../stores';

export const SearchScreen = () => {
  const [username, setUsername] = useState('');
  const { setData } = useStore();

  const getUserInfo = async () => {
    const userInfo = await getUserInfoCall(username);
    setData(userInfo);
  };

  return (
    <ScreenContainer>
      <ContentContainer>
        <TopContainer>
          <TitleText>Welcome to GitHub Stats</TitleText>
          <SubTitleText>Enter a GitHub username to see its info</SubTitleText>
        </TopContainer>

        <BottomContainer>
          <Input
            placeholder="Username"
            onChangeText={text => setUsername(text)}
          />
          <Button onPress={getUserInfo} />
        </BottomContainer>
      </ContentContainer>
    </ScreenContainer>
  );
};
