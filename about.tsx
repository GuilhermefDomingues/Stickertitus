import { Text, View, Stylesheet } from "react-native";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
        </View>
    )
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292E",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#FFF"
    }
})