import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Home Screen</Text>
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
