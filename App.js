import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/navigations';
import Setup from './src/screens/SampleSetup';
import { useFonts } from 'expo-font';

export default function App() {
    // const [fontsLoaded] = useFonts({
    //     'Montserrat': require('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'),
    //     'Parkinsans': require('https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&display=swap'),
    // });

    // if (!fontsLoaded) {
    //     return null; // or any loading indicator
    // }

    return (
        <View style={styles.container}>
            <AppNavigator />
            <Setup />
            <Text style={{ fontFamily: 'Montserrat' }}>Open up App.js to start working your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
