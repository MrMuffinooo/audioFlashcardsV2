/**
 * @format
 */

import notifee, {EventType} from '@notifee/react-native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NOTIFICATION_ID} from './src/utils/constans';

const sleep = time => new Promise(resolve => setTimeout(() => resolve(), time));

notifee.registerForegroundService(notification => {
  return new Promise(async () => {
    notifee.onForegroundEvent(async ({type, detail}) => {
      if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'exit') {
        await notifee.stopForegroundService();
      }
    });

    notifee.onForegroundEvent(async ({type, detail}) => {
      if (
        type === EventType.ACTION_PRESS &&
        detail.pressAction.id === 'pause'
      ) {
        await notifee.displayNotification({
          id: NOTIFICATION_ID,
          title: 'Audio Flashcards',
          android: {
            ...notification.android,
            pressAction: {
              id: 'default',
            },
            actions: [
              {
                title: '&#x23f8; <b>Play</b>',
                pressAction: {
                  id: 'play',
                },
              },
              {
                title: '&#x1f500; <b>Shuffle</b>',
                pressAction: {
                  id: 'shuffle',
                },
              },
              {
                title: '&#x274c; <b>Exit</b>',
                pressAction: {
                  id: 'exit',
                },
              },
            ],
          },
        });
      }
    });

    notifee.onForegroundEvent(async ({type, detail}) => {
      if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'play') {
        await notifee.displayNotification({
          id: NOTIFICATION_ID,
          title: 'Audio Flashcards',
          android: {
            ...notification.android,
            pressAction: {
              id: 'default',
            },
            actions: [
              {
                title: '&#x23f8; <b>Pause</b>',
                pressAction: {
                  id: 'pause',
                },
              },
              {
                title: '&#x1f500; <b>Shuffle</b>',
                pressAction: {
                  id: 'shuffle',
                },
              },
              {
                title: '&#x274c; <b>Exit</b>',
                pressAction: {
                  id: 'exit',
                },
              },
            ],
          },
        });
      }
    });

    for (let i = 0; i < 15; i++) {
      //KEEPS GOING AFTER stopForegroundService
      console.log(i);
      await sleep(1000);
    }
  });
});

AppRegistry.registerComponent(appName, () => App);
