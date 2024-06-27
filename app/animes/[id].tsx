import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import { Triangle } from "../components/triangle";
import Video, { VideoRef, OnBufferData } from "react-native-video";
import YoutubePlayer from "react-native-youtube-iframe";
// import { OnBufferData } from "react-native-video";
type TrendingAnimeData = {
  data: {
    id: string;
    type: string;
    attributes: {
      canonicalTitle: string;
      startDate: string;
      episodeCount?: number;
      description?: string;
      youtubeVideoId: string;
      posterImage?: {
        original: string;
      };
      coverImage?: {
        medium: string;
      };
    };
  }[];
};

const DetailsScreen = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<VideoRef>(null);
  // const background = require("./background.mp4");
  const { id } = useLocalSearchParams();
  const [animeDetails, setAnimeDetails] = useState<
    TrendingAnimeData["data"][0] | null
  >(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [date, setDate] = useState<String>("");
  const [isClickYoutubeButton, setIsClickYoutubeButton] =
    useState<boolean>(false);
  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: { data: TrendingAnimeData["data"][0] } =
          await response.json();
        setAnimeDetails(data.data);
        console.log("daaa", data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch anime details");
        setLoading(false);
      }
    };
    fetchAnimeDetails();
  }, [id]);
  const handleVideo = () => {
    setIsClickYoutubeButton(!isClickYoutubeButton);
    setPlaying(!playing);
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!animeDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Anime details not found</Text>
      </View>
    );
  }
  // const onStateChange = useCallback((state) => {
  //   if (state === "ended") {
  //     setPlaying(false);
  //   }
  // }, []);

  return (
    <View style={styles.container}>
      {isClickYoutubeButton ? (
        <YoutubePlayer
          height={750}
          width={400}
          play={playing}
          videoId={animeDetails?.attributes?.youtubeVideoId}
          onChangeState={(state) => {
            console.log(state);
            if (state === "ended") {
              setPlaying(false);
            }
          }}
        />
      ) : (
        <Image
          style={styles.posterImage}
          source={{ uri: animeDetails.attributes.posterImage?.original }}
          resizeMode="cover"
        />
      )}

      <LinearGradient
        colors={["transparent", "#040B1C", "#040B1C", "#040B1C"]}
        style={styles.textContainer}
      >
        <View style={{ width: 320, height: 85 }}>
          <Text style={styles.title}>
            {animeDetails.attributes.canonicalTitle}
          </Text>
          <View style={styles.textParents}>
            <Text style={styles.text}>
              Start Date: {animeDetails.attributes.startDate}
            </Text>
            <FontAwesome5 name="star" size={16} color="yellow" />
          </View>
          <Text style={{ color: "white", fontWeight: "500", fontSize: 10 }}>
            {animeDetails.attributes.description}
          </Text>
          <Pressable onPress={() => handleVideo()} style={styles.playButton}>
            <Triangle />
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  triangleRight: {
    transform: [{ rotate: "90deg" }],
  },
  container: {
    flexDirection: "column",
    alignItems: "center",

    //backgroundColor: "#040B1C",
  },
  loadingContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "white",
  },
  posterImage: {
    width: 400,
    height: 750,
    // marginBottom: 20,
    //position: "absolute",
  },
  textContainer: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: 400,
    height: 300,
    zIndex: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "white",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  textParents: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  playButton: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -20,
    top: -20,
    borderRadius: 100,
  },
  triangle: {
    height: 20,
    width: 20,
    backgroundColor: "white",
  },
});

export default DetailsScreen;
