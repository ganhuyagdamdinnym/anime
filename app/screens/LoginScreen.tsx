import { styles } from "@/assets/styles/loginScreenStyle";
import { View, Text, Pressable, TextInput } from "react-native";
import { useState } from "react";
import React from "react";
import HomeScreen from "./HomeScreen";
import { useCreateUserMutation } from "../generated";
import { useLoginUserMutation } from "../generated";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [Signup] = useCreateUserMutation();
  const [login, { data }] = useLoginUserMutation();
  const [loginOrSignup, setLoginOrSignup] = useState<boolean>(true);
  const [username, onChangeUserName] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [signUpEmail, onChangeSignUpEmail] = React.useState("");
  const [signUpUsername, onChangeSignUpUsername] = React.useState("");
  const [signUpPassword, onChangeSignUpPassword] = React.useState("");
  const [passwordWrong, setPasswordWrong] = useState<Boolean>(false);
  const handleSignUp = async () => {
    const signUpInput = {
      email: signUpEmail,
      username: signUpUsername,
      password: signUpPassword,
    };
    console.log("s", signUpInput);
    try {
      await Signup({
        variables: { input: signUpInput },
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogin = async () => {
    const loginInput = {
      username: username,
      password: password,
    };
    await login({
      variables: { input: loginInput },
    }).then((res) => {
      console.log(res.data?.loginUser);
      if (res.data?.loginUser == "succeed") {
        navigation.navigate("HomeScreen");
      } else {
        setPasswordWrong(true);
      }
    });
  };

  return (
    <View style={styles.bodyHeader}>
      <View style={styles.bodyContainer}>
        {loginOrSignup == true ? (
          <View style={styles.loginHead}>
            <Text style={styles.loginName}>Login Form</Text>
            <View style={styles.loginBody}>
              <View
                style={{
                  width: "100%",
                  height: "40%",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.inputName}>Username</Text>

                <TextInput
                  style={styles.loginUserName}
                  onChangeText={onChangeUserName}
                  value={username}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: "40%",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.inputName}>Password</Text>
                {passwordWrong ? (
                  <Text
                    style={{
                      color: "red",
                      width: "100%",
                      paddingLeft: 60,
                      paddingBottom: 5,
                    }}
                  >
                    Password is wrong
                  </Text>
                ) : null}
                <TextInput
                  style={styles.loginUserName}
                  onChangeText={onChangePassword}
                  onPress={() => alert("hi")}
                  value={password}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: "20%",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable
                  onPress={() => handleLogin()}
                  style={styles.loginButton}
                >
                  <Text style={styles.logintext}>Login</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.loginHead}>
            <Text style={styles.loginName}>Sign up Form</Text>
            <View style={styles.loginBody}>
              <View
                style={{
                  width: "100%",
                  height: "30%",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.inputName}>Email</Text>
                <TextInput
                  style={styles.loginUserName}
                  onChangeText={onChangeSignUpEmail}
                  value={signUpEmail}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: "30%",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.inputName}>Username</Text>
                <TextInput
                  style={styles.loginUserName}
                  onChangeText={onChangeSignUpUsername}
                  value={signUpUsername}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: "30%",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.inputName}>Password</Text>
                <TextInput
                  style={styles.loginUserName}
                  onChangeText={onChangeSignUpPassword}
                  value={signUpPassword}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: "15%",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable
                  style={styles.loginButton}
                  onPress={() => handleSignUp()}
                >
                  <Text style={styles.logintext}>Sign up</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </View>
      <View style={styles.loginOrSignUp}>
        <View style={styles.loginPart}>
          <Pressable
            onPress={() => setLoginOrSignup(true)}
            style={loginOrSignup == false ? styles.loginFalse : styles.login}
          >
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
          <Pressable
            onPress={() => setLoginOrSignup(false)}
            style={loginOrSignup == false ? styles.Signup : styles.signUpFalse}
          >
            <Text style={styles.loginText}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
