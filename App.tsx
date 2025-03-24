import React from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';




function App(): React.JSX.Element {


  return (
    <View style={styles.wrapper}>
      <StatusBar
        barStyle={ 'dark-content'}
      />
      <ScrollView>
        <View>
          <Text>Top bar</Text>
        </View>
        <View>
          <Text>Bottom section</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex'
  }
});

export default App;
