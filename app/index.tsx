import { Text, StyleSheet, FlatList, View } from "react-native";
// import products from '../assets/products.json'
// import ProductListItem from "../Components/ProductListItem";
import { Button, ButtonText } from "@/Components/ui/button";
import "@/global.css";
import { Box } from "@/Components/ui/box";
import { Center } from "@/Components/ui/center";

export default function HomeScreen() {
  return(
    <Center className="flex-auto bg-green-200 h-dvh">
        <Text className="font-semibold text-7xl color-orange-400">This is..</Text>
        <Text className="font-semibold text-9xl color-green-700">Green</Text>
        <Text className="font-semibold text-7xl color-white">Bro. </Text>
    </Center>
  );
  // return (
  //     <FlatList 
  //         data = {products}
  //         renderItem = {({item})=><ProductListItem product={item}/>}
  //       />
  // );
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  title:{
      fontSize: 25,
      fontWeight: 'bold'
  }
});
