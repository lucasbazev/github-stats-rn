import React from 'react';
import {StatusBar} from 'react-native';
import {SectionView} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LogoText} from '../../components';

export const SplashScreen = () => {
  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <Icon name="github" size={48} color="whitesmoke" />
      <LogoText>GitHub Stats</LogoText>
    </SectionView>
  );
};
