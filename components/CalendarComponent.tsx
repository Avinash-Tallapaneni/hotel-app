import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {COLORS} from '../constants';

const CalendarComponent = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          enableSwipeMonths={true}
          markedDates={{
            [selected]: {selected: true, selectedColor: COLORS.royalBlue},
            '2024-09-19': {selected: true, selectedColor: COLORS.royalBlue},
            '2024-09-25': {selected: true, selectedColor: COLORS.royalBlue},
          }}
          theme={{
            backgroundColor: COLORS.inactiveBtn,
            calendarBackground: COLORS.inactiveBtn,
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: COLORS.royalBlue,
            selectedDayTextColor: '#ffffff',
            todayTextColor: COLORS.royalBlue,
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: COLORS.royalBlue,
            selectedDotColor: '#ffffff',
            arrowColor: COLORS.royalBlue,
            monthTextColor: '#2d4150',
            indicatorColor: COLORS.royalBlue,
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 24,
  },
  calendarContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default CalendarComponent;
