import { StyleSheet, } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { Aboutscreen } from '../screens/about/Aboutscreen';
const Tab = createMaterialTopTabNavigator();


export const TopTabsNavigator = () => {
    return (
        <Tab.Navigator
        
        >
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="About" component={Aboutscreen} />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({})