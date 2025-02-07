// SendOTPButton.tsx
import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

const SendOTPButton = ({ phone, handleSendOTP }: { phone: string, handleSendOTP: () => void }) => {
  return (
    <TouchableOpacity
      onPress={handleSendOTP}
      style={[
        tw`mt-6 px-6 py-3 rounded-lg w-3/4 z-10`,
        phone.length > 9 ? tw`bg-black` : tw`bg-gray-400 opacity-50`,
      ]}
      disabled={phone.length <= 9}
    >
      <Text style={tw`text-white text-lg text-center font-semibold`}>Send OTP</Text>
    </TouchableOpacity>
  );
};

export default SendOTPButton;
