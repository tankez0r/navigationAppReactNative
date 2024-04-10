import { StyleSheet, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { IconProps } from 'react-native-vector-icons/Icon';



export const IonicIcon = (props: IconProps) => {
    return (
        <View>
            <Icon {...props} />
        </View>
    )
}


const styles = StyleSheet.create({})