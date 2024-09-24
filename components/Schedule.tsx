import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CategoryHeading from './CategoryHeading';
import HotelCard from './HotelCard';
import {COLORS} from '../constants';

const Schedule = () => {
  return (
    <View style={styles.container}>
      <CategoryHeading title="My schedule" cta="See all" />
      <View style={styles.cardContainer}>
        <HotelCard
          imageSource={require('../assets/property/property1.png')}
          name="The Aston Vill Hotel"
          location="Alice Springs NT 0870, Australia"
          rating={5.0}
          price={200.7}
          currency="$"
          isSmall
          isSchedule
          date="19 March 2024"
        />
        <HotelCard
          imageSource={require('../assets/property/property1.png')}
          name="The Aston Vill Hotel"
          location="Alice Springs NT 0870, Australia"
          rating={5.0}
          price={200.7}
          currency="$"
          isSmall
          isSchedule
          date="19 March 2024"
        />
      </View>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  cardContainer: {
    gap: 16,
  },
});
