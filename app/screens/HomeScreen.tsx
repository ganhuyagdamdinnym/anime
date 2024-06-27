import { MovieArray } from "@/assets/data/arrays";
import { styles } from "@/assets/styles/homeStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { AsyncStorage } from "react-native";

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
      coverImage?: {
        original: string;
      };
    };
  }[];
};

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [trendingAnime, setTrendingAnime] = useState<TrendingAnimeData["data"]>(
    []
  );
  const [error, setError] = useState(null);
  const [clickCat, setClickCat] = useState<String>("");

  const handleCategory = (catName: string) => {
    setClickCat(catName);
    fetch(`https://kitsu.io/api/edge/anime?filter[categories]=${catName}`)
      .then((res) => res.json())
      .then((data) => setTrendingAnime(data.data))
      .catch((error) => setError(error));
    // alert(catName);
  };
  useEffect(() => {
    const token = AsyncStorage.getItem("token");
    if (!token) {
      router.replace("/login");
    }
  }, []);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/trending/anime")
      .then((res) => res.json())
      .then((data) => setTrendingAnime(data.data))
      .catch((error) => setError(error));
  }, []);
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.parentsSearchAndTitle}>
        <Text style={styles.titleContainer}>Choose genre</Text>
      </View>
      <View style={styles.cateParents}>
        {MovieArray.map((item, index) => {
          if (item.cate == clickCat) {
            return (
              <Text
                key={index}
                style={styles.clickCat}
                onPress={() => handleCategory(item.cate)}
              >
                {item.cate}
              </Text>
            );
          }
          return (
            <Text
              key={index}
              style={styles.category}
              onPress={() => handleCategory(item.cate)}
            >
              {item.cate}
            </Text>
          );
        })}
      </View>
      <View style={styles.popularAnime}>
        <Text style={styles.popularText}>Trending</Text>
        <ScrollView style={styles.popularAnimeMap} horizontal={true}>
          {trendingAnime.map((item, index) => {
            const imageUrl = item?.attributes?.coverImage?.original;
            return (
              <Link
                href={`animes/${item.id}`}
                key={index}
                style={styles.popularAnimeParents}
              >
                <View
                  style={styles.popularAnimeParents}
                  // onPress={() =>
                  //   navigation.navigate("ImageDetailScreen", {
                  //     id: item.id,
                  //   })
                  // }
                >
                  <Image
                    style={styles.popularAnimeImage}
                    source={{ uri: imageUrl }}
                  />
                  <View style={styles.animeNameParents}>
                    <Text style={styles.animeName}>
                      {item.attributes.canonicalTitle}
                    </Text>
                    <Text style={styles.animaEpisode}>
                      {item.attributes.startDate} |{" "}
                      {item.attributes.episodeCount || "N/A"} Episodes
                    </Text>
                  </View>
                </View>
              </Link>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.forYouAnime}>
        <Text style={styles.popularText}>For you</Text>
        <ScrollView style={styles.popularAnimeMap} horizontal={true}>
          {trendingAnime.map((item, index) => {
            const imageUrl = item?.attributes?.coverImage?.original;
            return (
              <Link
                href={`animes/${item.id}`}
                key={index}
                style={styles.popularAnimeParents}
              >
                <View
                  style={styles.popularAnimeParents}
                  // onPress={() =>
                  //   navigation.navigate("ImageDetailScreen", {
                  //     id: item.id,
                  //   })
                  // }
                >
                  <Image
                    style={styles.popularAnimeImage}
                    source={{ uri: imageUrl }}
                  />
                  <View style={styles.animeNameParents}>
                    <Text style={styles.animeName}>
                      {item.attributes.canonicalTitle}
                    </Text>
                    <Text style={styles.animaEpisode}>
                      {item.attributes.startDate} |{" "}
                      {item.attributes.episodeCount || "N/A"} Episodes
                    </Text>
                  </View>
                </View>
              </Link>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
