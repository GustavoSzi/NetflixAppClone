import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import CatalogRow from "../CatalogRow/CatalogRow";
import { useDispatch } from "react-redux";
import {
  fetchCategoryMovies,
  fetchFeaturedMovies,
} from "../../store/actions/movies";

export default function ContentRows() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchFeaturedMovies());
    dispatch(fetchCategoryMovies());
  }, []);

  return (
    <View style={styles.catalogContainer}>
      <CatalogRow title='Filmes em alta' category='trending' />
      <CatalogRow title='Comedias' category='comedy' />
      <CatalogRow title='Ação' category='action' />
      <CatalogRow title='Aventura' category='adventure' />
    </View>
  );
}
