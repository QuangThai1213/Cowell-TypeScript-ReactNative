import React from 'react';
import {StyleSheet, StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from './TopBar';

export interface Props {}

interface State {}

export default class MainScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const isDarkMode = false;
    return (
      <ScrollView style={styles.container}>
        <StatusBar
          translucent
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor="transparent"
        />
        <SafeAreaView>
          <TopBar />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
