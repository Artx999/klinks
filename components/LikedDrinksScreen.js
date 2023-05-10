import { StyleSheet, Text, View } from 'react-native';

const LikedDrinksScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Liked Drinks</Text>
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
})

export default LikedDrinksScreen;