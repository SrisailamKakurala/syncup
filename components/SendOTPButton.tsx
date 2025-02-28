import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import tw from "twrnc";

interface SendOTPButtonProps {
  phone: string;
  handleSendOTP: () => void;
  loading: boolean; // ✅ Fix: Ensure `loading` prop exists
}

const SendOTPButton = ({ phone, handleSendOTP, loading }: SendOTPButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handleSendOTP}
      style={[
        tw`mt-6 px-6 py-3 rounded-lg w-3/4 z-10`,
        phone.length > 9 ? tw`bg-black` : tw`bg-gray-400 opacity-50`,
      ]}
      disabled={loading || phone.length <= 9}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={tw`text-white text-lg text-center font-semibold`}>Send OTP</Text>
      )}
    </TouchableOpacity>
  );
};

export default SendOTPButton;
