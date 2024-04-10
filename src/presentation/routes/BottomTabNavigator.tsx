import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { TopTabsNavigator } from './TopTabsNavigator';
import { IonicIcon } from '../components/IonicIcon';
import { colorPalette } from '../theme/theme';


const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {



    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={{
                tabBarActiveTintColor: colorPalette.primaryColor,
                tabBarActiveBackgroundColor: colorPalette.backgroundColor3,
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: "transparent"
                },

            }}

        >
            <Tab.Screen name="Tab 1" options={{ tabBarIcon: ({ color }) => (<IonicIcon name='egg' color={color} size={20} />) }} component={Tab1Screen} />
            <Tab.Screen name="Tab 2" options={{ tabBarIcon: ({ color }) => (<IonicIcon name='egg' color={color} size={20} />) }} component={TopTabsNavigator} />
            <Tab.Screen name="Tab 3" options={{ tabBarIcon: ({ color }) => (<IonicIcon name='egg' color={color} size={20} />) }} component={Tab3Screen} />
        </Tab.Navigator>
    );
}