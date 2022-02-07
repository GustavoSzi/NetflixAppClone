import { View, StyleSheet, Image } from "react-native";
import React from "react";
import menuLogo from "../../../assets/images/menu-logo.png";

export default function HeaderLogo() {
  return (
    <View>
      <Image source={menuLogo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 33,
    height: 60,
  },
});
