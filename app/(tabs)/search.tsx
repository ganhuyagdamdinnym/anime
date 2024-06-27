import {
  View,
  TextInput,
  ScrollView,
  Text,
  SafeAreaView,
  Image,
} from "react-native";
import { styles } from "@/assets/styles/searchStyle";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AllAnime } from "../components/allAnime";
import React from "react";
import { Link } from "expo-router";

type AnimeInfoType = {
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
};

export default function TabTwoScreen() {
  const [text, onChangeText] = React.useState("");
  const [trendingAnime, setTrendingAnime] = useState<AnimeInfoType[]>([]);
  const [error, setError] = useState(null);

  const RemoveText = () => {
    onChangeText(" ");
  };

  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
      .then((res) => res.json())
      .then((data) => setTrendingAnime(data.data))
      .catch((error) => setError(error));
  }, [text]);
  useEffect(() => {
    fetch("https://kitsu.io/api/edge/trending/anime")
      .then((res) => res.json())
      .then((data) => setTrendingAnime(data.data))
      .catch((error) => setError(error));
  }, []);
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.SearchPart}>
        <TextInput
          placeholder="Search"
          style={styles.Textinput}
          onChangeText={onChangeText}
          value={text}
        />
        <Ionicons
          size={30}
          color={"#E45959"}
          name="close"
          options={{ headerShown: false }}
          onPress={() => RemoveText()}
        />
      </View>

      <ScrollView style={styles.bodyParents}>
        <View style={styles.scrollChild}>
          {trendingAnime &&
            trendingAnime.map((item, index) => {
              const imageUrl = item?.attributes?.coverImage?.original;
              return (
                <Link
                  href={`animes/${item.id}`}
                  key={index}
                  style={styles.popularAnimeParents}
                >
                  <View style={styles.popularAnimeParents}>
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
        </View>
      </ScrollView>
    </View>
  );
}
