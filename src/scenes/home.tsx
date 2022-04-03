import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {MyButton} from '../components/MyButton';
import {COLOR_PRIMARY} from '../styles/colors';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MyButton
        text="Play"
        styleButton={styles.button}
        onPress={() => navigation.navigate('Play')}
      />
      <MyButton
        text="Listen"
        styleButton={styles.button}
        onPress={() => navigation.navigate('Listen')}
      />
      <MyButton
        text="Edit"
        styleButton={styles.buttonEdit}
        onPress={() => navigation.navigate('Browse')}
      />
      <FAB
        style={styles.fab}
        icon={require('../assets/icons/add_24.png')}
        onPress={() => navigation.navigate('Add')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  buttonEdit: {
    marginTop: 50,
  },
  fab: {
    position: 'absolute',
    margin: 32,
    right: 0,
    bottom: 0,
    backgroundColor: COLOR_PRIMARY,
  },
});

export default HomeScreen;
