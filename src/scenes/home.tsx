import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Play" onPress={() => navigation.navigate('Play')} />
      <Button title="Listen" onPress={() => navigation.navigate('Listen')} />
      <Button title="Edit" onPress={() => navigation.navigate('Edit')} />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
  },
});

export default HomeScreen;
