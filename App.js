import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import authReducer from "./src/store/reducers/auth";
import movieReducer from "./src/store/reducers/movies";

/* Fonts */
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { colors } from "./src/utils/constants";
import Router from "./src/routes/Router";

const rootReducer = combineReducers({
  auth: authReducer,
  movie: movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  let [fontsLoaded] = useFonts({
    SFPRO: require("./assets/fonts/SFProText-Regular.ttf"),
    "SFPRO-Bold": require("./assets/fonts/SFPro-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <Router />
      <StatusBar style='light' />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bg,
    paddingTop: 30,
  },
});
