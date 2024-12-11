import React, { useState } from "react";
import FontsLoad from "./src/assets/fonts/fontsLoad";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./src/screens/Home";
import LoginPage from "./src/screens/Login";
import SignUpPage from "./src/screens/SignUp";
import AboutUs from "./src/screens/AboutUs";
import Dashboard from "./src/screens/Dashboard";

//TODO: Add navigations here
const Stack = createNativeStackNavigator();

export default function App() {
    const [activeState, setActiveState] = useState("Dashboard");
    <FontsLoad />
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