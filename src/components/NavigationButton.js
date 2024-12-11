import { View, StyleSheet, Pressable, Image } from "react-native";
import colors from "../constants/Colors";

export default function NavigationButton({ navigation, activeState, setActiveState }) {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                {/* Home Menu */}
                <Pressable onPress={() => {
                    setActiveState("Dashboard")
                    navigation.navigate("Dashboard")
                }}>
                    <Image
                        source={require("../assets/home.png")}
                        style={[{
                            tintColor: activeState === "Dashboard" ? colors.ACCENT : null}, 
                            styles.icon, styles.iconMargin, { opacity: activeState === "Dashboard" ? 1 : 0.5 }
                        ]}
                    />
                </Pressable>

                <Pressable onPress={() => {
                    setActiveState("AboutUs")
                    navigation.navigate("AboutUs")
                }}>
                    <Image
                        source={require("../assets/info.png")}
                        style={[{
                            tintColor: activeState === "AboutUs" ? colors.ACCENT : null}, 
                            styles.icon, styles.iconMargin, { opacity: activeState === "AboutUs" ? 1 : 0.5 }
                        ]}
                    />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 24,
        position: 'absolute',
        bottom: 0,
        width: "80%",

    },
    menu: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 27,
        borderColor: "#5B441D",
        borderWidth: 1,
        backgroundColor: colors.TEXTwhite,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
    },
    icon: {
        width: 40,
        height: 40,
    },
    iconMargin: {
        marginHorizontal: 10,
    },
    scan: {
        backgroundColor: colors.BACKGROUND,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#5B441D",
        padding: 15,
    },
});
