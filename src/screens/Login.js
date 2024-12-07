import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity
} from "react-native";
import { useState } from "react";
import colors from "../constants/Colors";

export default function App({ navigation }) {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    // const [errors, setErrors] = useState({});
    const handleLogin = () => navigation.navigate("Dashboard");

    return (
        <View style={styles.container}>
            <View style={styles.form}>


                <Text style={styles.label}>User</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Username"
                    value={Username}
                    onChangeText={setUsername}
                />
                {/* {errors.Username && <Text style={styles.errorText}>{errors.Username}</Text>} */}

                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Password"
                    value={Password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                {/* {errors.Password && <Text style={styles.errorText}>{errors.Password}</Text>} */}

                <Button title="Login" onPress={handleLogin} />

                <TouchableOpacity style={styles.link}
                    onPress={() => {
                        navigation.navigate("SignUp"); // Navigate to Login screen
                    }}>
                    <Text style={styles.linkText}>Don't have an account? SignUp.</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "cyan",
        justifyContent: "center",
        paddingHorizontal: 40,
    },
    form: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
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
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
    link: {
        marginTop: 20,
        alignItems: "center",
    },
    linkText: {
        color: "blue",
        textAlign: "center",
    }
});