import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Importing the phone input style
import tw from 'twrnc';

const CustomPhoneInput = ({ phone, setPhone }: { phone: string; setPhone: (phone: string) => void }) => {
  const handleChange = (value: string | undefined) => {
    if (value !== undefined) {
      setPhone(value); // Update phone state when valid value is present
    } else {
      setPhone(''); // Handle case where value is undefined
    }
  };

  return (
    <PhoneInput
      international
      defaultCountry="US" // You can change this to a default country
      value={phone}
      onChange={handleChange}
      className="phone-input"
      style={{
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        fontSize: 16,
        borderRadius: 10,
        width: '75%',
        marginTop: 20,
      }}
    />
  );
};

export default CustomPhoneInput;
