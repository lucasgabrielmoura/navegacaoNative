import React, { useEffect } from "react";
import { View } from "react-native";
import TextoCentral from "../components/TextoCentral";
import { useRoute, RouteProp } from "@react-navigation/native"
import { propsNavigationStack } from "../navegacao/NavType";

type routeParam = RouteProp<propsNavigationStack, "TelaB">

export default function TelaB(){
    const params = useRoute<routeParam>();
    useEffect(()=>{
        console.warn(params.params.nome)
    })
    return(
        <TextoCentral corFundo="#3b82c4">
            Tela B
        </TextoCentral>
    )
}
