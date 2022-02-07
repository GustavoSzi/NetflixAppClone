import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useSelector } from "react-redux";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import MyListScreen from "../screens/MyListScreen/MyListScreen";
import StartupScreen from "../screens/StartupScreen";

import HeaderLogo from "../components/Header/HeaderLogo";
import MyListHeader from "../components/Header/MyListHeader";
import { colors } from "../utils/constants";

function StackNav() {
  const Stack = createNativeStackNavigator();
  let isLogged = useSelector((state) => !!state.auth.isLoggedIn);
  let triedLogin = useSelector((state) => !!state.auth.triedLogin);

  if (isLogged) {
    return (
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerLeft: HeaderLogo,
          headerRight: MyListHeader,
          title: "",
          headerStyle: {
            backgroundColor: colors.bg,
          },
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='MyList' component={MyListScreen} />
      </Stack.Navigator>
    );
  } else if (!isLogged && triedLogin) {
    return <StartupScreen />;
  } else {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={LoginScreen} />
      </Stack.Navigator>
    );
  }
}

export default StackNav;
