import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '@Containers';
import {ButtonShadow} from '@Components';

export interface Props {}

interface State {}

type TabParamList = {
  Home: undefined;
  Chat: undefined;
  Favorite: undefined;
  User: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default class MainScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = 'alert-circle-outline';

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'analytics' : 'analytics-outline';
            }

            // You can return any component that you like here!
            if (focused) {
              return (
                <ButtonShadow
                  active={true}
                  iconName={iconName}
                  size={size}
                  color={color}
                  customStyle={styles.iconContainer}
                />
              );
            } else {
              return (
                <ButtonShadow
                  active={false}
                  iconName={iconName}
                  size={size}
                  color={color}
                  customStyle={styles.iconContainer}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'rgba(85,51,234,1)',
          inactiveTintColor: 'rgba(189,189,189,1)',
          showLabel: false,
          style: {
            height: 105,
            backgroundColor: 'rgba(245,245,250,1)',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={HomeScreen} />
        <Tab.Screen name="Favorite" component={HomeScreen} />
        <Tab.Screen name="User" component={HomeScreen} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {marginBottom: 30},
});
