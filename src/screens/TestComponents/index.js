/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  LogoText,
  TitleText,
  SubTitleText,
  RegularText,
  FullNameText,
  UsernameText,
  SectionTitleText,
  ReposTitleText,
  IconButton,
  Button,
  Input,
} from '../../components';

export const TestComponents = () => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#121212',
          height: 800,
        }}>
        <LogoText>GitHub Stats</LogoText>
        <FullNameText>Lucas Azevedo</FullNameText>
        <UsernameText>@lucasbazev</UsernameText>
        <SectionTitleText>USER INFO</SectionTitleText>
        <ReposTitleText>Repository</ReposTitleText>
        <RegularText>Brasília, DF, Brazil</RegularText>
        <IconButton iconName="chevron-back" />
        <TitleText>Welcome to GitHub Stats!</TitleText>
        <SubTitleText>Enter a GitHub username to see its info</SubTitleText>
        <Input placeholder="Username" />
        <Button />
      </View>
    </ScrollView>
  );
};
