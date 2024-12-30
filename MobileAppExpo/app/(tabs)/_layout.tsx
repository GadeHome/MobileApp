import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {

  return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'white' }}>
          <Tabs.Screen
            name="chat"
            options={{
              title: 'Chat',
              tabBarIcon: ({ color }) => <FontAwesome size={26} name="comments" color={color} />,
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="library"
            options={{
              title: 'Library',
              tabBarIcon: ({ color }) => <FontAwesome size={26} name="th-list" color={color} />,
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="search"
            options={{
              title: 'Search',
              tabBarIcon: ({ color }) => <FontAwesome size={26} name="search" color={color} />,
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              tabBarIcon: ({ color }) => <FontAwesome size={26} name="user-circle-o" color={color} />,
              headerShown: false,
            }}
          />
        </Tabs>
      );
}