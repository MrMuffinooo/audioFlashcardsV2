import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {MyTextInput} from '../components/MyTextInput';
import {COLOR_SECONDARY, COLOR_SECONDARY_TEXT} from '../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRef} from 'react';

interface flashcard {
  native: string;
  translation: string;
  lastSeen: number;
}

function AddScreen() {
  const [textNative, setTextNative] = React.useState('');
  const [textTranslation, setTextTranslation] = React.useState('');
  const inputsRef = useRef(null);

  const storeData = async (value: flashcard) => {
    const jsonValue = JSON.stringify(value);
    try {
      await AsyncStorage.setItem(String(Date.now()), jsonValue);
    } catch (e) {
      console.error('Error while saving data');
    }
  };

  const onClick = () => {
    const obj = {
      native: textNative,
      translation: textTranslation,
      lastSeen: Date.now(),
    };
    storeData(obj);
    setTextNative('');
    setTextTranslation('');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MyTextInput
        placeholder="Native"
        text={textNative}
        onChangeText={newText => setTextNative(newText)}
      />
      <MyTextInput
        text={textTranslation}
        placeholder="Translation"
        onChangeText={newText => setTextTranslation(newText)}
      />
      <View style={styles.spacer} />
      <IconButton
        disabled={textNative == '' || textTranslation == ''}
        icon={require('../assets/icons/done_36.png')}
        size={36}
        color={COLOR_SECONDARY_TEXT}
        onPress={onClick}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLOR_SECONDARY,
    borderRadius: 0,
  },
  spacer: {
    height: '30%',
  },
});

export default AddScreen;
