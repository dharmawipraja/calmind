import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import Colors from '@/constants/Colors';

// eslint-disable-next-line camelcase
export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const renderTabIcon = ({ color }: { color: string }) => (
  <MaterialCommunityIcons name="flower-tulip" size={24} color={color} />
);

function Page() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: 'Meditate',
          tabBarIcon: renderTabIcon,
        }}
      />
    </Tabs>
  );
}

export default Page;
