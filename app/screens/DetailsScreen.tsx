import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { styles } from "@/assets/styles/backScreenStyle";
import popularAnimeData from "@/assets/data/popularAnime.json";

type RootStackParamList = {
  ImageDetailScreen: {
    name: string;
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

const ImageDetailScreen = () => {
  const route = useRoute<ImageDetailScreenRouteProp>();
  const { name } = route.params;
  const [data, setData] = useState<AnimeDataType | null>(null);

  const handleAnimeData = () => {
    const AnimeData = popularAnimeData.filter((e) => e.name === name);
    if (AnimeData.length > 0) {
      setData(AnimeData[0]);
    }
    console.log(AnimeData, "skkkj");
  };

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
          <Text style={styles.text}>Name: {data.name}</Text>
          <Text style={styles.text}>Made Date: {data.madeDate}</Text>
          <Text style={styles.text}>Episodes: {data.episode}</Text>
          <Text style={styles.text}>Category: {data.category}</Text>
        </>
      ) : (
        <Text style={styles.text}>Loading...</Text>
      )}
    </View>
  );
};

export default ImageDetailScreen;
