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
import AddScreen from './src/scenes/add';
import {COLOR_PRIMARY, COLOR_PRIMARY_TEXT} from './src/styles/colors';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: COLOR_PRIMARY,
            },
            headerTintColor: COLOR_PRIMARY_TEXT,
          }}>
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
          <Stack.Screen name="Add" component={AddScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
