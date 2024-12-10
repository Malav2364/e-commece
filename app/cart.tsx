import { View, Text, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Cart(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cart Screen</Text>
            <AntDesign name="shoppingcart" size={60} color="black" />
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