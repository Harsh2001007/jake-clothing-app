import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './Welcome';
import HomeScreen from './HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import NotificationScreen from './NotificationScreen';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomBar() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home-screen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="explore-screen"
        component={ExploreScreen}
        options={{
          headerTitle: 'Explore',
        }}
      />
      <BottomTab.Screen
        name="notification-screen"
        component={NotificationScreen}
        options={{
          headerTitle: 'Notifications',
        }}
      />
      <BottomTab.Screen
        name="profile-screen"
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile',
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function AllScreenHolder() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome-screen"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="bottom-screen"
          component={BottomBar}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
