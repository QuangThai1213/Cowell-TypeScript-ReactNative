import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ButtonShadow} from '@Components';

export interface Props {}

interface State {}

export default class MainScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  notificationsIconPress() {
    console.log('check');
  }
  render() {
    const color = 'rgba(85,51,234,1)';
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={[styles.shadowContainer, styles.shadow]}>
            <Image
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/da34/2c30/41156885f0bac305f3102673ed6a282c?Expires=1618790400&Signature=hCIsbrjZsZdSF~O3g5BQyqhpTAkdh~wv2jMY8R3wAUqyuMZL-VwpOphTnt6byPoam68SyPsRbMuXhKiu8eca~Sz4JJrIqqz8gR5gWI6IBrOYfXRcs-TQTWk-5NN8KdspuT-PFipoP2nDMNP~SEGLrtBwNVldtxolPV-O20YaC~IWQOZjULXLKt-j4z4evXoqJiu2MTieMUrc6LfviWnjs8CgiM~1JWmkrVuCsIhsIzUSUc0LhKUSE~fZteqsKSA8AfSN6KQraYWHQ70BG-egVWvchDGiMHVq67J3MCZitJMt0zdRGkDq0U47rWiYfNVmhtiuvg1-UXo03vslF5fSdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
              style={styles.image}
            />
          </View>

          <Ionicons style={styles.icon} name={'location'} />
          <Text style={styles.text}>New York City</Text>
        </View>
        <TouchableOpacity onPress={this.notificationsIconPress}>
          <ButtonShadow
            active={false}
            iconName={'notifications-outline'}
            size={20}
            color={color}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  shadowContainer: {
    width: 45,
    height: 45,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(245,245,249,1)',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.12,
    shadowRadius: 1.22,
    elevation: 5,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 44,
  },
  icon: {marginLeft: 22},
  text: {},
});
