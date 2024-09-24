import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarIcon from '../assets/svg/StarIcon';
import {HotelCardProps} from './HotelCard';
import {COLORS, FONT_SIZES, FONTS_FAMILIES, SPACING} from '../constants';
import {CalendarIcon} from '../assets/svg';
import RIghtArrowIcon from '../assets/svg/RIghtArrowIcon';

interface LocationRatingProps extends Omit<HotelCardProps, 'imageSource'> {}

const LocationRating = ({
  name,
  location,
  rating,
  price,
  currency,
  isSmall,
  isSchedule,
  date,
}: LocationRatingProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer, isSmall && styles.smallCard]}>
        <View style={styles.nameLocationContainer}>
          <View style={styles.nameRatingContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>
            {!isSchedule && (
              <View style={styles.ratingContainer}>
                <StarIcon width={20} height={20} />
                <Text style={styles.rating}>{rating.toFixed(1)}</Text>
              </View>
            )}
          </View>
          {!isSchedule && (
            <Text style={styles.location} numberOfLines={1}>
              {location}
            </Text>
          )}
          {isSchedule && (
            <View style={styles.scheduleContainer}>
              <CalendarIcon stroke={COLORS.grey} />
              <Text style={styles.scheduleDate}>{date}</Text>
            </View>
          )}
        </View>
        <Text style={styles.price}>
          {currency}
          {price.toFixed(1)} <Text style={styles.perNight}>/night</Text>
        </Text>
      </View>
      {isSchedule && (
        <RIghtArrowIcon stroke={COLORS.onyx} width={24} height={24} />
      )}
    </View>
  );
};

export default LocationRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  contentContainer: {
    padding: SPACING.sml,
    gap: SPACING.md,
    flex: 1,
  },
  nameLocationContainer: {
    gap: SPACING.xs,
  },
  nameRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: SPACING.xl,
  },
  name: {
    fontSize: FONT_SIZES.small,
    fontWeight: '500',
    color: COLORS.onyx,
    // flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  rating: {
    fontSize: FONT_SIZES.tiny,
    fontWeight: '700',
    color: COLORS.onyx,
    fontFamily: FONTS_FAMILIES.jakartaBold,
  },
  location: {
    fontSize: FONT_SIZES.tiny,
    color: COLORS.grey,
  },
  price: {
    fontSize: FONT_SIZES.small,
    fontWeight: '700',
    color: COLORS.royalBlue,
  },
  perNight: {
    fontSize: FONT_SIZES.tiny,
    fontWeight: '400',
    color: COLORS.grey,
  },

  smallCard: {
    padding: 0,
  },
  scheduleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  scheduleDate: {
    color: COLORS.grey,
    marginLeft: 4,
  },
});
