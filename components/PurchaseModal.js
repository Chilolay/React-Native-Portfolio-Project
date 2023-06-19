import { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const PurchaseModal = () => {
  return (
    <View>
      <Modal>
        <ScrollView>
          <View>
            <Text></Text>
            <Pressable></Pressable>
            <Image></Image>
            <Text></Text>
          </View>
          <Button />
        </ScrollView>
      </Modal>
    </View>
  );
};

export default PurchaseModal;
