import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function InputText({title, onPress, buttonstyle, fontsize, image}) {
    return (
        <View>
            <TouchableOpacity style={[styles.button, buttonstyle]} onPress={onPress}>
                {image && <Image source={image} style={{width: 24, height: 24, marginRight: 8}} />}
                <Text style={[fontsize, {fontFamily: "Parkinsans", fontWeight: "bold"}]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {    
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        marginTop: 24,
        width: '100%',
    },
    
});
