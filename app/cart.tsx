import { View, Text, StyleSheet, ToastAndroid} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Button, ButtonText } from "@/Components/ui/button";



export default function Cart(){

    const showToast = ()=>{
        ToastAndroid.show("Added to Cart !", ToastAndroid.SHORT);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}><AntDesign name="shoppingcart" size={50} color="black" />  is Empty</Text>
            <Button className="bg-green-400" >
                <ButtonText onPress={showToast} className="bg-green-400">Add to Cart</ButtonText>
            </Button>
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