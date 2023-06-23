import { View, StyleSheet, ScrollView } from "react-native";
import NavHeader from "../components/NavHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./HomeScreen";

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
      <View>
        <NavHeader />
        <HomeScreen />
      </View>
    </SafeAreaProvider>
  );
};

export default Main;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
