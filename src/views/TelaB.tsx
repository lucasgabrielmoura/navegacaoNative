import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import TextoCentral from "../components/TextoCentral";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native"
import { propsNavigationStack, propsStack } from "../navegacao/NavType";

type routeParam = RouteProp<propsNavigationStack, "TelaB">

export default function TelaB(){
    const params = useRoute<routeParam>();
    const navigation = useNavigation<propsStack>();
    return(
        <>
            <TextoCentral corFundo="#3b82c4">
                <Text>
                    Tela B - ID para a Rota:{params.params.nome}
                </Text>
            </TextoCentral>
            <Button title="VOLTAR" onPress={()=> navigation.goBack()}/>
        </>
    )
}
