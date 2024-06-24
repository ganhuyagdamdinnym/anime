import { MovieArray } from "@/assets/data/arrays";
import popularAnimeData from "@/assets/data/popularAnime.json";
import imageMap from "@/assets/images/imageMap";
import { styles } from "@/assets/styles/homeStyle";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImageDetailScreen from "../screens/DetailsScreen";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  //{ navigation }: { navigation: any }
  // const navigation = useNavigation();
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
          {popularAnimeData.map((item, index) => {
            const imageSource = imageMap[item.img];
            if (item.category === "popular") {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.popularAnimeParents}
                  onPress={() =>
                    navigation.navigate("ImageDetailScreen", {
                      name: item.name,
                    })
                  }
                >
                  <Image
                    style={styles.popularAnimeImage}
                    source={imageSource}
                  />
                  <View style={styles.animeNameParents}>
                    <Text style={styles.animeName}>{item.name}</Text>
                    <Text style={styles.animaEpisode}>
                      {item.madeDate} | {item.episode} Episode
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
          })}
        </ScrollView>
      </View>
      <View style={styles.forYouAnime}>
        <Text style={styles.popularText}>For you</Text>
        <ScrollView style={styles.popularAnimeMap} horizontal={true}>
          {popularAnimeData.map((item, index) => {
            const imageSource = imageMap[item.img];
            if (item.category === "for you") {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.popularAnimeParents}
                  //onPress={() => handleImagePress(item.name)}
                >
                  <Image
                    style={styles.popularAnimeImage}
                    source={imageSource}
                  />
                  <View style={styles.animeNameParents}>
                    <Text style={styles.animeName}>{item.name}</Text>
                    <Text style={styles.animaEpisode}>
                      {item.madeDate} | {item.episode} Episode
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
            return null;
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
