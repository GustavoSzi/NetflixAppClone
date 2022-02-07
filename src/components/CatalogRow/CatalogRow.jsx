import { View, FlatList, Text } from "react-native";
import React from "react";
import styles from "./styles";
import {
  fetchCategoryMovies,
  fetchFeaturedMovies,
} from "../../store/actions/movies";

import Cover from "./Cover/Cover";
import { useSelector, useDispatch } from "react-redux";

export default function CatalogRow(props) {
  let trendingMovies = useSelector((state) => {
    switch (props.category) {
      case "comedy":
        return state.movie.comedyMovies;
        break;
      case "action":
        return state.movie.actionMovies;
        break;
      case "adventure":
        return state.movie.adventureMovies;
        break;
      case "trending":
        return state.movie.trendingMovies;
      default:
        return;
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.rowTitle}>{props.title}</Text>
      <FlatList
        data={trendingMovies}
        renderItem={Cover}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
}
