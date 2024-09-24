import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HotelCard from './HotelCard';
import CategoryHeading from './CategoryHeading';
import {SPACING} from '../constants';

const NearLocation: React.FC = () => {
  return (
    <View style={styles.container}>
      <CategoryHeading title="Near Location" cta="See all" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}>
        <HotelCard
          imageSource={require('../assets/property/property1.png')}
          name="The Aston Vill Hotel"
          location="Alice Springs NT 0870, Australia"
          rating={5.0}
          price={200.7}
          currency="$"
        />
        <HotelCard
          imageSource={require('../assets/property/property2.png')}
          name="Golden Palm Tree Resort"
          location="Nothern Territory, Australia"
          rating={4.8}
          price={175.9}
          currency="$"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.lg,
  },
  scrollViewContent: {
    gap: SPACING.md,
    marginHorizontal: SPACING.sm,
    marginBottom: 2,
  },

  scrollView: {
    marginHorizontal: -SPACING.md,
  },
});

export default NearLocation;
