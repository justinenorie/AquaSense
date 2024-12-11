import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image
} from "react-native";

import colors from "../constants/Colors";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function SignUp({ navigation }) {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const isFormValid = () => {
        let formErrors = {};

        if (!email.includes("@")) formErrors.email = "Email is required";
        if (password.length < 8) formErrors.password = "Password must be at least 8 characters";

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const handleSignUp = async () => {
        if (!isFormValid()) {
            Alert.alert(
                "Try again",
                "Please enter a valid email and matching passwords with at least 8 characters"
            );
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert("Success", "Account created successfully");
            setemail("");
            setPassword("");
            navigation.navigate("Login");
        } catch (error) {
            Alert.alert("Error", `Error creating user: ${error.message}`);
        }
    };

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

            <Text style={styles.title}>Sign Up</Text>

            {/* email Input */}
            <Text style={styles.label}>Enter your email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setemail}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                {/* Password Input */}
                <Text style={styles.label}>Enter your password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <Text style={styles.label}>Confirm your password</Text>
            <TextInput
                style={styles.input}
                placeholder="Confirm your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

                {/* Already Have an Account Link */}
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Login"); // Navigate to Login screen
                    }}
                >
                    <Text style={styles.linkText}>Already have an account? Login here.</Text>
                </TouchableOpacity>
            </View>
        //</ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold",
    },
    input: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#fff",
        textAlign: "center",
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    linkText: {
        color: "#007BFF",
        textAlign: "center",
        marginTop: 10,
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginBottom: 10,
    },
});
