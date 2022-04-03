import * as React from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {fetchFlashcards, delItem} from '../utils/storage';
import {useEffect, useState} from 'react';
import {COLOR_BRIGHT, COLOR_DARK} from '../styles/colors';
import {IconButton} from 'react-native-paper';

interface itemProps {
  id: string;
  native: string;
  translation: string;
  nativeFirst?: boolean;
}

function BrowseScreen({navigation}) {
  const [flashcards, setFlshcards] = useState([]);
  const [nativeFirst, setNativeFirst] = useState(true);

  function Item(props: itemProps) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          //console.log(props.id, props.native, props.translation)
          navigation.navigate('Edit', {
            id: props.id,
            native: props.native,
            translation: props.translation,
          })
        }>
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

  const updateFlashcards = () => {
    fetchFlashcards()
      // @ts-ignore: readonly
      .then(fl => setFlshcards(fl));
  };

  // useEffect(() => {
  //   updateFlashcards();
  //   return () => {
  //     setFlshcards([]);
  //   };
  // }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      updateFlashcards();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        style={{width: '100%'}}
        contentContainerStyle={styles.flatList}
        data={flashcards}
        renderItem={item => renderItem(item, nativeFirst)}
        keyExtractor={item => item[0]}
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

export default BrowseScreen;
