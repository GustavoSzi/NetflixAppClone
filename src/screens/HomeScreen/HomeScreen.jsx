import { ScrollView, Text, Button } from "react-native";
import React from "react";
import styles from "./styles";

import FeaturedMovie from "../../components/FeaturedMovie/FeaturedMovie";
import ContentRows from "../../components/ContentRows/ContentRows";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <FeaturedMovie navigation={navigation} />
      <ContentRows />
    </ScrollView>
  );
}
