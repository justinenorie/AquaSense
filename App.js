import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from 'react-native';

import HomePage from "./src/screens/Home";
import LoginPage from "./src/screens/Login";
import SignUpPage from "./src/screens/SignUp";
import AboutUs from "./src/screens/AboutUs";
import Dashboard from "./src/screens/Dashboard";
import MemberProfile from "./src/screens/MemberProfile";

//TODO: Add navigations here
const Stack = createNativeStackNavigator();

export default function App() {
    const [activeState, setActiveState] = useState("Dashboard");

    const [fontsLoaded] = useFonts({
        'Poppins-Black': require('./src/assets/fonts/Poppins-Black.ttf'),
        'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    animation: "fade",
                }}>
                {/* Main Screen Navigations */}
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="SignUp" component={SignUpPage} />
                <Stack.Screen name="MemberProfile" component={MemberProfile} />

                {/* Menu Navigations */}
                <Stack.Screen name="Dashboard">
                    {(props) => (
                        <Dashboard
                            {...props}
                            activeState={activeState}
                            setActiveState={setActiveState}
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen name="AboutUs">
                    {(props) => (
                        <AboutUs
                            {...props}
                            activeState={activeState}
                            setActiveState={setActiveState}
                        />
                    )}
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
}