import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View } from "react-native";
import TextoCentral from "../components/TextoCentral";
import { propsStack } from "../navegacao/NavType";

export default function TelaA(){
    const navigation = useNavigation<propsStack>();
    useEffect(()=>{
        navigation.navigate("TelaC")
    })
    return(
        <TextoCentral corFundo="#e53935">
            Tela A
        </TextoCentral>
    )
}