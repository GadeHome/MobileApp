import { Text, View, FlatList, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar"

import { Button, ButtonText, ButtonSpinner } from "@/components/ui/button"
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Image } from "@/components/ui/image";

export default function Index() {
  return (
    <View className="flex-[1] bg-black pt-8">
        <StatusBar style="auto"/>
        <SafeAreaView />
        <Button className='p-3'>
            <ButtonSpinner color="gray-400" />
            <ButtonText className='font-medium text-sm ml-2'>Please wait...</ButtonText>
        </Button>
        <Text className="text-white p-10 text-center">Welcome</Text> 
        <Text className="text-white text-center text-4xl p-3">Home page</Text>

        <HStack className="justify-center" space="md" reversed={true} >
          <Box  className="h-20 w-20 bg-primary-100">
            <Image
              size="md" 
              source={{
              uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
              }}
              alt="image"
            />
          </Box>
          <Box  className="h-20 w-20 bg-primary-100">
            <Image
              size="md" 
              source={{
              uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
              }}
              alt="image"
            />
          </Box>
          <Box  className="h-20 w-20 bg-primary-100">
            <Image
              size="md" 
              source={{
              uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
              }}
              alt="image"
            />
          </Box>
        </HStack>
      
    </View>
  );
}
