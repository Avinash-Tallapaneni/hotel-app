import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONT_SIZES, SPACING} from '../constants';

interface CategoryHeadingProps {
  title: string;
  cta: string;
  category?: string;
}

const CategoryHeading = ({title, cta, category}: CategoryHeadingProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>{cta}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryHeading;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  title: {
    fontSize: FONT_SIZES.body,
    fontWeight: '500',
    color: COLORS.onyx,
  },
  seeAll: {
    color: COLORS.royalBlue,
    fontSize: FONT_SIZES.small,
    fontWeight: '500',
  },
});
