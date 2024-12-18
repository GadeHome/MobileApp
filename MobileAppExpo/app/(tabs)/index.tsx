import { Text, View, FlatList, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar"

import { Button, ButtonText, ButtonSpinner } from "@/components/ui/button"


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
    </View>
  );
}
