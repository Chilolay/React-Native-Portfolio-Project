import FeaturedCards from "../components/featured/FeaturedCards";
import { SafeAreaView } from "react-native-safe-area-context";
import { FEATURED } from "../shared/featured";
import Pagination from "../components/Pagination";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <FeaturedCards games={FEATURED} />
      <Pagination />
    </SafeAreaView>
  );
};

export default HomeScreen;
