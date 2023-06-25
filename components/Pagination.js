import { useState } from "react";
import { SafeAreaView, View, Button, StyleSheet, Text } from "react-native";
import PaginationDot from "react-native-animated-pagination-dot";

const Pagination = () => {
  const [page, setPage] = useState(0);
  const color = "#2189DC";
  const sizeRatio = 1.0;
  const maxPage = 5;
  const inactiveColor = "grey";

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: "grey",
        marginBottom: 10,
      }}
    >
      {/* <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 12,
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
            marginRight: 12,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "400", color: "black" }}>
            sizeRatio
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "grey" }}>
            {sizeRatio}
          </Text>
        </View>
      </View> */}

      <View
        style={{
          flex: 2,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Button
          title="Prev"
          onPress={() => {
            setPage(page - 1);
          }}
        />

        <PaginationDot
          activeDotColor={color}
          curPage={page}
          inactiveDotColor={inactiveColor ?? undefined}
          maxPage={maxPage}
          sizeRatio={sizeRatio}
        />

        <Button
          title="Next"
          onPress={() => {
            setPage(page + 1);
          }}
        />
      </View>
    </SafeAreaView>
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
