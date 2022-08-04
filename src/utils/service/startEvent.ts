import notifee, {EventType} from '@notifee/react-native';
import {NOTIFICATION_ID} from '../constans';

export const startEvent = notification => {
  return async ({type, detail}) => {
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
  };
};
