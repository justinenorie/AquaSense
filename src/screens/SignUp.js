import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import colors from "../constants/Colors";

export default function SignUp({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};

        if (!username) formErrors.username = "Username is required";
        if (!password) formErrors.password = "Password is required";

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const handleSignUp = () => {
        if (validateForm()) {
            Alert.alert("Sign Up Successful", `Welcome, ${username}!`);
            setUsername("");
            setPassword("");
            setErrors({});
            // navigation.navigate('Login'); 
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            {/* Username Input */}
            <Text style={styles.label}>Enter your username</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
            />
            {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
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
    },
    input: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
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