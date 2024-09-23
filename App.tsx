import React from 'react';
import './gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screen/HomeScreen';
import ScheduleScreen from './screen/ScheduleScreen';
import BookmarkScreen from './screen/BookmarkScreen';
import UserScreen from './screen/UserScreen';
import {HouseIcon1} from './assets/svg';
import {StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const CustomTabBarItem = ({label, icon: Icon, isFocused}) => (
  <View style={styles.tabItem}>
    <View style={styles.iconContainer}>
      <Icon color={isFocused ? '#4a4af4' : 'gray'} width={24} height={24} />
    </View>
    <Text style={[styles.tabLabel, {color: isFocused ? '#4a4af4' : 'gray'}]}>
      {label}
    </Text>
  </View>
);

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: '#fff',
            borderTopColor: 'transparent',
            height: 60,
          },
          tabBarItemStyle: {
            padding: 5,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <CustomTabBarItem
                label="Home"
                icon={HouseIcon1}
                isFocused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <CustomTabBarItem
                label="Calendar"
                icon={HouseIcon1}
                isFocused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Bookmark"
          component={BookmarkScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <CustomTabBarItem
                label="Saved"
                icon={HouseIcon1}
                isFocused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <CustomTabBarItem
                label="Profile"
                icon={HouseIcon1}
                isFocused={focused}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#f5f4f3', // Add background color
    padding: 4, // Optional padding for better touch area
  },
  iconContainer: {
    marginRight: 4, // Gap of 4 between icon and label
  },
  tabLabel: {
    fontSize: 12, // Font size of 12px
  },
});
