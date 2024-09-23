import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CategoryHeading from './CategoryHeading';
import {SPACING} from '../constants';
import HotelCard from './HotelCard';

const PopularHotel = () => {
  return (
    <View style={styles.container}>
      <CategoryHeading title="Popular Hotel" cta="See all" />

      <HotelCard
        imageSource={require('../assets/property/property2.png')}
        name="Asteria Hotel"
        location="Wilora NT 0872, Australia"
        rating={5}
        price={165.3}
        currency="$"
        isSmall
      />
    </View>
  );
};

export default PopularHotel;

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.lg,
  },
});
