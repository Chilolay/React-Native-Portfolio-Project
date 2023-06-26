import SelectDropdown from "react-native-select-dropdown";
import { View, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CATEGORYLIST from "../shared/categoryList";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../features/categorySlice";
import { useNavigation } from "@react-navigation/native";

const CategoryDropdown = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={{ alignItems: "center", paddingVertical: "5%" }}>
      <SelectDropdown
        data={CATEGORYLIST}
        defaultValue={"Card Game"}
        onSelect={(selectedItem, index) => {
          dispatch(setCurrent(selectedItem));
          navigation.navigate("CategorySearch");
        }}
        defaultButtonText={"Search Games by Category"}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.name;
        }}
        rowTextForSelection={(item, index) => {
          return item.name;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <FontAwesome
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#444"}
              size={18}
            />
          );
        }}
        dropdownIconPosition={"right"}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: {
    margin: 3,
  },
  dropdown1DropdownStyle: {
    backgroundColor: "#EFEFEF",
  },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: {
    color: "black",
    textAlign: "left",
  },
});

export default CategoryDropdown;
