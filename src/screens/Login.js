import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    Alert
} from "react-native";
import ButtonStyle from "../components/ButtonStyle";
import colors from "../constants/Colors";
import fonts from "../constants/typography";
import { LinearGradient } from 'expo-linear-gradient';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function LoginScreen({ navigation }) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignIn = () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                Alert.alert("Success", "Login successful");
                navigation.navigate("Dashboard");
            })
            .catch((error) => {
                // console.error("Login Error:", error.message);
                Alert.alert("Error", "Invalid credentials");
            });
    };


    const handleGoogleSignIn = () => {
        // Handle Google sign-in logic
        console.log("Google Sign In");
    };

    const navigateToSignUp = () => {
        navigation.navigate("SignUp");
    };

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <LinearGradient
                colors={['#78F2FF', '#C6F9FF', '#FFFFFF']}
                locations={[0, 0.5, 1]}
                style={styles.header}>

                <Image source={require("../assets/background/water-background.png")}
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                    resizeMode="cover"
                />
                <Image
                    source={require("../assets/logo/AquaSense-Logo.png")} // Replace with your logo
                    style={styles.headerImage}
                />
                <View style={{width: '100%', paddingHorizontal: 30}}>
                    <Text style={[styles.headerText, fonts.h1]}>Hello</Text>
                    <Text style={[styles.headerText, fonts.h1]}>Welcome back!</Text>
                </View>
            </LinearGradient>

            {/* Form Section */}
            <View style={styles.formContainer}>
                <Text style={[fonts.h2, styles.formTitle]}>Sign in to your account</Text>

                {/* Email Input */}
                <Text style={[fonts.h3, { marginTop: 15 }]}>Email</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, fonts.small]}
                        placeholder="Enter your email"
                        placeholderTextColor="#A9A9A9"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setemail}
                    />
                </View>

                {/* Password Input */}
                <Text style={[fonts.h3, { marginTop: 15 }]}>Password</Text>
                <View style={[styles.inputContainer, styles.passwordInput]}>
                    <TextInput
                        style={[{ flex: 1, fontSize: 16, color: "#202020", height: 50, }, fonts.small]}
                        placeholder="Enter your password"
                        placeholderTextColor="#A9A9A9"
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        onPress={togglePasswordVisibility}
                        style={styles.passwordToggle}
                    >
                        <Text style={{ fontSize: 16, color: "#007BFF" }}>
                            {passwordVisible ? "Hide" : "Show"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </TouchableOpacity>

                <ButtonStyle
                    title="Sign In"
                    onPress={handleSignIn}
                    fontsize={{
                        color: colors.TEXTwhite,
                        fontSize: 18
                    }}
                />

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 24,
                    }}
                >
                    <View style={styles.line}></View>
                    <Text
                        style={[
                            fonts.h1,
                            { fontSize: 24, paddingHorizontal: 8 },
                        ]}
                    >
                        OR
                    </Text>
                    <View style={styles.line}></View>
                </View>

                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={handleGoogleSignIn}
                >
                    <Image
                        source={require('../assets/logo/google.png')} // Replace with your Google icon
                        style={styles.googleIcon}
                    />
                    <Text style={styles.googleButtonText}>
                        Sign in with Google
                    </Text>
                </TouchableOpacity>

                {/* Footer */}
                <Text style={styles.footerText}>
                    Don't have an account?{" "}
                    <Text style={styles.signUpText} onPress={navigateToSignUp}>
                        Sign up here
                    </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    headerImage: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 28,
        fontWeight: "bold",
        color: colors.ACCENT, 
    },
    formContainer: {
        flex: 3,
        padding: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: colors.BACKGROUND,
    },
    formTitle: {
        color: "#202020", // Blackish text color
        marginBottom: 10,
        textAlign: "center",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#D3D3D3", // Light grey border
        borderRadius: 25,
        paddingHorizontal: 20,
        backgroundColor: "#F9F9F9",
        color: "#202020", // Text color inside the input
        fontSize: 16,
    },
    passwordInput: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D3D3D3",
        borderRadius: 25,
        backgroundColor: "#F9F9F9",
        paddingHorizontal: 20,
    },
    passwordToggle: {
        marginLeft: "auto",
        paddingHorizontal: 10,
    },
    forgotPassword: {
        alignSelf: "flex-end",
        marginVertical: 20,
        color: "#007BFF", // Blue for clickable text
        fontSize: 14,
    },
    googleButton: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D3D3D3",
        borderRadius: 25,
        height: 50,
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    googleIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    googleButtonText: {
        fontSize: 16,
        color: "#202020",
    },
    footerText: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 14,
        color: "#202020",
    },
    signUpText: {
        color: "#007BFF",
        fontWeight: "600",
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#000",
    },
});
