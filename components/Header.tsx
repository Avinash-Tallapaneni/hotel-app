import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONT_SIZES, FONTS_FAMILIES, SPACING} from '../constants';
import NotificationIcon from '../assets/svg/NotificationIcon';
import LocationIcon from '../assets/svg/LocationIcon';
import {BORDERS} from '../constants/border';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.locationWrapper}>
        <Text style={styles.currentLocationText}>Current location</Text>
        <View style={styles.locationTextWrapper}>
          <LocationIcon style={styles.icon} />
          <Text style={styles.locationText}>Wallace, Australia</Text>
        </View>
      </View>
      <View style={styles.notificationWrapper}>
        <NotificationIcon strokeWidth={2} />
        <View style={styles.notificationDot} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 24,
  },
  locationWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: SPACING.sm,
  },
  currentLocationText: {
    fontSize: FONT_SIZES.tiny,
    color: COLORS.grey,
  },
  locationTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  icon: {
    width: 20,
    height: 20,
  },
  locationText: {
    fontSize: FONT_SIZES.small,
    fontWeight: '900',
    color: COLORS.onyx,
    fontFamily: FONTS_FAMILIES.jakartaBold,
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
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: COLORS.flameRed,
    position: 'absolute',
    top: 9,
    left: 21,
    transform: [{translateX: -1}, {translateY: -2}],
  },
});
