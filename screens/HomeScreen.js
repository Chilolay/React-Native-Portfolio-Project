import FeaturedCards from "../components/featured/FeaturedCards";
import { SafeAreaView } from "react-native-safe-area-context";
import { FEATURED } from "../shared/featured";
import CategoryDropdown from "../components/CategoryDropdown";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <CategoryDropdown />
      <FeaturedCards games={FEATURED} />
    </SafeAreaView>
  );
};

export default HomeScreen;
