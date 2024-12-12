import { View, Text } from "react-native";
import { Center } from "@/Components/ui/center";
import { Box } from "@/Components/ui/box";

export default function login(){
  return(
    <Center className="flex-auto border h-full w-full">
      <Center className="border w-3/4 h-1/2 rounded-xl bg-slate-200 gap-5">
        <Box className="bg-green-200 h-1/6 w-5/6 rounded-lg border"></Box>
        <Box className="bg-green-200 h-1/6 w-5/6 rounded-lg border"></Box>
        <Box className="bg-green-200 h-1/6 w-5/6 rounded-lg border"></Box>
        <Box className="bg-green-200 h-1/6 w-5/6 rounded-lg border"></Box>
      </Center>
    </Center>
  );
}


// <Box className="border w-auto rounded-lg absolute top-1 left-1 m-5">
// <Text className="text-center text-xl">Login</Text>
// </Box>
// <Box className="border w-auto rounded-lg absolute left-1 m-5">
// <Text className="text-center text-xl">Username</Text>
// </Box>