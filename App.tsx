import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-[1] items-center justify-center"> 
      <Text>fresh start</Text>
      <StatusBar style="auto" />
    </View>
  );
}

