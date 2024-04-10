import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { DrawerSideMenu } from "./presentation/routes/DrawerSideMenu";


const App = () => {


  return (

    <NavigationContainer>
      <DrawerSideMenu />
    </NavigationContainer>

  );
};

export default App;
