import { Slot, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';


const RootLayout = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // TODO: Replace with Firebase authentication check
    const checkAuth = async () => {
      const user = false; // Replace with Firebase logic
      if (user) {
        setIsAuthenticated(true);
        router.replace('/(tabs)');
      } else {
        router.replace('/(auth)/phone');
      }
    };

    checkAuth();
  }, []);

  return <Slot />;
};

export default RootLayout;
