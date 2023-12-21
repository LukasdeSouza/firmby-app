import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomePage from '../pages/HomePage'
import IconButtonHeaderRight from '../components/HeaderRight'
import LoginPage from '../pages/LoginPage'
import LocalizationPage from '../pages/LocalizationPage'
import PhoneNumber from '../pages/PhoneNumber'


const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          title: 'Cadeiras Store',
          headerBackButtonMenuEnabled: true,
          headerLeft: (() => (
            <IconButtonHeaderRight  />
          ))
        }}
      />
      <Stack.Screen
        name="Telefone"
        component={PhoneNumber}
        options={{
          title: 'Telefone',
          headerBackButtonMenuEnabled: true,
        }}
      />
      <Stack.Screen
        name="Endereço"
        component={LocalizationPage}
        options={{
          title: 'Endereço',
          headerBackButtonMenuEnabled: true,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{
          title: 'Login',
          headerBackButtonMenuEnabled: true,
        }}
      />
    </Stack.Navigator>
  )
}

export default Routes