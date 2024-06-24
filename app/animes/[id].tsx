import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import { Triangle } from "../components/triangle";
type TrendingAnimeData = {
  data: {
    id: string;
    type: string;
    attributes: {
      canonicalTitle: string;
      startDate: string;
      episodeCount?: number;
      description?: string;
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
  const { id } = useLocalSearchParams();
  const [animeDetails, setAnimeDetails] = useState<
    TrendingAnimeData["data"][0] | null
  >(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  return (
    <View style={styles.container}>
      <Image
        style={styles.posterImage}
        source={{ uri: animeDetails.attributes.posterImage?.original }}
        resizeMode="cover"
      />
      <LinearGradient
        colors={[
          "transparent",
          "#040B1C",
          "#040B1C",
          "#040B1C",
          "#040B1C",
          "#040B1C",
          "#040B1C",
          "#040B1C",
        ]}
        style={styles.textContainer}
      >
        <View style={{ width: 320, height: 73 }}>
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
          <View style={styles.playButton}>
            <Triangle />
          </View>
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
    flex: 1,
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
    height: 450,
    marginBottom: 20,
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
    right: 0,
    borderRadius: 100,
  },
  triangle: {
    height: 20,
    width: 20,
    backgroundColor: "white",
  },
});

export default DetailsScreen;
