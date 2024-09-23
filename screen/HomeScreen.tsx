import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Category from '../components/Category';
import NearLocation from '../components/NearLocation';
import PopularHotel from '../components/PopularHotel';
import {COLORS} from '../constants';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header />
        <Category />
        <NearLocation />
        <PopularHotel />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 24,
  },
});
