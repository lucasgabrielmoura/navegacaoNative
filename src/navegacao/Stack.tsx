import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import { propsNavigationStack } from "./NavType";

const {Navigator, Screen} = createStackNavigator<propsNavigationStack>()

export default function StackF(){
    return(
        <Navigator initialRouteName="TelaA" screenOptions={{headerShown: true}}>
            <Screen name="TelaA" component={TelaA} options={{title: "Informações Iniciais", headerTintColor: "#fff", headerStyle: {backgroundColor: '#345cab',},}}/>
            <Screen name="TelaB" component={TelaB}/>
            <Screen name="TelaC" component={TelaC}/>
        </Navigator>
    )
}