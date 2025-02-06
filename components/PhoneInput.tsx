import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import from the new package
import tw from 'twrnc';

// Simulated data for countries (In a real project, you should use a library or API to fetch this data)
const countries = [
  { name: 'United States', code: 'US', flag: '🇺🇸', phoneCode: '+1', minLength: 10, maxLength: 15 },
  { name: 'India', code: 'IN', flag: '🇮🇳', phoneCode: '+91', minLength: 10, maxLength: 15 },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', phoneCode: '+44', minLength: 10, maxLength: 15 },
  { name: 'Australia', code: 'AU', flag: '🇦🇺', phoneCode: '+61', minLength: 9, maxLength: 15 },
  // Add more countries as needed
];

const CustomPhoneInput = ({ phone, setPhone }: { phone: string; setPhone: (phone: string) => void }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState(phone);

  useEffect(() => {
    setPhoneNumber(phone); // Sync phone prop to input field
  }, [phone]);

  const handlePhoneNumberChange = (text: string) => {
    const cleanedText = text.replace(/[^\d+]/g, ''); // Only keep digits and plus sign
    setPhoneNumber(cleanedText);
    setPhone(cleanedText);
  };

  const validatePhoneNumber = (number: string) => {
    const cleanedNumber = number.replace(/[^\d+]/g, ''); // Clean input

    // Check the country-specific length validation
    const isValidLength =
      cleanedNumber.length >= selectedCountry.minLength && cleanedNumber.length <= selectedCountry.maxLength;
    return isValidLength;
  };

  const isValidPhoneNumber = validatePhoneNumber(phoneNumber);

  return (
    <View style={tw`w-full flex-col justify-center items-center px-6`}>

      {/* Country and Phone Number Input */}
      <View style={tw`flex-row items-center mb-4 w-full`}>        
        {/* Flag and Country Picker */}
        <View style={tw`flex-row items-center mr-4`}>
          <Text style={tw`text-xl`}>{selectedCountry.flag}</Text>
          <Picker
            selectedValue={selectedCountry.code}
            style={tw`h-12 w-24 ml-2`}
            onValueChange={(itemValue: string) => { // Explicitly type the itemValue as a string
              const country = countries.find((c) => c.code === itemValue);
              if (country) setSelectedCountry(country);
            }}
          >
            {countries.map((country) => (
              <Picker.Item key={country.code} label={`${country.flag} ${country.name}`} value={country.code} />
            ))}
          </Picker>
        </View>

        {/* Phone Number Input */}
        <TextInput
          style={[
            tw`flex-1 px-4 py-3 text-xl border border-gray-300 rounded-lg`,
            !isValidPhoneNumber && tw`border-red-500`, // Show red border for invalid phone numbers
          ]}
          placeholder={`${selectedCountry.phoneCode} 123 456 7890`}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
      </View>

      {/* Error Message */}
      {!isValidPhoneNumber && phoneNumber.length > 0 && (
        <Text style={tw`text-red-500 mt-2`}>Invalid phone number length for {selectedCountry.name}</Text>
      )}
    </View>
  );
};

export default CustomPhoneInput;
