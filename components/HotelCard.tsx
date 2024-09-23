import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeartIcon from '../assets/svg/HeartIcon';
import {COLORS, SPACING} from '../constants';
import {BORDERS} from '../constants/border';
import LocationRating from './LocationRating';

export interface HotelCardProps {
  isSmall?: boolean;
  imageSource: ImageSourcePropType;
  name: string;
  location: string;
  rating: number;
  price: number;
  currency: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  imageSource,
  name,
  location,
  rating,
  price,
  currency,
  isSmall = false,
}) => {
  return (
    <View style={[styles.card, isSmall && styles.smallCard]}>
      <View
        style={[styles.imageContainer, isSmall && styles.smallImageContainer]}>
        <Image
          source={imageSource}
          style={[styles.image, isSmall && styles.smallImage]}
        />
        {!isSmall && (
          <TouchableOpacity style={styles.heartButton}>
            <HeartIcon width={20} height={20} />
          </TouchableOpacity>
        )}
      </View>
      <LocationRating
        name={name}
        location={location}
        rating={rating}
        price={price}
        currency={currency}
        isSmall={isSmall}
      />
    </View>
  );
};
export default HotelCard;

const styles = StyleSheet.create({
  card: {
    width: 257,
    elevation: 1,
    shadowOpacity: 0.04,
    backgroundColor: COLORS.background,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#1B1B4D',
    shadowRadius: 45,
    borderRadius: SPACING.sml,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 182,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heartButton: {
    position: 'absolute',
    top: SPACING.sml,
    right: SPACING.sml,
    backgroundColor: COLORS.background,
    borderRadius: BORDERS.xl,
    padding: SPACING.sm,
  },
  smallCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    padding: SPACING.sml,
    gap: SPACING.sml,
  },
  smallImageContainer: {
    width: 84,
    height: 84,
    // marginRight: SPACING.sml,
    overflow: 'hidden',
    borderRadius: SPACING.sml,
  },
  smallImage: {
    width: '100%',
    height: '100%',
  },
});
