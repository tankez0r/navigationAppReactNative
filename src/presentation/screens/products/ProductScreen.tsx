import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/StackNavigator'

export const ProductScreen = () => {

    const { id, name } = useRoute<RouteProp<RootStackParamList, 'Product'>>().params;

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: name })
    }, [])


    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({})