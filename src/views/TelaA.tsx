import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, View } from "react-native";
import TextoCentral from "../components/TextoCentral";
import { propsStack } from "../navegacao/NavType";

export default function TelaA(){
    const navigation = useNavigation<propsStack>();
    const testeDado:string = "olá"
    return(
        <> 
            <TextoCentral corFundo="#e53935">
                Tela A
            </TextoCentral>
            <Button title="Tela B" onPress={()=> navigation.navigate("TelaB",{nome: testeDado})}/>
            <Button title="Tela C" onPress={()=> navigation.navigate("TelaC")}/>
        </>
    )
}