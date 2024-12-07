import Colors from "../constants/Colors";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
//import Animated, {LightSpeedInLeft} from 'react-native-reanimated';

export default function MemberCard({ picture, name, assign, onPress }) {

    return (
        <View style={styles.container}>
            <Animated.View entering={LightSpeedInLeft.delay(100).duration(1000)}>
                <TouchableOpacity style={styles.contents} onPress={onPress}>
                    {picture && (
                        <Image
                            source={picture}
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                        />
                    )}
                    <View
                        style={{
                            paddingHorizontal: 8,
                            flex: 1,
                            flexWrap: "nowrap",
                        }}
                    >
                        <Text style={[styles.name]}>{name}</Text>
                        <Text style={styles.assign}>{assign}</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginTop: 24,
    },
    contents: {
        backgroundColor: Colors.SECONDARY,
        borderRadius: 17,
        paddingHorizontal: 12,
        paddingVertical: 22,
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        color: Colors.TEXTwhite,
        fontFamily: "Quicksand-Bold",
        fontSize: 15,
    },
    assign: {
        color: Colors.TEXTwhite,
        fontFamily: "Quicksand-Regular",
        fontSize: 13,
    },
});
