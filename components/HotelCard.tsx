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
import {useNavigation} from '@react-navigation/native';

export interface HotelCardProps {
  isSmall?: boolean;
  isSchedule?: boolean;
  imageSource: ImageSourcePropType;
  name: string;
  location: string;
  rating: number;
  price: number;
  currency: string;
  date?: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  imageSource,
  name,
  location,
  rating,
  price,
  currency,
  isSmall = false,
  isSchedule = false,
  date,
}) => {
  const navigation = useNavigation(); // Initialize navigation

  const handlePress = () => {
    navigation.navigate('HotelPreview', {
      name: name,
      location: location,
      rating: rating,
      price: price,
      currency: currency,
      date: date,
      imageSource: imageSource,
      description:
        'Aston Hotel, Alice Springs NT 0870, Australia is a modern hotel. elegant 5 star hotel overlooking the sea. perfect for a romantic, charming ',
      previewImages: [
        require('../assets/property/property1.png'),
        require('../assets/property/property2.png'),
        require('../assets/property/property3.png'),
        require('../assets/property/property4.png'),
        require('../assets/property/property5.png'),
        require('../assets/property/property6.png'),
      ],
    });
  };
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
      <View style={[styles.card, isSmall && styles.smallCard]}>
        <View
          style={[
            styles.imageContainer,
            isSmall && styles.smallImageContainer,
          ]}>
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
          isSchedule={isSchedule}
          date={date}
        />
      </View>
    </TouchableOpacity>
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
