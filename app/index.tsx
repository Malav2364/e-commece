import { Text, StyleSheet, FlatList } from "react-native";
import products from '../assets/products.json'
import ProductListItem from "../Components/ProductListItem";

export default function HomeScreen() {
  return (
      <FlatList 
          data = {products}
          renderItem = {({item})=><ProductListItem product={item}/>}
        />
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
      fontSize: 25,
      fontWeight: 'bold'
  }
});
