import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Image
} from "react-native";
import { ref, onValue } from "firebase/database";
import { rtdb } from "../../firebaseConfig";
import { LinearGradient } from 'expo-linear-gradient';
import colors from "../constants/Colors";
import NavigationButton from "../components/NavigationButton";

export default function Dashboard({ navigation, activeState, setActiveState }) {
    const [waterHeight, setWaterHeight] = useState(null);
    const [dhtTemperature, setDhtTemperature] = useState(null);
    const [dhtHumidity, setDhtHumidity] = useState(null);

    const [loading, setLoading] = useState(true);
    const [waterFetched, setWaterFetched] = useState(false);
    const [tempFetched, setTempFetched] = useState(false);
    const [humidFetched, setHumidFetched] = useState(false);

    const waterLevelRef = ref(rtdb, "/WaterLevel/height");
    const dhtTempRef = ref(rtdb, "/DHT/temperature");
    const dhtHumidRef = ref(rtdb, "/DHT/humidity");

    const fetchData = () => {
        const waterLevelListener = onValue(
            waterLevelRef,
            (snapshot) => {
                try {
                    if (snapshot.exists()) {
                        const height = snapshot.val();
                        if (typeof height === "number" || typeof height === "string") {
                            setWaterHeight(height);
                        } else {
                            console.error("Unexpected data format:", height);
                        }
                    } else {
                        console.log("No data available at /WaterLevel/height.");
                    }
                } catch (error) {
                    console.error("Error updating water height:", error);
                } finally {
                    setWaterFetched(true);
                }
            },
            (error) => {
                console.error("Error fetching water height in real-time:", error);
                setWaterFetched(true);
            }
        );

        const temperatureListener = onValue(
            dhtTempRef,
            (snapshot) => {
                try {
                    if (snapshot.exists()) {
                        const temp = snapshot.val();
                        if (typeof temp === "number" || typeof temp === "string") {
                            setDhtTemperature(temp);
                        } else {
                            console.error("Unexpected data format:", temp);
                        }
                    } else {
                        console.log("No data available at /DHT/temperature.");
                    }
                } catch (error) {
                    console.error("Error updating temperature:", error);
                } finally {
                    setTempFetched(true);
                }
            },
            (error) => {
                console.error("Error fetching temperature in real-time:", error);
                setTempFetched(true);
            }
        );

        const humidityListener = onValue(
            dhtHumidRef,
            (snapshot) => {
                try {
                    if (snapshot.exists()) {
                        const humidity = snapshot.val();
                        if (typeof humidity === "number" || typeof humidity === "string") {
                            setDhtHumidity(humidity);
                        } else {
                            console.error("Unexpected data format:", humidity);
                        }
                    } else {
                        console.log("No data available at /DHT/humidity.");
                    }
                } catch (error) {
                    console.error("Error updating humidity:", error);
                } finally {
                    setHumidFetched(true);
                }
            },
            (error) => {
                console.error("Error fetching humidity in real-time:", error);
                setHumidFetched(true);
            }
        );

        // Return cleanup functions
        return () => {
            waterLevelListener();
            temperatureListener();
            humidityListener();
        };
    };

    // Check if all listeners have fetched data
    useEffect(() => {
        if (waterFetched && tempFetched && humidFetched) {
            setLoading(false);
        }
    }, [waterFetched, tempFetched, humidFetched]);

    // Fetch the data when the component mounts
    useEffect(() => {
        const unsubscribe = fetchData();
        return () => unsubscribe();
    }, []);

    let level, statusMessage, indicator, progressBarColor;

    if (waterHeight <= 25) {
        level = "Level 1";
        indicator = "Safe";
        statusMessage = "There's no flood risk at the moment.";
        progressBarColor = "#2ecc71"; // Green
    } else if (waterHeight <= 50) {
        level = "Level 2";
        indicator = "Caution";
        statusMessage = "Water level rising, stay alert.";
        progressBarColor = "#f1c40f"; // Yellow
    } else if (waterHeight <= 75) {
        level = "Level 3";
        indicator = "Warning";
        statusMessage = "Water level high, prepare for potential flooding.";
        progressBarColor = "#e67e22"; // Orange
    } else {
        level = "Level 4";
        indicator = "Danger";
        statusMessage = "Severe flood risk, evacuate immediately.";
        progressBarColor = "#e74c3c"; // Red
    }

    return (
        <LinearGradient
            colors={["#78F2FF", "#C6F9FF", "#FFFFFF"]}
            locations={[0, 0.5, 1]}
            style={styles.background}
        >
            {/* Background Overlay */}
            <Image
                source={require("../assets/background/title-background.png")}
                style={styles.overlayImage}
                resizeMode="cover"
            />
            <View style={styles.container}>
                <Image
                    source={require("../assets/logo/AquaSense.png")}
                    style={{
                        position: 'absolute',
                        top: 40,
                        left: 10,
                        width: 200,
                        resizeMode: 'contain',
                    }}
                />

                <Text style={styles.title}>{`Current Level: ${level}`}</Text>

                <View style={styles.progressContainer}>
                    <View
                        style={[
                            styles.progressBar,
                            {
                                height: `${waterHeight}%`,
                                backgroundColor: progressBarColor,
                            },
                        ]}
                    >
                        <Text style={styles.progressText}>{`${waterHeight}%`}</Text>
                    </View>
                </View>

                <View
                    style={{
                        alignItems: "center",
                        backgroundColor: colors.CARD,
                        padding: 10,
                        borderRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: { width: 2, height: 4 },
                        shadowOpacity: 0.3,
                        elevation: 5,
                    }}>
                    <Text style={[styles.status, { color: progressBarColor }]}>{indicator}</Text>
                    <Text style={[styles.statusMessage, { color: progressBarColor }]}>{statusMessage}</Text>
                </View>

                {loading ? (
                    <ActivityIndicator size="large" color="#3498db" />
                ) : (
                    <View style={styles.cardContainer}>
                        {/* Temperature Card */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Temperature</Text>
                            <Text style={styles.cardValue}>
                                {dhtTemperature ?? "Unavailable"}°C
                            </Text>
                        </View>
                        {/* Humidity Card */}
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Humidity</Text>
                            <Text style={styles.cardValue}>
                                {dhtHumidity ?? "Unavailable"}%
                            </Text>
                        </View>
                    </View>
                )}
            </View>
            <NavigationButton
                navigation={navigation}
                activeState={activeState}
                setActiveState={setActiveState}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    overlayImage: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.8,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    progressContainer: {
        width: 120,
        height: 250,
        backgroundColor: "#e0e0e0",
        borderRadius: 30,
        overflow: "hidden",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        elevation: 10,
    },
    progressBar: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    progressText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    status: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    statusMessage: {
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: 10,
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        width: "100%",
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: colors.CARD,
        borderRadius: 15,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "45%",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        color: "#666",
        marginBottom: 10,
    },
    cardValue: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    },
});