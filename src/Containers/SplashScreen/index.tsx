/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
export default class SplashScreen extends React.PureComponent {
  render() {
    let imgBannerURI = '../../../asset/banner/Animal.png';
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Image source={require(imgBannerURI)} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>My Pets</Text>
            <Text style={styles.text}>
              Taking care of a pet is my favorite, it helps me to gaimr stress
              and fatigue.
            </Text>
            <View style={styles.dotContainer}>
              <View
                style={{
                  backgroundColor: 'rgba(85,51,234,0.21)',
                  width: 4,
                  height: 4,
                  borderRadius: 5,
                  marginHorizontal: 3,
                }}
              />
              <View
                style={{
                  backgroundColor: 'rgba(85,51,234,1)',
                  width: 24,
                  height: 4,
                  borderRadius: 5,
                }}
              />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Skip</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  textContainer: {flex: 1, alignItems: 'center'},
  title: {
    marginTop: 40,
    fontSize: 20,
    color: 'rgba(51,51,51,1)',
    fontWeight: '800',
  },
  text: {
    marginTop: 16,
    marginHorizontal: 24,
    fontSize: 16,
    color: 'rgba(130,130,130,1)',
    textAlign: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    width: '100%',
    height: 44,
    marginHorizontal: 24,
    marginTop: 106,
    backgroundColor: 'rgba(87,65,157,1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
  },
  textButton: {fontSize: 16, color: 'rgba(255,255,255,1)'},
});
