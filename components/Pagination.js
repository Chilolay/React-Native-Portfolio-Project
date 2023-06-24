import { useState, useEffect } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import PaginationDot from "react-native-animated-pagination-dot";

const Pagination = ({
  color,
  sizeRatio = 1.0,
  maxPage = 10,
  inactiveColor,
}) => {
  const [page, setPage] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: "grey",
        marginBottom: 10,
      }}
    >
      <View style={{ flex: 5, flexDirection: "column" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "400", color: "black" }}>
            page
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
            {page + 1} / {maxPage}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "400", color: "black" }}>
            sizeRatio
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
            {sizeRatio}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Button
          title="Prev"
          onPress={() => {
            setPage(page - 1);
          }}
        />
        <PaginationDot activeDotColor={"black"} curPage={page} maxPage={20} />
        <Button
          title="Next"
          onPress={() => {
            setPage(page + 1);
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Pagination;
