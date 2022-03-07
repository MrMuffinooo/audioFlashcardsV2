import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../components/Button';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        text="Play"
        style={styles.button}
        onPress={() => navigation.navigate('Play')}
      />
      <Button
        text="Listen"
        style={styles.button}
        onPress={() => navigation.navigate('Listen')}
      />
      <Button
        text="Edit"
        style={styles.buttonEdit}
        onPress={() => navigation.navigate('Edit')}
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
});

export default HomeScreen;
