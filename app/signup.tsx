import { View, Text, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from "@/Components/ui/image";
import { Center } from "@/Components/ui/center";
import { Box } from "@/Components/ui/box";
Box

export default function SignUp() {
    return (
        <Center className="flex-1 gap-6">
            <Box className="border p-10 rounded-full">
                <Image
                    size="xl"
                    source={{
                        uri:"https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png",
                    }}
                    alt="image"
                />
            </Box>
            <Box className="border p-10 rounded-xl bg-yellow-200 italic">
                <Text className="text-2xl color-green-300">Google kare aur fark jane</Text>
            </Box>
        </Center>
    );
}

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     title:{
//         fontSize: 50,
//         fontWeight: 'bold',
//     }
// });