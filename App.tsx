/* eslint-disable react/no-did-mount-set-state */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar, StyleSheet, ScrollView} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {MainScreen, SplashScreen} from '@Containers';

import {NavigationContainer} from '@react-navigation/native';

export interface Props {}

interface State {
  isLoading: Boolean;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {isLoading: true};
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    // get Data
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({isLoading: false});
    }
  }

  render() {
    const isDarkMode = false;

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    if (this.state.isLoading) {
      return (
        <ScrollView style={[styles.container, backgroundStyle]}>
          <StatusBar
            translucent
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor="transparent"
          />
          <SplashScreen />
        </ScrollView>
      );
    }
    return (
      <View style={[styles.container, backgroundStyle]}>
        <StatusBar
          translucent
          barStyle={isDarkMode ? 'dark-content' : 'light-content'}
          backgroundColor="transparent"
        />
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
