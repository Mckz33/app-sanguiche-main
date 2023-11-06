import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200, // Adjust the width and height as needed
    height: 120,
  },

  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: "hidden",
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  text: {
    fontSize: 20,
    width: 300,
    color: "white",
    fontStyle: "italic",
  },
  Logo: {
    height: 200,
    width: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    width: 300,
    textAlign: "center",
    paddingBottom: 20,
    color: "black",
    fontStyle: "italic",
  },
  picker: {
    fontSize: 30,
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderRadius: 10,
    color: "black",
    backgroundColor: "gray"
  },
  Escolha: {
    color: "black",
    fontSize: 18,
    fontStyle: "italic",
  },
  button: {
    color: "white",
  },
  buttonText: {
    color: "black",
    backgroundColor: "orange",
    borderRadius: 10,
    fontSize: 20,
  },
  saida: {
    marginTop: 20,
    padding: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default styles;