// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="phone" />
      <Stack.Screen name="otp" />
    </Stack>
  );
};

export default AuthLayout;