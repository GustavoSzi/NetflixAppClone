import { View, TextInput } from "react-native";
import React from "react";
import styles from "./styles";

export default function LoginInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        {...props}
        autoCorrect={false}
        autoCapitalize='none'
        placeholderTextColor='#828282'
      />
    </View>
  );
}
