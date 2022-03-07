import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/scenes/home';
import EditScreen from './src/scenes/edit';
import ListenScreen from './src/scenes/listen';
import PlayScreen from './src/scenes/play';
import SettingsScreen from './src/scenes/settings';
import {SettingsButton} from './src/components/SettingsButton';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Audio Flashcards',
              headerRight: () => <SettingsButton />,
            }}
          />
          <Stack.Screen name="Listen" component={ListenScreen} />
          <Stack.Screen name="Play" component={PlayScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
