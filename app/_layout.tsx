import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = false; // Replace with Firebase logic
        if (user) {
          router.replace('/(tabs)');
        } else {
          router.replace('/(auth)/phone');
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, [router]);

  // Show nothing while checking auth
  if (isLoading) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default RootLayout;