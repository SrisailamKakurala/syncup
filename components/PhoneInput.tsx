import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import tw from 'twrnc';

const CustomPhoneInput = ({ phone, setPhone }: { phone: string; setPhone: (phone: string) => void }) => {
  const [mobileNumber, setMobileNumber] = useState(phone);

  const handleMobileNumberChange = (text: string) => {
    const numericText = text.replace(/[^\d]/g, '');
    setMobileNumber(numericText);
    setPhone(numericText);
  };

  return (
    <View style={tw`flex-row gap-2 px-6 z-10`}>
      <View style={tw`bg-slate-100 rounded-lg justify-center px-3`}>
        <Text style={tw`text-lg font-semibold`}>🇮🇳 +91</Text>
      </View>

      <TextInput
        style={tw`flex-1 p-3 rounded-lg bg-slate-100 text-lg font-medium`}
        placeholder="Mobile Number"
        keyboardType="numeric"
        value={mobileNumber}
        onChangeText={handleMobileNumberChange}
        maxLength={10}
      />
    </View>
  );
};

export default CustomPhoneInput;