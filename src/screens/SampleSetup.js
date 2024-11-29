import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const App = () => {
    const [waterLevel, setWaterLevel] = useState("Loading...");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://192.168.1.47/"); //ESP32's Local IP
                setWaterLevel(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setWaterLevel("Error fetching data");
            }
        };
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Water Level:</Text>
            <Text style={styles.level}>{waterLevel}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
    level: {
        fontSize: 28,
        fontWeight: "bold",
    },
});

export default App;
