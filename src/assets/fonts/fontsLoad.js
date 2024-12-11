export default function FontsLoad() {
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('./Poppins-Regular.ttf'),
        'Poppins-Bold': require('./Poppins-Bold.ttf'),
        'Poppins-Black.ttf': require('./Poppins-Black.ttf'),
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
};