import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { styles } from "@/assets/styles/backScreenStyle";
import popularAnimeData from "@/assets/data/popularAnime.json";
import { LinearGradient } from "expo-linear-gradient";
type RootStackParamList = {
  ImageDetailScreen: {
    id: string;
  };
};

type ImageDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "ImageDetailScreen"
>;

type AnimeDataType = {
  name: string;
  madeDate: number;
  episode: number;
  img: string;
  category: string;
  backImage: string;
};
type TrendingAnimeData = {
  data: {
    id: string;
    type: string;
    attributes: {
      canonicalTitle: string;
      startDate: string;
      episodeCount?: number;
      posterImage?: {
        medium: string;
      };
    };
  }[];
};
const ImageDetailScreen = () => {
  const route = useRoute<ImageDetailScreenRouteProp>();
  const { id } = route.params;
  const [data, setData] = useState<AnimeDataType | null>(null);
  const [trendingAnime, setTrendingAnime] = useState<TrendingAnimeData["data"]>(
    []
  );
  const handleAnimeData = () => {
    fetch("https://kitsu.io/api/edge/trending/anime")
      .then((res) => res.json())
      .then((data) => setTrendingAnime(data.data))
      .catch((error) => console.log(error));
    console.log(trendingAnime, "sss");
  };
  console.log(trendingAnime, "lll");
  useEffect(() => {
    handleAnimeData();
  }, []);

  return (
    <View style={styles.bodyContainer}>
      {data ? (
        <>
          <Image
            style={styles.image}
            source={{
              uri: `/assets/?unstable_path=.%2Fassets%2Fimages/${data.backImage}`,
            }}
          />
          <LinearGradient
            colors={["#040B1C", "transparent"]}
            style={styles.fixedElement}
          ></LinearGradient>
          {/* <View style={styles.fixedElement}></View> */}
          <View style={styles.textHeader}>
            <Text>
              <Text></Text>
              <Text></Text>
            </Text>
            <View></View>
          </View>
        </>
      ) : (
        <Text style={styles.text}>Loading...</Text>
      )}
    </View>
  );
};

export default ImageDetailScreen;
