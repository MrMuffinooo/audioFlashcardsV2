import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Bar} from 'react-native-progress';
import {COLOR_PRIMARY, COLOR_SECONDARY_TEXT} from '../styles/colors';

function ListenScreen() {
  const [progress, setProgress] = React.useState(0.4);

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
