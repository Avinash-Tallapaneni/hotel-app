import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BORDERS} from '../constants/border';
import {COLORS, FONT_SIZES} from '../constants';
import {useNavigation} from '@react-navigation/native';

interface ScheduleHeaderProps {
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  title?: string;
}

const ScheduleHeader = ({leftIcon, rightIcon, title}: ScheduleHeaderProps) => {
  const navigation = useNavigation(); // Initialize navigation

  const handleArrowPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.notificationWrapper}
        onPress={handleArrowPress}>
        {/* <RIghtArrowIcon strokeWidth={2} rotation={180} /> */}
        {leftIcon}
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.notificationWrapper}>{rightIcon}</View>
    </View>
  );
};

export default ScheduleHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  notificationWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: BORDERS.lg,
    borderColor: COLORS.greyLight,
    position: 'relative',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: FONT_SIZES.body,
    color: COLORS.onyx,
    textAlign: 'center',
  },
});
