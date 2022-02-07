import { View, Text, TouchableHighlight, Image } from "react-native";
import React from "react";
import styles from "./styles";

export default function Cover({ item }) {
  return (
    <TouchableHighlight onPress={() => {}} style={styles.cover}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
        style={styles.image}
      />
    </TouchableHighlight>
  );
}
