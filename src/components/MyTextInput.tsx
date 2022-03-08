import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {COLOR_SECONDARY} from '../styles/colors';

interface props {
  label?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  style?: any;
  text?: string;
  activeUnderlineColor?: string;
}

export function MyTextInput({
  label,
  onChangeText,
  placeholder,
  text,
  activeUnderlineColor,
}: props) {
  return (
    <TextInput
      activeUnderlineColor={
        activeUnderlineColor ? activeUnderlineColor : COLOR_SECONDARY
      }
      label={label}
      placeholder={placeholder}
      value={text ? text : ''}
      onChangeText={text => onChangeText(text)}
      style={styles.view}
    />
  );
}

const styles = StyleSheet.create({
  view: {
    height: 80,
    width: '80%',
    marginTop: '5%',
  },
});
