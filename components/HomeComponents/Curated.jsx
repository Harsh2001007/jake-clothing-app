import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
import CURATED from '../../constants/CuratedData';

const Card = ({imgurl, brand, rating, ratingCount, name, currency, price}) => (
  <View style={styles.cardBody}>
    <View style={styles.cardUpper}>
      <TouchableOpacity>
        <ImageBackground
          source={{uri: imgurl}}
          style={{height: 180, width: 170}}>
          <Text>Fav</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
    <View style={styles.cardLower}>
      <View style={styles.brandInfo}>
        <Text style={styles.brandText}>{brand}</Text>
        <Text style={styles.ratingText}>{rating}</Text>
        <Text style={styles.ratingCountText}>({ratingCount})</Text>
      </View>
      <View style={styles.name}>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.currText}>{currency}</Text>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </View>
  </View>
);

export default function Curated() {
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
          renderItem={({item}) => (
            <Card
              imgurl={item.imageUrl}
              brand={item.brandName}
              currency={item.currency}
              rating={item.rating}
              ratingCount={item.ratingCount}
              name={item.name}
              price={item.price}
            />
          )}
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
