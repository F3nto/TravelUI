import React from "react";
import {SafeAreaView,View,Text,TouchableOpacity,Image,ImageBackground,StyleSheet,StatusBar,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from "../components/Header";
import colors from "../constants/colors";

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

const detail = ({navigation,route}) => {

return(

    <SafeAreaView style = {styles.container}>

        <StatusBar translucent backgroundColor = 'rgba(0,0,0,0)'/>

        <ImageBackground style = {{flex:0.6}} source = {route.params.images}>

        <View style = {styles.headerStyle}>
            
            <Header navigation = {navigation} icon = 'back'/>   
        
            <Icon name = 'more-vert' style = {{marginTop:50}}  size = {30}/>

        </View>

        <View style = {styles.headerTitleFirst}>

            <Text style = {{width:'70%',fontSize:30,fontWeight:'bold',color:colors.white,marginBottom:70,paddingLeft:10}}>{route.params.placeNames}</Text>

            <View style = {styles.headerTitleSecond}>

                <Icon name = 'star' size={30} color = {colors.orange}/>

                <Text style = {{color:colors.white,fontSize:20,fontWeight:'bold'}}>5.0</Text>

            </View>

        </View>

    </ImageBackground>


    <View style = {styles.detailContainer}>

       
        <View style = {styles.iconContainer}>
            
            <Icon name = 'favorite' size= {30} color={colors.red} />
            
        </View>


        <View style = {styles.detailTitleContainer}>

            <Icon name = 'place' size={30} color = {colors.primary}/>

            <Text style = {{color:colors.primary,fontSize:18}}>{route.params.locationName}</Text>

        </View>

        <Text style = {{color:'#000',fontSize:25,marginTop:20,marginLeft:5}}>About the trip</Text>
               
            
        <Text style = {{color:'#000',fontSize:15,textAlign:'justify',lineHeight:20,marginTop:20}}>{route.params.desc}</Text>



    </View>

    <View style = {styles.footer}>

        <View style = {{flexDirection:'row',alignItems:'center'}}>

            <Text style = {{fontSize:18,fontWeight:'bold',color:colors.white}}>$100</Text>

            <Text style = {{fontSize:15,fontWeight:'bold',color:colors.grey}}>/PER DAY</Text>
        
        </View>

        <TouchableOpacity style = {styles.bookNowBtn}>

            <Text style = {{color:colors.primary,fontSize:16,fontWeight:'bold'}}>Book Now</Text>


        </TouchableOpacity>
        
    </View>                        

    </SafeAreaView>
)

}

export default detail;

const styles = StyleSheet.create({

container : {flex:1,backgroundColor:colors.white},

headerStyle : {flexDirection:'row', alignItems:'center',justifyContent:'space-between',margin:10},

headerTitleFirst : {flexDirection:'row',alignItems:'center',position: 'absolute',bottom:0},

headerTitleSecond: {flexDirection:'row',alignItems:'center',marginLeft:30,marginBottom:70},

detailContainer : {flex:0.3,
                   top:-30,
                   borderTopRightRadius:40,
                   borderTopLeftRadius:40,
                   backgroundColor:colors.white,     
                   paddingVertical:20,
                   paddingHorizontal:20}, 


iconContainer   :  {width:60,height:60,
                    backgroundColor:colors.white,
                    position: 'absolute',right:50,top:-30,
                    borderRadius:100,
                    justifyContent:'center',alignItems:'center',
                    shadowColor:'#000',elevation:15},

detailTitleContainer : {flexDirection:'row',marginTop:5,alignItems:'center'},

footer               : {top:50,
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        backgroundColor:colors.primary,
                        height:70,
                        borderTopLeftRadius:20,borderTopRightRadius:20,
                        paddingHorizontal:20},
                        
bookNowBtn          : {padding:10,justifyContent:'center',alignItems:'center',backgroundColor:colors.white,borderRadius:10}
})