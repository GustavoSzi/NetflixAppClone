import { TouchableOpacity, Text, Keyboard } from "react-native";
import React from "react";
import styles from "./styles";

export default function SubmitButton(props) {
  return (
    <TouchableOpacity style={styles.btnContainer} {...props}>
      <Text style={styles.btnText}>Entrar</Text>
    </TouchableOpacity>
  );
}
