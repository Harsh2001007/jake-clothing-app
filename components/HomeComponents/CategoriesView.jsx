import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import CATEGORIES from '../../constants/categories';

export default function CategoriesView() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop by category</Text>
        <TouchableOpacity>
          <Text>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scroll}
        showsHorizontalScrollIndicator={false}>
        {CATEGORIES.map(item => (
          <View style={styles.catPill}>
            <TouchableOpacity style={styles.categoryContainer}>
              <Image
                source={{uri: item.imgUrl}}
                style={{height: 70, width: 70, borderRadius: 50}}
              />
              <Text style={styles.catText}>{item.categoryName}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  scroll: {
    gap: 15,
    marginTop: 15,
  },
  catText: {
    fontWeight: '550',
  },
  headerTitle: {
    fontWeight: '600',
  },
});
