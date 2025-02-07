import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

const trips = [
  {
    id: '1',
    title: 'Goa Beach Vacation',
    date: 'March 15 - March 20',
    image: 'https://images.unsplash.com/photo-1738830656378-c8f96e01ec50?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    title: 'Himalayan Trek',
    date: 'April 5 - April 12',
    image: 'https://images.unsplash.com/photo-1738258644135-29aa538dfa6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    title: 'Dubai Adventure',
    date: 'May 10 - May 18',
    image: 'https://plus.unsplash.com/premium_photo-1738597344297-9eae6f6ebac3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const HomeScreen = () => {
  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-3xl font-bold text-gray-900 mb-4`}>Your Trips</Text>

      {trips.length > 0 ? (
        <FlatList
          data={trips}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.8} style={tw`mb-4 bg-gray-100 rounded-lg overflow-hidden shadow-lg`}>
              <Image source={{ uri: item.image }} style={tw`w-full h-40`} />
              <View style={tw`p-4`}>
                <Text style={tw`text-xl font-semibold text-gray-900`}>{item.title}</Text>
                <Text style={tw`text-gray-500`}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={tw`flex-1 justify-center items-center`}>
          <FontAwesome name="plane" size={50} color="gray" />
          <Text style={tw`text-gray-500 mt-4 text-lg`}>No trips planned yet!</Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
