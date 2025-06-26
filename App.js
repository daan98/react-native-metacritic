import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import icon from "./assets/icon.png";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          uri: `https://i.etsystatic.com/12175780/r/il/d29760/6147346614/il_1080xN.6147346614_40gh.jpg`,
        }}
        style={styles.iconImg}
      />

      <Text style={styles.text}>Bienvenido a la app</Text>

      <Button
        title="Pulsa aqui"
        color={"red"}
        onPress={() => {
          alert("Hola!");
        }}
      /> */}

      <TouchableHighlight
        underlayColor={"blue"}
        style={styles.touchableButton}
        onPress={() => {
          alert("Hola desde Touchable 🥳");
        }}
      >
        <Text style={{ color: "white" }}>Pulsa bóton resaltable</Text>
      </TouchableHighlight>

      <TouchableOpacity
        underlayColor={"blue"}
        style={styles.touchableButton}
        onPress={() => {
          alert("Hola desde Touchable 🥳");
        }}
      >
        <Text style={{ color: "white" }}>Pulsa bóton opacable</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },
  iconImg: {
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
  touchableButton: {
    width: 200,
    height: 200,
    backgroundColor: "red",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 0,
    marginVertical: 10,
  },
});
