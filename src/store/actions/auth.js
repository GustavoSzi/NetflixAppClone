import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SIGNUP = "SIGNUP";
export const AUTHENTICATE = "AUTHENTICATE";
export const TRIED_AL = "TRIED_AUTO_LOGIN";
export const LOGOUT = "LOGOUT";

export const triedLogin = () => {
  return { type: TRIED_AL };
};

export const authenticate = (userId, token) => {
  return { type: AUTHENTICATE, userId: userId, token: token };
};

export const logout = () => {
  return async (dispatch) => {
    await AsyncStorage.removeItem("userData");
    dispatch({ type: LOGOUT });
  };
};

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCgIPOM_idSsUWpL_ahh6nYMSPjFUtyU-k",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      Alert.alert(
        "Ocorreu um erro",
        "Verifique se email e senha estão corretos e tente novamente",
        [{ text: "Ok" }]
      );
    } else {
      const resData = await response.json();

      dispatch(authenticate(resData.localId, resData.idToken));

      const expirationDate = new Date(
        new Date().getTime() + Number(resData.expiresIn) * 1000
      );

      saveToStorage(resData.idToken, resData.localId, expirationDate);
    }
  };
};

const saveToStorage = (token, id, expirationDate) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      userId: id,
      expirationDate: expirationDate.toISOString(),
    })
  );
};
