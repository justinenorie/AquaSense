import { StyleSheet, Text, View } from 'react-native';
import ButtonStyle from '../components/ButtonStyle';
import colors from "../constants/Colors";

export default function HomePage({ navigation }) {
    const handleLogin = () => navigation.navigate("Login");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>AquaSense</Text>
                <Text style={styles.subtitle}>Water Level Analytics</Text>
            </View>

            <View style={styles.content}>
                <ButtonStyle
                    title="Login"
                    onPress={handleLogin}
                    style={styles.loginButton}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 50,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 24,
        color: '#7f8c8d',
        marginBottom: 20,
    },
    loginButton: {
        width: '80%',
        maxWidth: 300,
    }
});