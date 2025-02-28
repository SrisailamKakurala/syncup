// app/_layout.tsx
import { Slot, Stack, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

// Wrap the root layout content in its own component so we can use hooks
function RootLayoutContent() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    console.log('RootLayout useEffect triggered, isAuth:', isAuthenticated);
    if (!isAuthenticated) {
      router.replace('/(auth)/phone');
      console.log('Auth state changed to:', false);
    } else {
      router.replace('/(tabs)');
      console.log('Auth state changed to:', true);
    }
  }, [isAuthenticated]);

  return (
    <Slot />
  );
}

// Root layout component that provides the auth context
export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutContent />
    </AuthProvider>
  );
}