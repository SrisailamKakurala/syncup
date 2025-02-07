import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState, useRef } from 'react';
import { router } from 'expo-router';
import LottieView from 'lottie-react-native';
import tw from 'twrnc';
import { TextInput as RNTextInput } from 'react-native';
import LottieAnimation from '@/components/LottieAnimation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OtpScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputsRef = [
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
    useRef<RNTextInput>(null),
  ];

  const handleChangeText = (text: string, index: number) => {
    if (!/^\d*$/.test(text)) return;

    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputsRef[index + 1]?.current?.focus();
    }
  };

  const handleBackspace = (index: number) => {
    if (index > 0 && !otp[index]) {
      inputsRef[index - 1]?.current?.focus();
    }
  };

  const handleVerifyOTP = async () => {
    const enteredOTP = otp.join('');
    console.log(`Verifying OTP: ${enteredOTP}`);
  
    if (enteredOTP.length === 4) {
      try {
        await AsyncStorage.setItem('user', 'valid_token'); // Set correct key
        router.replace('/(tabs)'); // Navigate to the main app
      } catch (error) {
        console.error('Error saving auth state:', error);
      }
    }
  };
  
  

  return (
    <View style={tw`flex-1 bg-white`}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={tw`flex-1`}
      >
        <View style={tw`flex-1 px-6`}>
          {/* Content Container */}
          <View style={tw`flex-1 justify-center items-center`}>
            {/* Title & Description */}
            <Text style={tw`text-3xl font-bold text-gray-900 mt-4`}>Enter OTP</Text>
            <Text style={tw`text-gray-500 text-center mt-2`}>
              We have sent an OTP to your phone. Please enter it below.
            </Text>

            {/* OTP Input Fields */}
            <View style={tw`flex-row mt-6`}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={inputsRef[index]}
                  style={tw`border border-gray-300 p-4 text-2xl text-center rounded-lg w-14 mx-2`}
                  placeholder="•"
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onChangeText={(text) => handleChangeText(text, index)}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === 'Backspace') handleBackspace(index);
                  }}
                />
              ))}
            </View>

            {/* Verify Button */}
            <TouchableOpacity
              onPress={handleVerifyOTP}
              style={[
                tw`mt-6 px-6 py-3 rounded-lg w-3/4`,
                otp.join('').length === 4 ? tw`bg-[#00aeef]` : tw`bg-gray-400 opacity-50`,
              ]}
              disabled={otp.join('').length !== 4}
            >
              <Text style={tw`text-white text-lg text-center font-semibold`}>Verify OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      {/* Lottie Animation at bottom */}
      <View style={tw`flex-1 -bottom-8 left-0 right-0`}>
        <LottieAnimation classnames='-mb-10' source={require('@/assets/animations/beach.json')} />
      </View>
    </View>
  );
};

export default OtpScreen;