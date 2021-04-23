import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { SectionView } from './styles';
import { LogoText } from '../../components';

export const SplashScreen = () => {
  const navigator = useNavigation();

  const goToSearchScreen = () => {
    setTimeout(() => {
      navigator.navigate('SearchScreen');
    }, 3000);
  };

  useEffect(() => {
    goToSearchScreen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <Icon name="github" size={48} color="whitesmoke" />
      <LogoText>GitHub Stats</LogoText>
    </SectionView>
  );
};
