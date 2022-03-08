import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLOR_SECONDARY, COLOR_SECONDARY_TEXT} from '../styles/colors';

interface props {
  text: string;
  onPress?: (e: any) => void;
  styleButton?: object;
  styleText?: object;
}

export function MyButton({text, onPress, styleButton, styleText}: props) {
  return (
    <TouchableOpacity style={[styles.button, styleButton]} onPress={onPress}>
      <Text style={[styles.text, styleText]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: COLOR_SECONDARY,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: COLOR_SECONDARY_TEXT,
  },
});
