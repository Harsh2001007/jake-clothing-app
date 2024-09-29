import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Banner() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.left}>
          <Text style={styles.banerTitle}>NEW COLLECTIONS</Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Text style={styles.digit}>20</Text>
            <View>
              <Text style={styles.percent}>%</Text>
              <Text style={styles.off}>OFF</Text>
            </View>
          </View>
          <View style={styles.shopNowView}>
            <Text style={styles.shopNowText}>SHOP NOW</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  banner: {
    backgroundColor: '#c4d1da',
    height: 200,
    width: '100%',
    paddingLeft: 10,
    paddingVertical: 20,
  },
  bannerImg: {
    height: '100%',
    width: '100%',
  },
  imageStyle: {
    resizeMode: 'cover',
    opacity: 1,
  },
  banerTitle: {
    fontWeight: '600',
    fontSize: 24,
    letterSpacing: -1,
  },
  digit: {
    fontSize: 60,
    fontWeight: '800',
    letterSpacing: -2,
  },
  percent: {
    fontWeight: '700',
    fontSize: 24,
  },
  off: {
    fontSize: 18,
    fontWeight: '700',
  },
  shopNowView: {
    backgroundColor: 'black',
    width: 90,
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  shopNowText: {
    color: 'white',
  },
  left: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // borderColor: 'black',
    // borderWidth: 2,
    height: '100%',
    gap: 5,
    width: '60%',
  },
});
