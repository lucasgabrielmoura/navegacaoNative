import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextoCentral from './src/components/TextoCentral';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <TextoCentral>
        Olá
      </TextoCentral>
    </View>
  );
}
