import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { RootStackParamList } from '../routes/StackNavigator'

const UseNavigateWithProps = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    return (
        { navigation }
    )
}

export default UseNavigateWithProps