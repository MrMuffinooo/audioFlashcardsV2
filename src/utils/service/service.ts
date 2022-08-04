import notifee, {EventType, Notification} from '@notifee/react-native';
import {NOTIFICATION_ID} from '../constans';
import {pauseEvent} from './pauseEvent';
import {startEvent} from './startEvent';

export const backgroundService = (notification: Notification) =>
  new Promise(async () => {
    notifee.onForegroundEvent(async ({type, detail}) => {
      if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'exit') {
        await notifee.stopForegroundService();
      }
    });

    notifee.onForegroundEvent(pauseEvent(notification));

    notifee.onForegroundEvent(startEvent(notification));

    const sleep = time =>
      new Promise(resolve => setTimeout(() => resolve(0), time));
    for (let i = 0; i < 15; i++) {
      //KEEPS GOING AFTER stopForegroundService
      console.log(i);
      await sleep(1000);
    }
  });
