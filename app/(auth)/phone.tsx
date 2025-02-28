import { View, KeyboardAvoidingView, Platform, Text } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import tw from "twrnc";
import usePhoneAuth from "@/hooks/usePhoneAuth";
import TitleDescription from "@/components/TitleDescription";
import PhoneInput from "@/components/PhoneInput";
import SendOTPButton from "@/components/SendOTPButton";
import LottieAnimation from "@/components/LottieAnimation";

const PhoneScreen = () => {
  const { sendOTP, confirmation, loading, error } = usePhoneAuth();
  const [phone, setPhone] = useState("");

  const handleSendOTP = async () => {
    const formattedPhone = `+91${phone.trim()}`;
  
    if (!/^\+91\d{10}$/.test(formattedPhone)) {  // ✅ Ensure correct phone number format
      console.log("Invalid phone number. Please enter a 10-digit number.");
      return;
    }
  
    try {
      console.log(`Sending OTP to ${formattedPhone}`);
      const confirmationResult = await sendOTP(formattedPhone);
  
      if (confirmationResult) {
        router.push({
          pathname: "/(auth)/otp",
          params: { verificationId: confirmationResult.verificationId },
        });
      } else {
        console.error("Error: confirmationResult is null");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };
  
  
  

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 justify-between items-center px-2`}>
        <TitleDescription title="Enter Your Phone" description="We'll send an OTP to verify your number." />
        <PhoneInput phone={phone} setPhone={setPhone} />
        <SendOTPButton phone={phone} handleSendOTP={handleSendOTP} loading={loading} />
        <LottieAnimation classnames="-mb-15 z-0" source={require("@/assets/animations/paper_rocket.json")} />
      </View>
      {error && <Text style={tw`text-red-500 mt-2 text-center`}>{error}</Text>}
    </KeyboardAvoidingView>
  );
};

export default PhoneScreen;
