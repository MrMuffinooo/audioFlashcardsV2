import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Bar} from 'react-native-progress';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../styles/colors';
import notifee, {
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';
import {useEffect} from 'react';
import {NOTIFICATION_ID} from '../utils/constans';

function ListenScreen() {
  const [progress, setProgress] = React.useState(0.4);

  useEffect(() => {
    async function onDisplayNotification() {
      // Request permissions (required for iOS)
      await notifee.requestPermission();

      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: 'ttsfc',
        name: 'Text to Speech Flashcards',
        importance: AndroidImportance.LOW,
        visibility: AndroidVisibility.PUBLIC,
        vibration: false,
        lights: false,
      });

      // Display a notification
      await notifee.displayNotification({
        id: NOTIFICATION_ID,
        title: 'Audio Flashcards',
        android: {
          channelId,
          ongoing: true,
          autoCancel: false,
          asForegroundService: true,
          importance: AndroidImportance.LOW,
          visibility: AndroidVisibility.PUBLIC,
          color: `${COLOR_SECONDARY}`,
          colorized: true,
          //smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
          // pressAction is needed if you want the notification to open the app when pressed
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

    async function cancelNotification() {
      await notifee.cancelNotification('Audio Flashcards Notif');
    }

    onDisplayNotification().catch(console.error);

    return () => {
      notifee.stopForegroundService();
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={[styles.box, styles.boxTop]}>
        <View style={[styles.box, styles.boxTopTop]}>
          <Text>TOP</Text>
        </View>
        <View style={[styles.box, styles.boxTopBottom]}>
          <Bar progress={progress} width={null} style={styles.progress} />
        </View>
      </View>
      <View style={[styles.box, styles.boxBottom]}>
        <View style={[styles.box, styles.boxBottom.element]}>
          <IconButton
            icon={require('../assets/icons/skip_prev_48.png')}
            size={92}
            color={COLOR_PRIMARY}
            style={styles.button}
          />
        </View>
        <View style={[styles.box, styles.boxBottom.element]}>
          <IconButton
            icon={require('../assets/icons/play_48.png')}
            size={92}
            color={COLOR_PRIMARY}
            style={styles.button}
          />
        </View>
        <View style={[styles.box, styles.boxBottom.element]}>
          <IconButton
            icon={require('../assets/icons/skip_next_48.png')}
            size={92}
            color={COLOR_PRIMARY}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  boxBottom: {
    flex: 2,
    flexDirection: 'row',
    element: {
      flex: 1,
      height: '100%',
    },
  },
  boxTop: {
    flex: 3,
  },
  boxTopTop: {
    flex: 4,
  },
  boxTopBottom: {
    flex: 1,
  },
  button: {
    width: '100%',
    height: '100%',
  },
  progress: {
    width: '80%',
  },
});

export default ListenScreen;
