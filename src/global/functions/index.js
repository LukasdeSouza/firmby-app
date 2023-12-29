import AsyncStorage from "@react-native-async-storage/async-storage"
import { BackHandler } from "react-native"

export const closeApp = () => {
  AsyncStorage.clear()
  BackHandler.exitApp()
}

export const setUserLogged = async () => {
  await AsyncStorage.setItem('@userLogged-firmby', 'logado')
}