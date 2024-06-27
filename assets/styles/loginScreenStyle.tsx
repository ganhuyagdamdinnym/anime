import { sign } from "crypto";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  bodyHeader: {
    backgroundColor: "#040B1C",
    width: "100%",
    height: "100%",
    marginTop: 25,
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  bodyContainer: {
    width: 400,
    height: 600,
    // backgroundColor: "red",
  },
  loginOrSignUp: {
    width: 400,
    height: 100,
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginPart: {
    width: 300,
    height: 50,
    backgroundColor: "#726D75",
    flexDirection: "row",
    borderRadius: 10,
  },
  login: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#E45959",
  },
  Signup: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E45959",
    borderRadius: 10,
  },
  loginText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
  loginFalse: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,
  },
  signUpFalse: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  loginHead: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginName: {
    fontSize: 30,
    fontWeight: "900",
    color: "white",
    width: "100%",
    height: 100,
    textAlign: "center",
    marginTop: 50,
  },
  loginBody: {
    width: "100%",
    height: 400,
    // backgroundColor: "red",
  },
  inputName: {
    color: "white",
    fontWeight: "600",
    width: "100%",
    paddingBottom: 10,
    paddingLeft: 60,
  },
  loginUserName: {
    width: 300,
    height: 50,
    color: "black",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E45959",
    padding: 10,
  },
  loginButton: {
    height: 50,
    backgroundColor: "#E45959",
    width: 100,
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",
  },
  logintext: {
    color: "white",
  },
});
