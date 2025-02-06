// PhoneScreen.tsx
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import TitleDescription from '@/components/TitleDescription';
import PhoneInput from '@/components/PhoneInput';
import SendOTPButton from '@/components/SendOTPButton';
import LottieAnimation from '@/components/LottieAnimation';
import tw from 'twrnc';

const PhoneScreen = () => {
  const [phone, setPhone] = useState('');

  const handleSendOTP = () => {
    // Mock OTP request (Replace with Firebase auth logic)
    console.log(`Sending OTP to ${phone}`);
    router.push('/(auth)/otp'); // Navigate to OTP screen
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 justify-between items-center px-2`}>
        
        {/* Title & Description */}
        <TitleDescription title="Enter Your Phone" description="We'll send an OTP to verify your number." />

        {/* Phone Input */}
        <PhoneInput phone={phone} setPhone={setPhone} />

        {/* Send OTP Button */}
        <SendOTPButton phone={phone} handleSendOTP={handleSendOTP} />

        {/* Lottie Animation */}
        <LottieAnimation source={require('@/assets/animations/paper_rocket.json')} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default PhoneScreen;
