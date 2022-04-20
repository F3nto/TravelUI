import React from "react";
import { SafeAreaView,View,Text,TouchableOpacity,Image,StyleSheet,StatusBar,ImageBackground,Dimensions } from "react-native";

import colors from '../constants/colors'

const screenWidth  = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const home = props =>{

    return(

    <SafeAreaView style = {styles.container}>

            <StatusBar translucent backgroundColor = 'rgba(0,0,0,0)'/>

            <ImageBackground style = {{flex:1,width:screenWidth,height:screenHeight}} source = {require('../../assets/places/van2.jpg')}/>


        <View style = {styles.content}>

            <View style = {styles.textContainerView}>

                <Text style = {styles.titleTextStyle}>Discover</Text>

                <Text style = {styles.titleTextStyle}>world with us</Text>

                <Text style = {styles.welcomeTextStyle}>Thank you for being the special person you are. I love you – go ahead let the world know that!</Text>



                <TouchableOpacity onPress = {() => {props.navigation.navigate('categories')}} style = {styles.btnContainer}>


                    <Text style = {styles.btnText}>Get Started</Text>



                </TouchableOpacity>

                  

            </View>


        

        </View>

    </SafeAreaView>


    )

}

export default home;

const styles = StyleSheet.create({

container : {flex:1},

content   : {flex:1},

textContainerView : {position:'absolute', bottom:0,paddingHorizontal:20,marginBottom:'10%'},

titleTextStyle    : {fontSize:35, color:colors.white, fontWeight:'bold',opacity:0.8},

welcomeTextStyle  : {fontSize:15, color:colors.white,opacity:0.8,lineHeight:25,marginTop:10},

btnContainer      : {width:'40%', 
                     padding:10,
                     backgroundColor:colors.orange,
                     marginTop:15,
                     justifyContent:'center',
                     alignItems:'center',
                     opacity:0.7,
                     borderRadius:10},

btnText           : {fontSize:20,color:colors.white},

})