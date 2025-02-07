// LottieAnimation.tsx
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import tw from 'twrnc';

const LottieAnimation = ({ source }: { source: any }) => {
  return (
    <View style={tw`justify-end w-full`}>
      <LottieView
        style={tw`w-[100%] z-1 h-7/5 -mb-12`}
        source={source}
        autoPlay
        loop
      />
    </View>
  );
};

export default LottieAnimation;
