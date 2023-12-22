import { BackHandler } from "react-native"

export const closeApp = () => {
  localStorage.clear()
  BackHandler.exitApp()
}