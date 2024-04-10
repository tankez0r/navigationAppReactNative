import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { globalstyle } from '../../theme/theme';
import { PrimaryButton } from '../../components/PrimaryButton';
import UseNavigateWithProps from '../../hooks/UseNavigateWithProps';
import { DrawerActions } from '@react-navigation/native';
import { BurgerButton } from '../../components/BurgerButton';

export const HomeScreen = () => {
    const { navigation } = UseNavigateWithProps()



    return (
        <View style={globalstyle.container}>
            <PrimaryButton Label='Products' onPress={() => { navigation.navigate("Products") }} />
            <PrimaryButton Label='Settings' onPress={() => { navigation.navigate("Settings") }} />
        </View>
    )
}


const styles = StyleSheet.create({})