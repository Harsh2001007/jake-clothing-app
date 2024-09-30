import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ProductDetail({route}) {
  const {data} = route.params;
  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={{uri: data.imageUrl}} style={styles.productImg} />
        </View>
        <View style={styles.productInfo}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>
              {data.brandName}
            </Text>
            <Text style={{fontSize: 14, fontWeight: '500', marginLeft: 15}}>
              {data.rating}
            </Text>
            <Text style={{fontSize: 14, fontWeight: '500'}}>
              ({data.ratingCount})
            </Text>
          </View>
          <Text style={{fontSize: 14, fontWeight: '500'}}>wishlist</Text>
        </View>
        <View style={styles.productName}>
          <Text style={{fontWeight: '700', fontSize: 20}}>{data.name}</Text>
        </View>
        <View style={styles.priceView}>
          <Text style={{fontSize: 20, color: 'red'}}>{data.currency}</Text>
          <Text style={{fontSize: 20, color: 'red'}}>{data.price}</Text>
        </View>
        <View style={styles.descView}>
          <Text style={{color: 'grey'}}>{data.desc}</Text>
        </View>
        <View style={styles.colorView}>
          <View>
            <Text style={{fontSize: 18, fontWeight: '550'}}>Choose Colour</Text>
          </View>
          <View style={styles.availColors}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 50,
                backgroundColor: 'black',
              }}></View>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 50,
                backgroundColor: 'skyblue',
              }}></View>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 50,
                backgroundColor: 'pink',
              }}></View>
          </View>
        </View>
        <View style={styles.sizeView}>
          <View>
            <Text style={{fontSize: 18, fontWeight: '550'}}>Choose Size</Text>
          </View>
          <View style={styles.availColors}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 50,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 700}}>M</Text>
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 50,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 700}}>L</Text>
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 50,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 700}}>XL</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            height: 40,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
          }}>
          <Text style={{fontWeight: '700'}}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            height: 40,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: '700'}}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    height: 400,
    width: '100%',
  },
  productImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  productInfo: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  productName: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
  priceView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  descView: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
  container: {
    height: '90%',
  },
  btnContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  availColors: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  colorView: {
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 20,
  },
  sizeView: {
    paddingHorizontal: 20,
    marginTop: 5,
    paddingBottom: 20,
  },
});
