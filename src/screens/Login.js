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



export default function App({ navigation }) {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    // const [errors, setErrors] = useState({});
    const handleLogin = () => navigation.navigate("Dashboard");

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
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 15,
        textAlign: "center"
        
    },
    link: {
        marginTop: 20,
        alignItems: "center",
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