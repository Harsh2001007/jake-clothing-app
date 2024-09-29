import 'react-native-gesture-handler';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('bottom-screen');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/landing.webp')}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={styles.wrapper}>
          <Text style={styles.welcomeTitle}>Jake's Clothing</Text>
          <Text style={styles.welcomeDesc}>
            Elevate your wardrobe with Jake.
          </Text>
          <View>
            <TouchableOpacity style={styles.btn} onPress={handleGetStarted}>
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 30,
    gap: 10,
  },
  welcomeTitle: {
    color: 'white',
    fontSize: 34,
    fontWeight: '600',
    letterSpacing: 1.5,
    textAlign: 'center',
    fontFamily: 'Pacifico',
  },
  welcomeDesc: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1.2,
    lineHeight: 22,
    textAlign: 'center',
    color: 'white',
  },
  btn: {
    backgroundColor: '#FF4C4C',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 15,
    marginVertical: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
