import { useFonts } from "expo-font";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Center } from "@/Components/ui/center";
import { Box } from "@/Components/ui/box";
import { Heading } from "@/Components/ui/heading";
import { VStack } from "@/Components/ui/vstack";
import { Input, InputField, InputIcon, InputSlot } from "@/Components/ui/input";
import { Button, ButtonText } from "@/Components/ui/button";
export default function SignUp() {
    return (
        <Box className="bg-white flex-auto justify-evenly">
            <VStack className="w-full p-4">        
                <Heading className="text-4xl font-bold justify-between">Getting Started</Heading>
                <Text className="text-xl text-slate-500">Sign Up to SustainFit</Text>
            </VStack>
            <VStack className="max-w-96">
            <Input className="text-center" variant="rounded" size="lg" isDisabled={false} isInvalid={false} isReadOnly={false}>
                <InputField placeholder="Enter your email" />
            </Input>
            </VStack>
            <VStack className="max-w-96">
            <Input className="text-center" variant="rounded" size="lg" isDisabled={false} isInvalid={false} isReadOnly={false}>
                <InputField placeholder="Create a username" />
            </Input>
            </VStack>
            <VStack className="max-w-96">
                <Button size="md" variant="solid" action="primary" className="bg-green-400 ">
                <ButtonText>Sign Up</ButtonText>
                </Button>
            </VStack>
        </Box>
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