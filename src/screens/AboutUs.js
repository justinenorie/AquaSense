import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import colors from "../constants/Colors";

export default function Dashboard({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/background/title-background.png')}
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
                resizeMode="cover"
            />
            <Text style={styles.title}>About Us</Text>
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