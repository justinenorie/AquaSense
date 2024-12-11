import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    ScrollView,
    Image,
    SafeAreaView,
} from "react-native";
import colors from "../constants/Colors";
import data from "../data/membersData";
import background from "../assets/background/title-background.png";
import images from "../data/images";
import NavigationButton from "../components/NavigationButton";


export default function AboutUs({ navigation, activeState, setActiveState }) {
    const [selectedMember, setSelectedMember] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = (member) => {
        setSelectedMember(member);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedMember(null);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image source={background} style={styles.backgroundImage} />
                <View style={styles.initialContainer}>
                    <Text style={styles.title}>About Us</Text>
                    <Text style={styles.description}>
                        Our mission is to maintain safe and secure the safety of water levels in future disasters.
                    </Text>
                    {data.map((member) => (
                        <TouchableOpacity key={member.id} onPress={() => openModal(member)}>
                            <View style={styles.memberCard}>
                                <Image source={images[member.picture]} style={styles.memberImage} />
                                <Text style={styles.memberName}>{member.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalBackground}>
                    <View
                        style={styles.modalContainer}
                    >
                        {selectedMember && (
                            <>
                                <View style={styles.modalTitle}>
                                    <Image
                                        source={images[selectedMember.picture]}
                                        style={styles.modalImage}
                                    />
                                    <View style={styles.modalTextContainer}>
                                        <Text style={styles.modalName}>{selectedMember.name}</Text>
                                        <Text style={styles.modalAssign}>{selectedMember.assign}</Text>
                                    </View>
                                </View>
                                <Text style={styles.modalDescription}>
                                    {selectedMember.description}
                                </Text>
                                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                                    <Text style={styles.closeButtonText}>Close</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
            <NavigationButton
                navigation={navigation}
                activeState={activeState}
                setActiveState={setActiveState}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        opacity: 0.05,
    },
    initialContainer: {
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    memberCard: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    memberImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    memberName: {
        fontSize: 18,
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    modalContainer: {
        backgroundColor: "#E7C8B1",
        marginHorizontal: 24,
        padding: 24,
        borderRadius: 27,
    },
    modalTitle: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    modalImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    modalTextContainer: {
        paddingHorizontal: 12,
        flex: 1,
    },
    modalName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    modalAssign: {
        fontSize: 16,
        color: "#555",
    },
    modalDescription: {
        fontSize: 16,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: colors.SECONDARY,
        borderRadius: 27,
        paddingVertical: 12,
        alignItems: "center",
    },
    closeButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});