// TitleDescription.tsx
import { View, Text } from 'react-native';
import tw from 'twrnc';

const TitleDescription = ({ title, description }: { title: string, description: string }) => {
  return (
    <View style={tw`my-10 z-10`}>
      <Text style={tw`text-3xl font-bold text-gray-900`}>{title}</Text>
      <Text style={tw`text-gray-500 text-center mt-2`}>{description}</Text>
    </View>
  );
};

export default TitleDescription;
