import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer"; 

const placeholderImage = require("@/assets/images/264292112-golden-retriever-1.jpg")

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={placeholderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292E",
  },
  imageContainer: {
    flex: 1,
  },

});
