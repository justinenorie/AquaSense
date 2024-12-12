import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import NavigationButton from "../components/NavigationButton";
import descriptions from "../data/descriptions";
import { LinearGradient } from "expo-linear-gradient";
import fonts from "../constants/typography";
import colors from "../constants/Colors";
import data from "../data/membersData";
import images from "../data/images";
import palette from "../assets/palette.png";

export default function AquaSenseInfoCard({
    navigation,
    activeState,
    setActiveState,
}) {
    return (
        <LinearGradient
            colors={["#78F2FF", "#C6F9FF", "#FFFFFF"]}
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../assets/topbanner.png")}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                        }}
                    />
                    <View
                        style={{
                            marginTop: 50,
                            alignItems: "center",
                            alignSelf: "center",
                        }}
                    >
                        <Text style={[fonts.h2, { color: colors.ACCENT }]}>
                            What is
                        </Text>
                        <Text style={[fonts.h1, { color: colors.ACCENT }]}>
                            AQUASENSE ?
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            alignItems: "flex-end",
                            paddingHorizontal: 50,
                        }}
                    >
                        <Image
                            source={require("../assets/logo/droplets.png")}
                            style={{ width: 100, height: 90, top: -50 }}
                            resizeMode="contain"
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    {/* What is AquaSense? */}
                    <View style={styles.contentContainer}>
                        <Text style={[styles.contentText, fonts.h3]}>
                            {descriptions[0].description}
                        </Text>
                    </View>

                    {/* UI/UX Design */}
                    <View style={styles.contentContainer}>
                        <Text
                            style={[
                                { color: colors.ACCENT, textAlign: "center" },
                                fonts.h1,
                            ]}
                        >
                            UI/UX DESIGN
                        </Text>

                        <Text style={[styles.contentText, fonts.h3]}>
                            {descriptions[1].description}
                        </Text>

                        <View style={{ width: "100%" }}>
                            <Text
                                style={[
                                    {
                                        color: colors.ACCENT,
                                        padding: 12,
                                        borderRadius: 25,
                                        borderWidth: 2,
                                        marginVertical: 15,
                                        alignItems: "center",
                                    },
                                    fonts.h2,
                                ]}
                            >
                                Color Palette:
                                {/* Color Pallete here */}
                                <Image
                                    source={palette}
                                    style={{
                                        width: "45%",
                                        height: 35,
                                        alignSelf: "center",
                                        justifyContent: 'center',
                                    }}
                                    resizeMode="contain"
                                />
                            </Text>

                            <Text
                                style={[
                                    {
                                        color: colors.ACCENT,
                                        padding: 12,
                                        borderRadius: 25,
                                        borderWidth: 2,
                                        marginVertical: 15,
                                    },
                                    fonts.h2,
                                ]}
                            >
                                Typography: POPPINS
                            </Text>
                        </View>
                    </View>

                    {/* CREATORS */}
                    <View style={styles.contentContainer}>
                        <Text
                            style={[
                                {
                                    color: colors.ACCENT,
                                    textAlign: "center",
                                },
                                fonts.h1,
                            ]}
                        >
                            CREATORS
                        </Text>

                        {/* TODO: onPress={() => openModal(member)} */}
                        {data.map((member) => (
                            <TouchableOpacity
                                key={member.id}
                                onPress={() =>
                                    navigation.navigate("MemberProfile", {
                                        member,
                                    })
                                } // Pass member data
                            >
                                <View style={styles.memberCard}>
                                    <Image
                                        source={images[member.picture]}
                                        style={styles.memberImage}
                                    />
                                    <Text
                                        style={[
                                            fonts.membername,
                                            { color: colors.ACCENT },
                                        ]}
                                    >
                                        {member.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <NavigationButton
                navigation={navigation}
                activeState={activeState}
                setActiveState={setActiveState}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginBottom: 100,
    },
    contentContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        padding: 15,
        marginBottom: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    contentText: {
        lineHeight: 34,
        textAlign: "center",
    },
    memberCard: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 8,
        marginBottom: 30,
        borderWidth: 2,
        borderRadius: 24,
        borderColor: colors.ACCENT,
    },
    memberImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 12,
    },
});
