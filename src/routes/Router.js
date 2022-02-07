import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import StackNav from "./routes";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

export default function Router() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
