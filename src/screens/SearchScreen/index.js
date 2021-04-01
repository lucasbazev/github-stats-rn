import React, {useState} from 'react';
import {
  ScreenContainer,
  ContentContainer,
  TopContainer,
  BottomContainer,
} from './styles';
import {TitleText, SubTitleText, Input, Button} from '../../components';
import api from '../../services/api';

export const SearchScreen = () => {
  const [username, setUsername] = useState();

  const getUserInfo = async (username) => {
    try {
      const result = await api.get(`/${username}`);
      console.log(result);
    } catch (error) {
      console.log({Erro: error});
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
          <Input placeholder="Username" onChangeText={setUsername} />
          <Button onPress={getUserInfo} />
        </BottomContainer>
      </ContentContainer>
    </ScreenContainer>
  );
};
