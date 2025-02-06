// LottieAnimation.tsx
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import tw from 'twrnc';

const LottieAnimation = ({ source }: { source: any }) => {
  return (
    <View style={tw`flex-1 justify-end w-full`}>
      <LottieView
        style={tw`w-[100%] h-4/5`}
        source={source}
        autoPlay
        loop
      />
    </View>
  );
};

export default LottieAnimation;
