import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bodyContainer: {
    height: "100%",
    width: "100%",
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#040B1C",
    // backgroundColor: "red",
    gap: 20,
  },
  titleContainer: {
    color: "white",
    width: 140,
    height: 30,
    fontSize: 20,
    fontWeight: "900",
  },
  parentsSearchAndTitle: {
    // flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 30,
    width: "100%",
  },
  cateParents: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  category: {
    backgroundColor: "#E45959",
    width: 78,
    height: 24,
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 13,
    color: "white",
  },
  popularAnime: {
    width: "100%",
    height: 280,
    gap: 15,
  },
  popularText: {
    fontWeight: "900",
    fontSize: 20,
    color: "white",
  },
  popularAnimeImage: {
    width: 124,
    borderRadius: 13,
    height: 185,
  },
  popularAnimeMap: {
    flexDirection: "row",
    width: "100%",
    height: 220,

    rowGap: 20,
  },
  popularAnimeParents: {
    width: 124,
    marginRight: 20,
  },
  animeNameParents: {
    width: "100%",
    height: 35,
  },
  animeName: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    width: "100%",
  },
  animaEpisode: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
  },
  forYouAnime: {
    width: "100%",
    height: 270,
    gap: 15,
    // backgroundColor: "red",
  },
});
