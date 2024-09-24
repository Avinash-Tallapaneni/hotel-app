import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeartIcon from '../assets/svg/HeartIcon';
import {COLORS, FONT_SIZES, FONTS_FAMILIES, SPACING} from '../constants';
import {BORDERS} from '../constants/border';
import ScheduleHeader from '../components/ScheduleHeader';
import RIghtArrowIcon from '../assets/svg/RIghtArrowIcon';
import MenuIcon from '../assets/svg/MenuIcon';
import LocationIcon from '../assets/svg/LocationIcon';
import {HouseIcon2} from '../assets/svg';

const HotelPreviewScreen = ({route}) => {
  const {
    name,
    location,
    rating,
    price,
    currency,
    date,
    imageSource,
    description,
    previewImages,
  } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ScheduleHeader
          leftIcon={<RIghtArrowIcon strokeWidth={2} rotation={180} />}
          rightIcon={<MenuIcon strokeWidth={2} />}
          title="Details"
        />

        {/* Main Image */}
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
          <TouchableOpacity style={styles.heartButton}>
            <HeartIcon width={20} height={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.amenitiesContainer}>
          <View style={styles.amenity}>
            <HouseIcon2 />
            <Text style={styles.amenityText}>Free Wifi</Text>
          </View>
          <View style={styles.amenity}>
            <HouseIcon2 />
            <Text style={styles.amenityText}>Free Breakfast</Text>
          </View>
          <View style={styles.amenity}>
            <HouseIcon2 />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>
            <Text style={styles.price}>
              {currency}
              {price.toFixed(1)}
              <Text style={styles.perNight}>/night</Text>
            </Text>
          </View>

          <View style={styles.locationRow}>
            <LocationIcon />
            <Text style={styles.location} numberOfLines={1}>
              {location}
            </Text>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Description</Text>

          <Text style={styles.description} numberOfLines={3}>
            {description.split(' ').length > 20 ? (
              <>
                {description.slice(0, description.indexOf(' ', 120))}{' '}
                <Text style={{color: COLORS.royalBlue}}> Read More...</Text>{' '}
              </>
            ) : (
              description
            )}
          </Text>
        </View>

        <View style={styles.previewContainer}>
          <Text style={styles.sectionTitle}>Preview</Text>
          <ScrollView horizontal>
            {previewImages.map((imgSrc, index) => (
              <Image key={index} source={imgSrc} style={styles.previewImage} />
            ))}
          </ScrollView>
        </View>

        {/* Booking Button */}
        <TouchableOpacity style={styles.bookingButton}>
          <Text style={styles.bookingText}>Book Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HotelPreviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 24,
    paddingBottom: 30,
  },

  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 246,
    marginTop: SPACING.lg,
    borderRadius: BORDERS.lg,
    overflow: 'hidden',
    backgroundColor: COLORS.greyLight,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: BORDERS.lg,
  },
  heartButton: {
    position: 'absolute',
    top: SPACING.sml,
    right: SPACING.sml,
    backgroundColor: COLORS.background,
    borderRadius: BORDERS.xl,
    padding: SPACING.sm,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.md,
    gap: SPACING.sm,
    alignItems: 'center',
  },
  amenity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#DBDBF366',
    borderRadius: BORDERS.md,
  },
  amenityText: {
    fontSize: FONT_SIZES.tiny,
    color: COLORS.onyx,
  },
  ratingText: {
    fontSize: FONT_SIZES.small,
    color: 'blue',
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginTop: SPACING.md,
    gap: SPACING.sm,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: FONT_SIZES.body,
    fontWeight: '700',
    color: COLORS.onyx,
    flexShrink: 1,
    fontFamily: FONTS_FAMILIES.jakartaBold,
  },
  price: {
    fontSize: FONT_SIZES.body,
    fontWeight: '700',
    color: COLORS.royalBlue,
  },
  perNight: {
    fontSize: FONT_SIZES.small,
    fontWeight: '700',
    color: COLORS.grey,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  location: {
    fontSize: FONT_SIZES.small,
    color: COLORS.grey,
    marginLeft: SPACING.xs,
    fontFamily: FONTS_FAMILIES.jakartaBold,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.sml,
  },
  rating: {
    fontSize: FONT_SIZES.small,
    fontWeight: '600',
    color: COLORS.onyx,
    fontFamily: FONTS_FAMILIES.jakartaBold,
  },
  date: {
    fontSize: FONT_SIZES.small,
    color: COLORS.grey,
  },
  descriptionContainer: {
    marginTop: SPACING.md,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.body,
    fontWeight: '600',
    color: COLORS.onyx,
    marginBottom: SPACING.sm,
  },
  description: {
    fontSize: FONT_SIZES.small,
    color: COLORS.grey,
  },
  previewContainer: {
    marginTop: SPACING.md,
    gap: SPACING.sm,
  },
  previewImage: {
    width: 98,
    height: 64,
    borderRadius: BORDERS.md,
    marginRight: SPACING.sm,
  },
  bookingButton: {
    backgroundColor: COLORS.royalBlue,
    borderRadius: BORDERS.md,
    paddingVertical: SPACING.md,
    marginTop: SPACING.md,
    alignItems: 'center',
  },
  bookingText: {
    color: COLORS.background,
    fontSize: FONT_SIZES.body,
    fontWeight: '600',
  },
});
