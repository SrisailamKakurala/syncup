import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootLayout = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      try {
        const user = await AsyncStorage.getItem('user'); // Ensure key matches `handleVerifyOTP`
        const route = user ? '/(tabs)' : '/(auth)/phone';

        if (isMounted) {
          setInitialRoute(route);
          setTimeout(() => { // Delay navigation slightly
            router.replace(route);
          }, 100); // Small delay to ensure rendering before navigation
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!initialRoute) {
    return <View style={{ flex: 1, backgroundColor: '#fff' }} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen 
        name="(tabs)" 
        options={{
          gestureEnabled: false,
          animation: 'fade',
        }}
      />
    </Stack>
  );
};

export default RootLayout;
