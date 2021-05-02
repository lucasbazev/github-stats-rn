import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  ScreenContainer,
  ContentContainer,
  TopContainer,
  BottomContainer,
} from './styles';
import {
  TitleText,
  SubTitleText,
  Input,
  Button,
  ErrorText,
} from '../../components';
import { getUserInfoCall } from '../../services/calls';
import { useStore } from '../../stores';

export const SearchScreen = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const { setData } = useStore();
  const navigator = useNavigation();

  const goToUserScreen = () => {
    navigator.navigate('UserScreen');
  };

  const handlePress = async () => {
    if (username) {
      const userInfo = await getUserInfoCall(username);
      setData(userInfo);
      goToUserScreen();
    } else {
      setError('You must enter a username.');
    }
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
          {!!error && <ErrorText>{error}</ErrorText>}
          <Button onPress={handlePress} />
        </BottomContainer>
      </ContentContainer>
    </ScreenContainer>
  );
};
