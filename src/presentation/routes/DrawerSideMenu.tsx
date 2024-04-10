import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { StackNavigator } from './StackNavigator';
import { globalstyle } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabNavigator';


export type SideMenuParamList = {
    Profile: undefined,
    StackNavigator?: undefined,
    Tabs: undefined
}


const Drawer = createDrawerNavigator<SideMenuParamList>();

export const DrawerSideMenu = () => {
    const dimension = useWindowDimensions()
    return (
        <Drawer.Navigator
            drawerContent={(props) => (<CustomDrawercontent {...props} />)}
            screenOptions={
                {
                    headerShown: false,
                    drawerType: (dimension.width >= 700) ? 'permanent' : 'slide',
                    drawerActiveBackgroundColor: globalstyle.primaryButton.backgroundColor,
                    drawerActiveTintColor: 'white',
                    drawerInactiveTintColor: globalstyle.primaryButton.backgroundColor
                }
            }

        >
            {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
            <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
            <Drawer.Screen name='Profile' component={ProfileScreen} />
        </Drawer.Navigator>
    );
}



const CustomDrawercontent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={{
                height: 200, backgroundColor: globalstyle.primaryButton.backgroundColor,
                margin: 30, borderRadius: 50
            }}>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}


