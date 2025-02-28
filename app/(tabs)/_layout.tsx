// app/(tabs)/_layout.tsx
import { Tabs, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

const TabsLayout = () => {
  const router = useRouter();
  const theme = useColorScheme(); // Auto-detect dark/light mode

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const user = false; // Replace with Firebase logic
  //     if (!user) {
  //       router.replace('/(auth)/phone');
  //     }
  //   };
    
  //   checkAuth();
  // }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#121212' : '#fff',
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
          padding: 5,
        },
        tabBarActiveTintColor: '#00AEEF', // Sky blue active icons
        tabBarInactiveTintColor: '#888',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome name="home" size={size} color={focused ? '#00AEEF' : '#888'} />
          ),
        }}
      />
      <Tabs.Screen
        name="createTrip"
        options={{
          tabBarLabel: 'Plan Trip',
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome name="plane" size={size} color={focused ? '#00AEEF' : '#888'} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: 'Alerts',
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome name="bell" size={size} color={focused ? '#00AEEF' : '#888'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome name="user" size={size} color={focused ? '#00AEEF' : '#888'} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
