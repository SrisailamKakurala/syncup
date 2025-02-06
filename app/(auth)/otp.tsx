import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import LottieView from 'lottie-react-native';
import tw from 'twrnc';

const OtpScreen = () => {
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    // Mock OTP verification (Replace with Firebase logic)
    console.log(`Verifying OTP: ${otp}`);
    router.replace('/(tabs)'); // Navigate to main app
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 justify-center items-center px-6`}>
        
        {/* Lottie Animation */}
        <View style={tw`w-48 h-48`}>
          <LottieView source={require('@/assets/animations/paper_rocket.json')} autoPlay loop />
        </View>

        {/* Title & Description */}
        <Text style={tw`text-3xl font-bold text-gray-900 mt-4`}>Enter OTP</Text>
        <Text style={tw`text-gray-500 text-center mt-2`}>We have sent an OTP to your phone. Please enter it below.</Text>

        {/* OTP Input */}
        <TextInput
          style={tw`border border-gray-300 p-4 text-xl tracking-widest text-center rounded-lg w-3/4 mt-6`}
          placeholder="000000"
          keyboardType="number-pad"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
        />

        {/* Verify Button */}
        <TouchableOpacity
          onPress={handleVerifyOTP}
          style={[
            tw`mt-6 px-6 py-3 rounded-lg w-3/4`,
            otp.length === 6 ? tw`bg-black` : tw`bg-gray-400 opacity-50`
          ]}
          disabled={otp.length !== 6}
        >
          <Text style={tw`text-white text-lg text-center font-semibold`}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;
