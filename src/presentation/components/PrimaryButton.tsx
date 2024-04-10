import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalstyle } from '../theme/theme';

interface onPressProps {
    onPress: () => void;
    Label: string
}

export const PrimaryButton = ({ onPress, Label }: onPressProps) => {



    return (
        <Pressable onPress={onPress} style={globalstyle.primaryButton}>
            <Text style={globalstyle.buttonText}>
                {Label}
            </Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({})