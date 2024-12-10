import { View, Text, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SignUp() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up Screen</Text>
            <FontAwesome name="sign-in" size={60} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 50,
        fontWeight: 'bold',
    }
});