import { View } from "react-native";
import FeaturedCards from "../components/featured/FeaturedCards";
import { FEATURED } from "../shared/featured";

const HomeScreen = () => {
  return (
    <View>
      <FeaturedCards games={FEATURED} />
    </View>
  );
};

export default HomeScreen;
