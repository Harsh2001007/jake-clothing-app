import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>JC</Text>
        <Text style={styles.logo}>cart</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Pacifico',
  },
});
