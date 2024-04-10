import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PrimaryButton } from '../../components/PrimaryButton';
import { DrawerActions } from '@react-navigation/native';
import UseNavigateWithProps from '../../hooks/UseNavigateWithProps';

export const ProfileScreen = () => {
    const { top } = useSafeAreaInsets();

    const { navigation } = UseNavigateWithProps()

    return (
        <View style={{ flex: 1, paddingHorizontal: 20, marginTop: top + 20 }}>

            <Text>ProfileScreen.tsx</Text>
            <PrimaryButton Label='Abrir menú' onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer) }} />
        </View>
    )
}


const styles = StyleSheet.create({})