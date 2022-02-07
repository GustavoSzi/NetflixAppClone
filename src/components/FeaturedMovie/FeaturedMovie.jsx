import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import styles from "./styles";
import * as Auth from "../../store/actions/auth";
import * as ApiFetch from "../../store/actions/movies";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function FeaturedMovie() {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = React.useState(false);

  const featuredMovie = useSelector((state) => {
    return state.movie.trending;
  });

  React.useEffect(() => {
    dispatch(ApiFetch.fetchFeatured());
  }, []);
  let imageURI;

  if (!featuredMovie) return null;
  imageURI = {
    uri: `https://image.tmdb.org/t/p/w500${featuredMovie.poster_path}`,
  };
  return (
    <View>
      <View style={styles.imageContainer}>
        <ImageBackground source={imageURI} style={styles.image}>
          <LinearGradient
            colors={["transparent", "black"]}
            style={styles.linear}
          >
            <Text style={styles.title}>{featuredMovie.title}</Text>
          </LinearGradient>
        </ImageBackground>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            setFavorite(!favorite);
          }}
        >
          <View style={styles.btnContainer}>
            <AntDesign
              name={favorite ? "check" : "plus"}
              size={20}
              color='white'
            />
            <Text style={styles.listBtn}>Minha Lista</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View style={{ ...styles.btnContainer, ...styles.playBtn }}>
            <Entypo name='controller-play' size={26} color='white' />
            <Text style={styles.playBtnText}>Play</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View style={styles.btnContainer}>
            <AntDesign name='infocirlceo' size={20} color='white' />
            <Text style={styles.infoBtn}>Informações</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
