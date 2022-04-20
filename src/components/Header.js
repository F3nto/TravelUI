import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Image, } from 'react-native'
import colors from '../constants/colors';


const Header = ({navigation,icon}) => {

    return(

        <View>

           
        {icon == 'menu' ?

        <TouchableOpacity>

            <Image style = {{width:25,height:25,tintColor:colors.white,marginLeft:10,marginTop:50}} source = {require('../../assets/menu.png')} />

        </TouchableOpacity>

        :

        <TouchableOpacity onPress = {() => {navigation.goBack()}}>

            <Image style = {{width:25,height:25,tintColor:colors.white,marginLeft:10,marginTop:50}} source = {require('../../assets/arrow.png')} />

        </TouchableOpacity>

        }


                
        </View>     

    )

}
export default Header;


const styles = StyleSheet.create({




})