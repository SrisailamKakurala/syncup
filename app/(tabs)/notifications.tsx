import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

const NotificationsScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <FontAwesome name="bell" size={50} color="black" />
      <Text style={tw`text-2xl font-bold text-gray-900 mt-4`}>No New Notifications</Text>
      <Text style={tw`text-gray-500 text-center mt-2 px-6`}>
        You're all caught up! Check back later for updates.
      </Text>
    </View>
  );
};

export default NotificationsScreen;
