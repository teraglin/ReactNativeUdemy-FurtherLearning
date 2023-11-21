import {
  Text,
  StyleSheet,
  // Platform
} from "react-native";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ ios: 1, android: 2 }),
    borderWidth: 1,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
