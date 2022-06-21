import React from "react";
import { StyleSheet, Text, View, Button} from "react-native";

export default function About() {
    return (
        <View style={styles.container} >
            <Text>About</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});