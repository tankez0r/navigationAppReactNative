import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PrimaryButton } from '../../components/PrimaryButton'
import UseNavigateWithProps from '../../hooks/UseNavigateWithProps'
import { StackActions } from '@react-navigation/native'

export const SettingsScreen = () => {

    const { navigation } = UseNavigateWithProps()

    return (
        <View>
            <Text>SettingsScreen.tsx</Text>

            <PrimaryButton Label='Regresar' onPress={() => { navigation.goBack() }} />
            <PrimaryButton Label='Volver a Home' onPress={() => { navigation.dispatch(StackActions.popToTop()) }} />
        </View>
    )
}


const styles = StyleSheet.create({})