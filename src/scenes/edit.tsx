import * as React from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {COLOR_BRIGHT, COLOR_DARK} from '../styles/colors';
import {IconButton} from 'react-native-paper';

interface itemProps {
  id: string;
  native: string;
  translation: string;
  nativeFirst?: boolean;
}

function EditScreen() {
  const [flashcards, setFlshcards] = useState([]);
  const [nativeFirst, setNativeFirst] = useState(true);

  function Item(props: itemProps) {
    const delItem = async (id: string) => {
      console.log('deleting!!!');
      try {
        await AsyncStorage.removeItem(id);
      } catch (e) {
        console.error("Couldn't delete item", e);
      }
    };
    return (
      <TouchableOpacity style={styles.item}>
        <View style={{flexGrow: 1}}>
          <Text style={styles.topText}>
            {props.nativeFirst ? props.native : props.translation}
          </Text>
          <Text style={styles.bottomText}>
            {'      '}
            {!props.nativeFirst ? props.native : props.translation}
          </Text>
        </View>
        <View>
          <IconButton
            icon={require('../assets/icons/close_24.png')}
            size={24}
            color={'#555'}
            onPress={i => delItem(props.id).then(updateFlashcards)}
            style={styles.button}
          />
        </View>
      </TouchableOpacity>
    );
  }

  const renderItem = (
    item: {index: number; item: string[]},
    nativeFirst: boolean,
  ) => {
    const obj = JSON.parse(item.item[1]);
    return (
      <Item
        id={item.item[0]}
        native={obj.native}
        translation={obj.translation}
        nativeFirst={nativeFirst}
      />
    );
  };

  const fetchFlashcards = async () => {
    const keys = await AsyncStorage.getAllKeys();
    // @ts-ignore: keys unmodified
    const fl = await AsyncStorage.multiGet(keys);
    return fl;
  };

  const updateFlashcards = () => {
    fetchFlashcards()
      // @ts-ignore: readonly
      .then(fl => setFlshcards(fl))
      .catch(e => console.error("Can't fetch flashcards\n" + e));
  };

  useEffect(() => {
    updateFlashcards();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        style={{width: '100%'}}
        contentContainerStyle={styles.flatList}
        data={flashcards}
        renderItem={item => renderItem(item, nativeFirst)}
        keyExtractor={item => item.index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLOR_BRIGHT,
    width: '90%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingLeft: 30,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    flexDirection: 'row',
  },
  topText: {
    fontWeight: 'bold',
    color: COLOR_DARK,
  },
  bottomText: {
    color: '#222',
  },

  flatList: {
    width: '100%',
  },
  button: {
    margin: 0,
    marginRight: 10,
    color: '#222',
  },
});

export default EditScreen;
