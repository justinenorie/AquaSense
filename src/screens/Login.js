import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image
} from "react-native";
const Line = require ("../assets/line.png")
import { useState } from "react";
import colors from "../constants/colors";
//import LinearGradient from 'react-native-linear-gradient';



export default function LoginScreen({ navigation }) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignIn = () => {
        // Handle sign-in logic
        console.log('Sign In');
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign-in logic
        console.log('Google Sign In');
    };

    const navigateToSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (
        //<LinearGradient
         // colors={['#C6F9FF', '#78F2FF']}
         // locations={[0.58, 1]}
         // style={{ flex: 1 }}
        //>
            
             <ImageBackground source={require('../assets/aquawater.jpg')} style={{flex: 1}}>
        //  
            <View style={styles.container}>

                 {/* Optional overlay for semi-transparent background */}
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
               
               <Image 
               source={Line}
               style={styles.Lineimage}
               />

                <Text style={styles.Text}>Hi,</Text>
                <Text style={styles.Text}>Welcome Back!</Text>

                <View style={styles.form}>
                    <Text style={styles.sign}>Sign in to your account</Text>
                    <Text style={styles.label}>User</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Username"
                        value={Username}
                        onChangeText={setUsername}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Password"
                        value={Password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <Button title="Sign Up" onPress={handleLogin} />
                    <TouchableOpacity
                        style={styles.link}
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text style={styles.linkText}>Don't have an account? SignUp.</Text>
                    </TouchableOpacity>
                </View> 
           </View>
             </ImageBackground>
        //</LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 40,
    },
    lineImage: {
        width: '100%',
        height: 50,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    form: {
        backgroundColor: "white",
        
        padding: 30,
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
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2
    },
    input: {
        height: 50,
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 15,
        textAlign: "center"
        
    },
    passwordToggle: {
        marginLeft: 'auto',
        paddingHorizontal: 10,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginVertical: 10,
        color: '#007BFF', // Blue for clickable text
        fontSize: 14,
    },
    signInButton: {
        backgroundColor: '#4c669f', // Blue gradient start
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginVertical: 15,
    },
    signInButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 25,
        height: 50,
        paddingHorizontal: 15,
        justifyContent: 'center',
        marginVertical: 10,
    },
    googleIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    googleButtonText: {
        fontSize: 16,
        color: '#202020',
    },
    footerText: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 14,
        color: '#202020',
    },
    signUpText: {
        color: '#007BFF',
        fontWeight: '600',
    },
    linkText: {
        color: "blue",
        textAlign: "center",
    },
    Text: {
        fontSize: 40,
        fontWeight: 'bold'
       
    },
    sign: {
        fontSize: 20,
        marginBottom: 25,
        fontWeight: "bold"
    }
});