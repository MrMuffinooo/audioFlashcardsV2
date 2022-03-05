import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/scenes/home';
import EditScreen from './src/scenes/edit';
import ListenScreen from './src/scenes/listen';
import PlayScreen from './src/scenes/play';
import SettingsScreen from './src/scenes/settings';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Audio Flashcards',
          }}
        />
        <Stack.Screen name="Listen" component={ListenScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
