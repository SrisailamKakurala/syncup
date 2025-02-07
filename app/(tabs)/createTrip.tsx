import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

const CreateTripScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <FontAwesome name="plane" size={50} color="black" />
      <Text style={tw`text-2xl font-bold text-gray-900 mt-4`}>Plan a New Trip</Text>
      <Text style={tw`text-gray-500 text-center mt-2 px-6`}>
        Start organizing your next adventure by creating a trip.
      </Text>
    </View>
  );
};

export default CreateTripScreen;
