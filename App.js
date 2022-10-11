import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import
MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import home from './src/home';
import friends from './src/friends';
import settings from './src/settings';
import addFriend from './src/addFriend';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="home"
        component={home}
        options={{ title: 'Home Page' }} />
      <Stack.Screen
        name="friends"
        component={friends}
        options={{ title: 'Details Page' }} />
      <Stack.Screen
        name="settings"
        component={settings}
        options={{ title: 'settings' }} />
      <Stack.Screen
        name="addFriend"
        component={addFriend}
      />
    </Stack.Navigator>
  );
}

function FriendsStack() {
  return (
    <Stack.Navigator
      initialRouteName="friends"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="friends"
        component={friends}
        options={{ title: 'friends' }} />
      <Stack.Screen
        name="settings"
        component={settings}
        options={{ title: 'settings' }} />
      <Stack.Screen
        name="addFriend"
        component={addFriend}
        options={{ title: 'addFriend' }} />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }} />
        <Tab.Screen
          name="FriendsStack"
          component={FriendsStack}
          options={{
            tabBarLabel: 'friends',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }} />
        <Tab.Screen
          name="settings"
          component={settings}
          options={{
            tabBarLabel: 'settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
