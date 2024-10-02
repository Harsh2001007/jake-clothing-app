import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../contexts/userContext';

export default function ProfileScreen() {
  const {user} = useContext(UserContext);
  return (
    <SafeAreaView>
      <Text>First Name: {user.firstName}</Text>
      <Text>Last Name: {user.lastName}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone Number: {user.phoneNumber}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
