import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bodyContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#040B1C",
    marginTop: 25,
    paddingTop: 10,
    gap: 10,
  },
  SearchPart: {
    width: 400,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    gap: 10,
  },
  Textinput: {
    width: 320,
    height: 35,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    color: "#E45959",
    borderWidth: 2,
    borderColor: "#E45959",
  },
  bodyParents: {
    //flexDirection: "row",
    width: 380,
    height: 640,
    padding: 20,
    // paddingBottom: 350,
  },
  scrollChild: {
    width: "100%",
    flexDirection: "row",
    height: "100%",
    gap: 30,
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: 80,
  },
  AnimePart: {
    width: 150,
    height: 300,
    backgroundColor: "white",
  },
  popularAnimeParents: {
    width: 150,
    height: 240,
  },
  popularAnimeImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
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
  animaEpisode: { color: "white", fontSize: 10, textAlign: "center" },
});
