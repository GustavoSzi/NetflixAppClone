import { TouchableWithoutFeedback, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../utils/constants";

export default function MyListHeader() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("navigated");
      }}
    >
      <Text style={styles.text}>Minha lista</Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.secondary,
  },
});
