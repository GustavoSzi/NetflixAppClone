import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.bg,
    paddingTop: 30,
  },
  text: {
    color: colors.secondary,
  },
  formContainer: {
    flex: 1,
    width: 320,
    justifyContent: "center",
  },
  logoImage: {
    width: 115,
    resizeMode: "contain",
  },
  forgot: {
    color: "#828282",
    fontFamily: "SFPRO",
    textAlign: "center",
    marginTop: 38,
  },
});

export default styles;
