import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen';
import ScheduleScreen from './screen/ScheduleScreen';
import BookmarkScreen from './screen/BookmarkScreen';
import UserScreen from './screen/UserScreen';
import HotelPreviewScreen from './screen/HotelPreviewScreen';

import {CalendarIcon, BookmarkIcon, UserIcon} from './assets/svg';
import {COLORS, FONT_SIZES} from './constants';
import FilledHouseIcon from './assets/svg/FilledHouseIcon';
import FilledCalendarIcon from './assets/svg/FilledCalendarIcon';
import HouseTabIcon from './assets/svg/HouseTabIcon';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

type CustomTabBarItemProps = {
  label: string;
  focusedIcon: React.ElementType;
  defaultIcon: React.ElementType;
  isFocused: boolean;
};

const CustomTabBarItem = ({
  label,
  focusedIcon: FocusedIcon,
  defaultIcon: DefaultIcon,
  isFocused,
}: CustomTabBarItemProps) => {
  const Icon = isFocused ? FocusedIcon : DefaultIcon;

  return (
    <View style={[styles.tabItem, isFocused && styles.activeTab]}>
      <View style={styles.iconContainer}>
        <Icon
          stroke={isFocused ? COLORS.royalBlue : COLORS.grey}
          width={24}
          height={24}
        />
      </View>
      {isFocused && <Text style={styles.activeLabel}>{label}</Text>}
    </View>
  );
};

const tabScreens = [
  {
    name: 'Home',
    component: HomeScreen,
    label: 'Home',
    focusedIcon: FilledHouseIcon,
    defaultIcon: HouseTabIcon,
  },
  {
    name: 'Schedule',
    component: ScheduleScreen,
    label: 'Schedule',
    focusedIcon: FilledCalendarIcon,
    defaultIcon: CalendarIcon,
  },
  {
    name: 'Bookmark',
    component: BookmarkScreen,
    label: 'Saved',
    focusedIcon: BookmarkIcon,
    defaultIcon: BookmarkIcon,
  },
  {
    name: 'User',
    component: UserScreen,
    label: 'Profile',
    focusedIcon: UserIcon,
    defaultIcon: UserIcon,
  },
];

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerShown: false,
      }}>
      {tabScreens.map(({name, component, label, focusedIcon, defaultIcon}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <CustomTabBarItem
                label={label}
                focusedIcon={focusedIcon}
                defaultIcon={defaultIcon}
                isFocused={focused}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeTabs" component={TabNavigator} />
        <Stack.Screen name="HotelPreview" component={HotelPreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

export const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 56,
    borderTopColor: 'transparent',
    justifyContent: 'center',
    elevation: 0,
    flexDirection: 'row',
    gap: 50,
    paddingHorizontal: 20,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeLabel: {
    color: COLORS.royalBlue,
    fontWeight: '600',
    fontSize: FONT_SIZES.tiny,
  },
  activeTab: {
    display: 'flex',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    opacity: 0.85,
    backgroundColor: COLORS.periwinkle,
  },
});
