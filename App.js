import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Main from "./screens/MainComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </Provider>
  );
}
