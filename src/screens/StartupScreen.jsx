import { StyleSheet, Image, View } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

import * as AuthActions from "../store/actions/auth";

import BigLogo from "../../assets/images/logo-netflix.png";

export default function StartupScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    async function tryLogin() {
      const userData = await AsyncStorage.getItem("userData");
      const data = JSON.parse(userData);

      if (!data) {
        dispatch(AuthActions.triedLogin());
        return;
      }

      const { token, userId, expirationDate } = data;
      const date = new Date(expirationDate);

      if (token) {
        dispatch(AuthActions.authenticate(userId, token));
      } else {
        dispatch(AuthActions.logout());
      }
    }

    tryLogin();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={BigLogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
