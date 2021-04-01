import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SectionView} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LogoText} from '../../components';
import {useNavigation} from '@react-navigation/native';

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
