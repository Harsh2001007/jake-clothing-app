import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import CURATED from '../../constants/CuratedData';
import {useNavigation} from '@react-navigation/native';

export default function Curated({navigation}) {
  const Navigation = useNavigation();

  const Card = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.cardBody}
        onPress={() =>
          Navigation.navigate('product-detail-screen', {data: item})
        }>
        <View style={styles.cardUpper}>
          <View>
            <Image
              source={{uri: item.imageUrl}}
              style={{height: 180, width: 170}}></Image>
          </View>
        </View>
        <View style={styles.cardLower}>
          <View style={styles.brandInfo}>
            <Text style={styles.brandText}>{item.brandName}</Text>
            <Text style={styles.ratingText}>{item.rating}</Text>
            <Text style={styles.ratingCountText}>({item.ratingCount})</Text>
          </View>
          <View style={styles.name}>
            <Text numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.currText}>{item.currency}</Text>
            <Text style={styles.priceText}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Curated for you</Text>
        <TouchableOpacity>
          <Text>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.curatedBody}>
        <FlatList
          ItemSeparatorComponent={() => <View style={{width: 10}}></View>}
          numColumns={2}
          columnWrapperStyle={styles.row}
          data={CURATED}
          keyExtractor={item => item.id}
          renderItem={Card}
        />
      </View>
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
  headerTitle: {
    fontWeight: '600',
  },
  brandInfo: {
    flexDirection: 'row',
    marginTop: 10,
  },
  cardBody: {
    width: 170,
    paddingBottom: 10,
  },
  curatedBody: {
    marginTop: 10,
  },
  brandText: {
    color: 'grey',
    fontWeight: '700',
  },
  ratingText: {
    marginLeft: 10,
    color: 'red',
    fontWeight: '600',
  },
  ratingCountText: {
    color: 'grey',
  },
  price: {
    flexDirection: 'row',
    marginTop: 5,
  },
  currText: {
    fontWeight: '700',
  },
  priceText: {
    marginLeft: 2,
    fontWeight: '700',
  },
  row: {
    justifyContent: 'space-between', // Adds space between the cards in each row
    marginBottom: 25,
  },
});
