import React from "react";
import { View, Image, StyleSheet, Text, Animated, Easing } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  spinValue = new Animated.Value(0);

  // First set up animation
  Animated.loop(
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    })
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      {/* <View style={styles.imageContainer}> */}
      <Animated.View
        style={[styles.animatedView, { transform: [{ rotate: spin }] }]}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/tim-head.png")}
        />
      </Animated.View>
      {/* </View> */}
      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    // borderRadius: 150,
    // borderWidth: 3,
    // borderColor: Colors.primary800,
    // backgroundColor: Colors.accent500,
    overflow: "hidden",
    margin: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // width: "100%",
    // height: "100%",
    width: 300,
    height: 300,
    marginBottom: -700,
    shadowRadius: 24,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
  },
  animatedView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    overflow: "visible",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
