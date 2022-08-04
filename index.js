/**
 * @format
 */

import notifee from '@notifee/react-native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {backgroundService} from './src/utils/service/service';

AppRegistry.registerComponent(appName, () => App);
notifee.registerForegroundService(backgroundService);
