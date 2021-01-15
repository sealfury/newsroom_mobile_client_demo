import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const ArticleIndexDetails = ({ navigation, article }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ArticleShow", { article: article });
      }}
    >
      <Image source={{ uri: article.image }} style={styles.image} />
      <View style={styles.card}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.subtitle}>{article.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleIndexDetails;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: Dimensions.get("window").width,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 60,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  title: {
    color: "white",
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 8,
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    height: 250,
    width: Dimensions.get("window").width,
  },
});
