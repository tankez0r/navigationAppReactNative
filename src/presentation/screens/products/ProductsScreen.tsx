import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalstyle } from '../../theme/theme'
import { FlatList } from 'react-native-gesture-handler'
import { PrimaryButton } from '../../components/PrimaryButton'
import UseNavigateWithProps from '../../hooks/UseNavigateWithProps'

export const ProductsScreen = () => {
    const { navigation } = UseNavigateWithProps()
    const products = [
        { id: 1, name: "Producto 1" },
        { id: 2, name: "Producto 2" },
        { id: 3, name: "Producto 3" },
        { id: 4, name: "Producto 4" },
        { id: 5, name: "Producto 5" },
        { id: 6, name: "Producto 6" }
    ]

    return (
        <View style={globalstyle.container}>
            <Text style={{ marginBottom: 10, fontSize: 30 }}>Productos</Text>
            <FlatList data={products}
                renderItem={({ item }) => {
                    return (<PrimaryButton Label={item.name}
                        onPress={() => { navigation.navigate('Product', item) }} />)
                }}
            >

            </FlatList>

            <Text style={{ marginBottom: 10, fontSize: 30 }} > Ajustes</Text>
            <PrimaryButton onPress={() => { navigation.navigate("Settings") }} Label='Settings' />
        </View>
    )
}


const styles = StyleSheet.create({})