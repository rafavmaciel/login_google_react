import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Index() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>ihuuuuu!</Text>
            <Button
                title="Ir para sobre"
                onPress={() => {
                    navigation.navigate("About");
                }}
            />
            <StatusBar style="auto" />
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
