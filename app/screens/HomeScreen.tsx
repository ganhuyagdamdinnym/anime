import { MovieArray } from "@/assets/data/arrays";
import popularAnimeData from "@/assets/data/popularAnime.json";
import imageMap from "@/assets/images/imageMap";
import { styles } from "@/assets/styles/homeStyle";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";

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
        tiny: string;
      };
    };
  }[];
};

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [trendingAnime, setTrendingAnime] = useState<TrendingAnimeData["data"]>(
    []
  );
  const [error, setError] = useState(null);

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

        <Ionicons size={30} color={"white"} name="search" />
      </View>
      <View style={styles.cateParents}>
        {MovieArray.map((item, index) => (
          <Text key={index} style={styles.category}>
            {item.cate}
          </Text>
        ))}
      </View>
      <View style={styles.popularAnime}>
        <Text style={styles.popularText}>Popular</Text>
        <ScrollView style={styles.popularAnimeMap} horizontal={true}>
          {trendingAnime.map((item, index) => {
            const imageUrl = item?.attributes?.coverImage?.tiny;
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
            const imageUrl = item?.attributes?.coverImage?.tiny;
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

// const HomeStack = createNativeStackNavigator();

// export default function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator
//     // screenOptions={{
//     //   headerShown: false,
//     // }}
//     >
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       <HomeStack.Screen name="Details" component={ImageDetailScreen} />
//     </HomeStack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();
