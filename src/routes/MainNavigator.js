import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import home from "../screens/home";
import detail from "../screens/detail";
import categories from "../screens/categories";

const stack = createNativeStackNavigator();







const MainNavigator = () => {

    return(

        <NavigationContainer>

            <stack.Navigator screenOptions = {{headerShown: false}}>

                <stack.Screen name = 'home'       component = {home} />
                <stack.Screen name = 'categories' component = {categories}/>
                <stack.Screen name = 'detail'     component = {detail}/>



            </stack.Navigator>


        </NavigationContainer>


    
        )

}
export default MainNavigator;

