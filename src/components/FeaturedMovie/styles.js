import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/constants";

const styles = StyleSheet.create({
  imageContainer: {
    width: Dimensions.get("window").width,
    alignSelf: "flex-start",
  },
  image: {
    width: "100%",
    height: 360,
    alignItems: "flex-end",
  },
  linear: {
    height: 260,
    position: "absolute",
    bottom: 0,
    top: 100,
    left: 0,
    right: 0,
  },
  title: {
    fontFamily: "SFPRO",
    width: "100%",
    color: "#fff",
    fontSize: 24,
    position: "absolute",
    bottom: 10,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 12,
  },
  listBtn: {
    color: "#fff",
    fontFamily: "SFPRO",
    fontSize: 12,
    marginTop: 5,
  },
  playBtnText: {
    color: "#fff",
    marginLeft: 5,
    fontFamily: "SFPRO",
    fontSize: 16,
  },
  infoBtn: {
    color: "#fff",
    fontFamily: "SFPRO",
    fontSize: 12,
    marginTop: 5,
  },
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  playBtn: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    width: 118,
    borderRadius: 8,
    paddingVertical: 14,
  },
});

export default styles;
