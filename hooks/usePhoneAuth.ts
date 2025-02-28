import { useState, useEffect } from "react";
import { auth, signInWithPhoneNumber, signOut, onAuthStateChanged } from "@/firebase/firebase.config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { RecaptchaVerifier } from "firebase/auth";

const usePhoneAuth = () => {
  const [confirmation, setConfirmation] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await AsyncStorage.setItem("user", JSON.stringify(user));
        router.replace("/(tabs)");
      }
    });

    return () => subscriber();
  }, []);

  const sendOTP = async (phoneNumber: string) => {
    setLoading(true);
    setError(null);
    console.log(`Sending OTP to ${phoneNumber} ===========`);
    console.log('auth: ---', auth)
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber);
      setConfirmation(confirmationResult);
      return confirmationResult;
    } catch (err: any) {
      setError(err.message || "Failed to send OTP.");
      console.error("Error sending OTP:", err);
      return null;  // ✅ Ensure `null` is returned on failure
    } finally {
      setLoading(false);
    }
  };
  
  
  

  const verifyOTP = async (otp: string) => {
    setLoading(true);
    setError(null);
    try {
      if (!confirmation) throw new Error("No OTP request found. Try again.");
      await confirmation.confirm(otp);
    } catch (err: any) {
      setError(err.message || "Invalid OTP");
    }
    setLoading(false);
  };

  const logout = async () => {
    await signOut(auth);
    await AsyncStorage.removeItem("user");
    router.replace("/(auth)/phone");
  };

  return { sendOTP, verifyOTP, confirmation, loading, error, logout };
};

export default usePhoneAuth;
