import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import CalendarComponent from '../components/CalendarComponent';
import {COLORS} from '../constants';
import Schedule from '../components/Schedule';
import ScheduleHeader from '../components/ScheduleHeader';
import RIghtArrowIcon from '../assets/svg/RIghtArrowIcon';
import GearIcon from '../assets/svg/GearIcon';

const ScheduleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ScheduleHeader
          leftIcon={<RIghtArrowIcon strokeWidth={2} rotation={180} />}
          rightIcon={<GearIcon strokeWidth={2} />}
          title="Schedule"
        />
        <CalendarComponent />
        <Schedule />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 24,
    paddingBottom: 80,
  },
});
