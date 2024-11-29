import { StyleSheet, Text, View } from 'react-native';
import ButtonStyle from '../components/ButtonStyle';

export default function App({navigation}) {
    const homePage = () => navigation.navigate("Login");
    return (
        <View style={styles.container}>
            <Text>Home - Water Level Analytics Dashboard</Text>
            <ButtonStyle title="Login" onPress={homePage} />
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