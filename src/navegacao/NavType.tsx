import { NavigationProp } from "@react-navigation/native";

export type propsNavigationStack = {
    TelaA: undefined,
    TelaB: {
        nome: string,
    },
    TelaC: undefined
}

export type propsStack = NavigationProp<propsNavigationStack>;