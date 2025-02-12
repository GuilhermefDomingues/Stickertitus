import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer"; 
import Button from "@/components/Button";

const placeholderImage = require("@/assets/images/264292112-golden-retriever-1.jpg")

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={placeholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="chose a photo"/>
        <Button label="use this photo"/>
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
    paddingTop: 8,
  },
  footerContainer:{
    flex: 1/3,
    alignItems: "center",
  },

});
