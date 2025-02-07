import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

const ProfileScreen = () => {
  const handleLogout = () => {
    router.replace('/(auth)/phone');
  };

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <FontAwesome name="user-circle" size={100} color="#00aeef" />
      <Text style={tw`text-2xl font-bold mt-4`}>Your Profile</Text>
      <Text style={tw`text-gray-500 mt-2`}>Manage your account settings</Text>

      <TouchableOpacity
        onPress={handleLogout}
        style={tw`mt-6 px-6 py-3 rounded-lg bg-[#00aeef]`}
      >
        <Text style={tw`text-white text-lg text-center font-semibold`}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
