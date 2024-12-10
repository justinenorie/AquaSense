import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import colors from "../constants/colors";

export default function Dashboard({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <Text>AquaSense Analytics</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
});