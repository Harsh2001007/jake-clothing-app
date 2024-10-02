import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function SignUpScreen() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const fnameChangeHandler = text => {
    setFirstname(text);
  };
  const lnameChangeHandler = text => {
    setLastName(text);
  };
  const emailTextHandler = text => {
    setEmail(text);
  };
  const phonenumberTextHandler = text => {
    setPhoneNumber(text);
  };

  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('bottom-screen');
  };

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Text>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={{fontSize: 18, fontFamily: 'Pacifico', fontWeight: 600}}>
          Sign Up To To Enhacne Your Wardrobe.
        </Text>
      </View>
      <View style={styles.formBody}>
        <View style={styles.inputLables}>
          <Text>First Name</Text>
          <TextInput
            placeholder="Enter your first name"
            style={styles.inputField}
            onChangeText={fnameChangeHandler}
            value={firstName}
          />
        </View>
        <View style={styles.inputLables}>
          <Text>Last Name</Text>
          <TextInput
            placeholder="Enter your last name"
            style={styles.inputField}
            onChangeText={lnameChangeHandler}
            value={lastName}
          />
        </View>
        <View style={styles.inputLables}>
          <Text>Email</Text>
          <TextInput
            placeholder="Enter your Email"
            style={styles.inputField}
            onChangeText={emailTextHandler}
            value={email}
          />
        </View>
        <View style={styles.inputLables}>
          <Text>Phone Number</Text>
          <TextInput
            placeholder="Enter your phone number"
            style={styles.inputField}
            onChangeText={phonenumberTextHandler}
            value={phoneNumber}
          />
        </View>
      </View>
      <View style={styles.postFormview}>
        <TouchableOpacity style={styles.signupBtn} onPress={handleSubmit}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 600}}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  inputField: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 6,
    height: 40,
    paddingHorizontal: 10,
    marginTop: 3,
  },
  formBody: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  inputLables: {
    marginTop: 20,
  },
  postFormview: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  signupBtn: {
    backgroundColor: '#FF4C4C',
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
