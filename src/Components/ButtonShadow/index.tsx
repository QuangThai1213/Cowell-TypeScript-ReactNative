import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface Props {
  active: boolean;
  iconName: string;
  size: number;
  color: string;
  customStyle: object;
}

export default class MainScreen extends React.Component<Props> {
  static defaultProps = {
    active: false,
    customStyle: {},
  };
  constructor(props: Props) {
    super(props);
  }
  render() {
    // console.log(this.props.color);
    if (this.props.active) {
      return (
        <View style={[styles.shadowContainer, this.props.customStyle]}>
          <View style={styles.iconContainer}>
            <Ionicons
              style={styles.icon}
              name={this.props.iconName}
              size={this.props.size}
              color={this.props.color}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={[styles.iconContainer, styles.shadow, this.props.customStyle]}>
          <Ionicons
            name={this.props.iconName}
            size={this.props.size}
            color={this.props.color}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(245,245,249,1)',
    marginTop: 3,
    marginLeft: 3,
  },
  shadowContainer: {
    width: 40,
    height: 40,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(189,189,189,0.3)',
  },
  icon: {marginBottom: 3, marginRight: 3},
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: -10,
      height: -10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 1.22,
    elevation: 3,
  },
});
