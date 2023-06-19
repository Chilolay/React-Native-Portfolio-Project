import { View, Text, StyleSheet } from "react-native";
import RenderFeaturedCards from "../components/featured/RenderFeaturedCards";
import NavHeader from "../components/NavHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Main = () => {
  //   const [isLoading, setLoading] = useState(true);
  //   const [data, setData] = useState([]);

  //   const getGames = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.boardgameatlas.com/api/search?name=Catan&client_id=f08QuEXBtp`
  //       ).then((response) => {
  //         console.log(response);
  //         return response.json();
  //       });
  //       setData(response);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     getGames();
  //   }, []);
  //   console.log(data);
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavHeader />
        <RenderFeaturedCards />
      </View>
    </SafeAreaProvider>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
