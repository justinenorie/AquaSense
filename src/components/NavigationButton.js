import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function NavigateButtons({ navigation }){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}