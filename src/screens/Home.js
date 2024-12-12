import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from "../constants/Colors";
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';

export default function HomePage({ navigation }) {
    const handleLogin = () => navigation.navigate("Login");

    // Swipe animation
    const animationValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animationValue, {
                    toValue: -10,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(animationValue, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [animationValue]);

    // swipe-up gesture
    const swipeUpGesture = Gesture.Pan()
        .onEnd((e) => {
            if (e.translationY < -100) {
                handleLogin();
            }
        });

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <GestureDetector gesture={swipeUpGesture}>
                <LinearGradient
                    colors={['#78F2FF', '#C6F9FF', '#FFFFFF']}
                    locations={[0, 0.5, 1]}
                    style={styles.container}>
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
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Image
                                source={require('../assets/logo/AquaSense-Logo.png')}
                                style={{ width: 300, height: 150, marginBottom: 20 }}
                            />

                            <View style={styles.title}>
                                <Text style={styles.subtitle}>Welcome to</Text>
                                <Image
                                    source={require('../assets/logo/AquaSense.png')}
                                    resizeMode='cover'
                                />
                            </View>

                            <Image
                                source={require('../assets/logo/droplets.png')}
                            />
                        </View>

                        <Animated.View style={[{transform: [{ translateY: animationValue }]}, styles.content]}>
                            <Text style={{ fontSize: 20, color: "#313131", fontWeight: "bold" }}>
                                Swipe up to explore more
                            </Text>
                        </Animated.View>
                        <View style={styles.swipe}>
                            <View style={styles.swipeLine}></View>
                        </View>
                    </View>
                </LinearGradient>
            </GestureDetector>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 35,
        color: colors.TEXTblack,
        fontWeight: 'bold',
        marginBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 2 },
        textShadowRadius: 10,
    },
    content: {
        position: 'absolute',
        bottom: 60,
    },
    swipe: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,

    },
    swipeLine: {
        width: 40,
        height: 4,
        backgroundColor: '#000000', 
        borderRadius: 2, 
    },
    swipeText: {
        fontSize: 20,
        color: "#313131",
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
