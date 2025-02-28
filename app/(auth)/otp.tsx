import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";
import tw from "twrnc";
import usePhoneAuth from "@/hooks/usePhoneAuth";
import { useLocalSearchParams } from "expo-router";

const OtpScreen = () => {
  const { verifyOTP, loading, error } = usePhoneAuth();
  const { verificationId } = useLocalSearchParams<{ verificationId: string }>();

  const [otp, setOtp] = useState(["", "", "", ""]);
  
  // ✅ Fix: Explicitly type refs as TextInput | null
  const inputsRef = [
    useRef<TextInput | null>(null),
    useRef<TextInput | null>(null),
    useRef<TextInput | null>(null),
    useRef<TextInput | null>(null),
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

  return (
    <View style={tw`flex-1 bg-white justify-center items-center`}>
      <Text style={tw`text-3xl font-bold text-gray-900`}>Enter OTP</Text>

      <View style={tw`flex-row mt-6`}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputsRef[index]}
            style={tw`border border-gray-300 p-4 text-2xl text-center rounded-lg w-14 mx-2`}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
          />
        ))}
      </View>
    </View>
  );
};

export default OtpScreen;
