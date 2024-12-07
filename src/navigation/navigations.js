import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../screens/Home";
import LoginPage from "../screens/Login";
import SignUpPage from "../screens/SignUp";
import AboutUsPage from "../screens/AboutUs";
import Dashboard from "../screens/Dashboard";

//TODO: Add navigations here
const Stack = createNativeStackNavigator();

export default function Navigation() {
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
                <Stack.Screen name="AboutUs" component={AboutUsPage} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
