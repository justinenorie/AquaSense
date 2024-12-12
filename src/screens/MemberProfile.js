import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import fonts from "../constants/typography";
import colors from "../constants/Colors";
import images from "../data/images";

export default function MemberProfile({ route, navigation }) {
    const { member } = route.params; // Retrieve member data

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#78F2FF", "#C6F9FF", "#FFFFFF"]}
                locations={[0, 0.5, 1]}
                style={styles.header}
            >
                <Image
                    source={require("../assets/background/water-background.png")}
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                    resizeMode="cover"
                />

                <View
                    style={{
                        marginTop: 40,
                        marginLeft: 15,
                    }}
                >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ fontSize: 80, color: colors.TEXTblack }}>
                            {"<"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>

            <View style={styles.formContainer}>
                <Text
                    style={[
                        fonts.membername,
                        {
                            color: colors.PRIMARY,
                            marginTop: 70,
                            textAlign: "center",
                        },
                    ]}
                >
                    {member.name}
                </Text>
                <Text style={[styles.memberAssign, fonts.memberassign, {
                    color: colors.TEXTblack
                }]}>{member.assign}</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {member.description}
                    </Text>
                </View>
            </View>

            <Image
                source={images[member.picture]}
                style={styles.profileImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flex: 0.6,
    },

    profileImage: {
        position: "absolute",
        top: 80,
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: "center",
    },

    memberAssign: {
        marginTop: 5,
        textAlign: "center",
    },

    descriptionContainer: {
        margin: 20,
        padding: 15,
        borderRadius: 24,
        backgroundColor: "#f9f9f9",
        elevation: 2,
        borderWidth: 1,
    },

    descriptionText: {
        fontSize: 16,
        color: "#333",
        lineHeight: 22,
        textAlign: "center",
    },

    formContainer: {
        flex: 3,
        padding: 20,
        backgroundColor: colors.BACKGROUND,
    },
});
