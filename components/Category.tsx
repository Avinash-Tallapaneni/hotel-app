import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants';

import {SvgProps} from 'react-native-svg';
import {
  HouseIcon1,
  BuildingIcon,
  BuildingsIcon,
  HouseIcon2,
} from '../assets/svg';

type CategoryItem = {
  icon: React.FC<SvgProps>;
  name: string;
};

const categories: CategoryItem[] = [
  {icon: HouseIcon1, name: 'Hotel'},
  {icon: BuildingIcon, name: 'HomeStay'},
  {icon: BuildingsIcon, name: 'Apartment'},
  {icon: HouseIcon2, name: 'Renthouse'},
];

const Category = () => {
  const [activeCategory, setActiveCategory] = useState('Hotel');

  const handlePress = (name: string) => {
    setActiveCategory(name);
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        {categories.map((category, index) => {
          const isActive = category.name === activeCategory;
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryItem,
                isActive ? styles.activeCategory : styles.inactiveCategory,
              ]}
              onPress={() => handlePress(category.name)}>
              <category.icon
                stroke={isActive ? COLORS.background : COLORS.grey}
                // strokeWidth={2}
              />
              <Text style={isActive ? styles.activeText : styles.inactiveText}>
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  wrapper: {
    height: 'auto',
    marginTop: 32,
  },
  container: {
    paddingVertical: 10,
    gap: 10,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  activeCategory: {
    backgroundColor: COLORS.royalBlue,
  },
  inactiveCategory: {
    backgroundColor: COLORS.inactiveBtn,
  },
  activeText: {
    color: COLORS.background,
  },
  inactiveText: {
    color: COLORS.grey,
  },
});
