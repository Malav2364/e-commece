import { Text, View } from "react-native";
import { Center } from "@/Components/ui/center";
import { Box } from "@/Components/ui/box";
import React from "react";
import { Button, ButtonText } from "@/Components/ui/button";
import { VStack } from "@/Components/ui/vstack";
import { FormControl } from "@/Components/ui/form-control";
import { Heading } from "@/Components/ui/heading";
import { Input, InputField, InputSlot, InputIcon } from "@/Components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";

export default function login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <Center className="flex-1 items-center bg-white">
        <Box>

        <FormControl className="p-4 border rounded-lg border-outline-300">
        <VStack space="xl">
            <Heading className="text-typography-900 leading-3">Login</Heading>
            <VStack space="xs">
            <Text className="text-typography-500 leading-1">Email</Text>
            <Input>
                <InputField type="text" />
            </Input>
            </VStack>
            <VStack space="xs">
            <Text className="text-typography-500 leading-1">Password</Text>
            <Input className="text-center">
                <InputField type={showPassword ? "text" : "password"} />
                <InputSlot className="pr-3" onPress={handleState}>
                {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    className="text-darkBlue-500"
                />
                </InputSlot>
            </Input>
            </VStack>
            <Button className="ml-auto bg-green-400">
            <ButtonText className="text-typography-0 text-lg">Login</ButtonText>
            </Button>
        </VStack>
        </FormControl>
        </Box>
    </Center>
  );
}
