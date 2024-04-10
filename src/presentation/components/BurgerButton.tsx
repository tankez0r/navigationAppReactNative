import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import UseNavigateWithProps from '../hooks/UseNavigateWithProps'
import { DrawerActions } from '@react-navigation/native'
import { IonicIcon } from './IonicIcon'

export const BurgerButton = () => {


    const { navigation } = UseNavigateWithProps()

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () =>
            (<Pressable style={{ marginLeft: 15 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <IonicIcon name='menu-outline' size={30} color='black' />
            </Pressable>)
        })
    }, [])


    return (
        <></>
    )
}


const styles = StyleSheet.create({})