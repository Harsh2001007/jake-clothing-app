import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/HomeComponents/Header';
import Banner from '../components/HomeComponents/Banner';
import CategoriesView from '../components/HomeComponents/CategoriesView';
import Curated from '../components/HomeComponents/Curated';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Banner />
        <CategoriesView />
        <Curated />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
