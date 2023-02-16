import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackF from './src/navegacao/Stack';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <StackF/>
      </NavigationContainer>
    </View>
  );
}
