import { useNavigation, StackActions } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";
import TextoCentral from "../components/TextoCentral";
import { propsStack } from "../navegacao/NavType";

export default function TelaC(){
    const navigation = useNavigation<propsStack>();

    return(
        <>
            <TextoCentral corFundo="#9932cd">
                Tela C
            </TextoCentral>
            <Button title="VOLTAR" onPress={()=> navigation.goBack()}/>
            <Button title="Tela C" onPress={()=> navigation.dispatch(StackActions.push("TelaC"))}/>
        </>      
    )
}

