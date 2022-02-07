import {
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import React from "react";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { colors } from "../../utils/constants";

import * as AuthActions from "../../store/actions/auth";
import logo from "../../../assets/images/full-logo.png";
import LoginInput from "../../components/LoginInput/LoginInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const dispatch = useDispatch();

  async function handleLoginPress() {
    setIsLoading(true);
    try {
      await dispatch(AuthActions.signup(email, senha));
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.logoImageContainer}>
          <Image source={logo} style={styles.logoImage} />
        </View>
        <View style={styles.formContainer}>
          <LoginInput
            placeholder='E-mail ou telefone'
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
          <LoginInput
            placeholder='Senha'
            onChangeText={(senha) => setSenha(senha)}
            value={senha}
            secureTextEntry
          />
          <SubmitButton onPress={handleLoginPress} />
          {/* {isLoading ? (
            <ActivityIndicator size='small' color={colors.primary} />
          ) : (
            <SubmitButton onPress={handleLoginPress} />
          )} */}
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
          <Text style={styles.forgot}>Cadastre-se</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
