import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {COLOR_DARK} from '../styles/colors';

export function SettingsButton() {
  const navigation = useNavigation();
  return (
    <Appbar.Action
      icon={require('../assets/icons/settings_24.png')}
      // @ts-ignore: correct parameter
      onPress={() => navigation.navigate('Settings')}
      color={COLOR_DARK}
    />
  );
}
