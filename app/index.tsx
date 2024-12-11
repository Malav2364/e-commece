import { Text, StyleSheet, FlatList, View } from "react-native";
// import products from '../assets/products.json'
// import ProductListItem from "../Components/ProductListItem";
import { Button, ButtonText } from "@/Components/ui/button";
import "@/global.css";
import { Box } from "@/Components/ui/box";
import { Center } from "@/Components/ui/center";

export default function HomeScreen() {
  return(
    <Center className="flex-1 bg-green-200">
      <Box>
        <Text className="font-semibold text-9xl color-white">This is green bro</Text>
      </Box>
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
