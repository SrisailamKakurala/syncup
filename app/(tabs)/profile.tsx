import { View, Text, TouchableOpacity } from "react-native";
import usePhoneAuth from "@/hooks/usePhoneAuth";
import tw from "twrnc";

const ProfileScreen = () => {
  const { logout } = usePhoneAuth();

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-2xl`}>Profile</Text>
      <TouchableOpacity onPress={logout} style={tw`mt-4 px-6 py-3 bg-red-500 rounded-lg`}>
        <Text style={tw`text-white text-lg text-center font-semibold`}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
