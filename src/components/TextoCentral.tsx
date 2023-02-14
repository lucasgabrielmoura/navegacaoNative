import { StyleSheet, Text, View } from 'react-native';

type childrentype = {
    children: string | JSX.Element | JSX.Element[];
    corFundo?: string;
    corLetra?: string;
}

export default function TextoCentral(props:childrentype) {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: props.corFundo || "#000"}}>
        <Text style={{fontSize: 50, color: props.corLetra || "#fff",}}>
            {props.children}
        </Text>
    </View>
  );
}