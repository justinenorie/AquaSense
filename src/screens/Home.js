import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import ButtonStyle from '../components/ButtonStyle';
import colors from "../constants/colors";

const Line = require('../assets/line.png');
const Bubble = require ('../assets/bubble.png')

export default function HomePage({ navigation }) {
    const handleLogin = () => navigation.navigate("Login");

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/aquawater.jpg')}
                style={{ flex: 1 }}
            >
                {/* Optional overlay for semi-transparent background */}
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

                <View style={styles.header}>
                    <Image
                        source={Line}
                        style={styles.lineImage}
                    />
                    <Text style={styles.title}>Welcome to</Text>
                    <Text style={styles.subtitle}>AquaSense</Text>

                    <Image
                    source={Bubble}
                    style={styles.bubbleImage}
                    />
                </View>

                <View style={styles.content}>
                    <ButtonStyle
                        title="Login"
                        onPress={handleLogin}
                        style={styles.loginButton}
                    />
                </View>
            </ImageBackground>
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
    lineImage: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
        margin: 100
    },
    bubbleImage: {
        width: '100%',
        height: 68,
        resizeMode: 'contain',
        marginBottom: 20,
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
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 24,
        color: '#7f8c8d',
        fontWeight: "bold",
    },
    loginButton: {
        width: '80%',
        maxWidth: 300,
    },
});
