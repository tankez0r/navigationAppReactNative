import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/home/HomeScreen'
import { SettingsScreen } from '../screens/settings/SettingsScreen'
import { ProductsScreen } from '../screens/products/ProductsScreen'
import { globalstyle } from '../theme/theme'
import { ProductScreen } from '../screens/products/ProductScreen'
import { NavigationProp, useNavigation } from '@react-navigation/native'

export type RootStackParamList = {
    Home: undefined,
    Products: undefined,
    Product: { id: number, name: string },
    Settings: undefined

} 


export const StackNavigator = () => {


    const Stack = createStackNavigator<RootStackParamList>()
  

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: globalstyle.StackHeaderStyle
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name='Products' component={ProductsScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen} />
            <Stack.Screen name='Product' component={ProductScreen} />
        </Stack.Navigator>
    )
}
