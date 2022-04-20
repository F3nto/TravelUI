import React,{useState} from "react";
import {SafeAreaView,View,Text,TouchableOpacity,StyleSheet,Image,TextInput,FlatList,ImageBackground,Dimensions, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from "../components/Header";
import colors from "../constants/colors";

const screenWidth = Dimensions.get('screen').width


const catIcons = [

    <Icon name = 'flight'       size = {30}  color = {colors.primary} />,
    <Icon name = 'beach-access' size = {30}  color = {colors.primary} />,
    <Icon name = 'near-me'      size = {30}  color = {colors.primary} />,
    <Icon name = 'place'        size = {30}  color = {colors.primary} />,


];


const places = [

{
    id : '1',
    name : 'Shwedagon Bagoda',
    location : 'Yangon',
    image : require('../../assets/places/Shwedagon.jpg'),
    detail : 'The Golden Land Bagoda',
    description : 'The Shwedagon is the most sacred Buddhist pagoda in Myanmar, as it is believed to contain relics of the four previous Buddhas of the present kalpa. These relics include the staff of Kakusandha, the water filter of Koṇāgamana, a piece of the robe of Kassapa, and eight strands of hair from the head of Gautama.',

},

{
    id : '2',
    name : 'Bagan',
    location : 'Bagan',
    image : require('../../assets/places/bagan1.jpg'),
    detail : 'Acient Land',
    description : 'According to the Burmese chronicles, Bagan was founded in the second century AD, and fortified in 849 AD by King Pyinbya, 34th successor of the founder of early Bagan.',

},

{
    id : '3',
    name : 'Shwe Kyaung',
    location : 'Mandalay',
    image : require('../../assets/places/shwekyaung.jpg'),
    detail : 'Acient Golden Place',
    description : "Mandalay was founded in 1857 by King Mindon, replacing Amarapura as the new royal capital of the Konbaung dynasty. It was Burma's final royal capital before the kingdom's annexation by the British Empire in 1885.",

},

{
    id : '4',
    name : 'U Pain',
    location : 'Mandalay',
    image : require('../../assets/places/Upain.jpg'),
    detail : 'Acient Golden Place',
    description : "The bridge was built from wood reclaimed from the former royal palace in Inwa. It features 1,086 pillars that stretch out of the water, some of which have been replaced with concrete.",

},

{
    id : '5',
    name : 'Innlay Lake',
    location : 'Naung Shwe',
    image : require('../../assets/places/Innlay.jpg'),
    detail : 'The Golden Land Bagoda',
    description : "Large sections of the lake are covered by floating plants. Its clear and slightly alkaline waters (pH 7.8–8) are home to a diverse fauna and many species found nowhere else in the world (endemics).",

},

{
    id : '6',
    name : 'Myeik Kyun Su',
    location : 'Myeik',
    image : require('../../assets/places/Myeik.jpg'),
    detail : 'The Most Beautiful Islands',
    description : "Geologically, the islands are characterized mainly by limestone and granite. They are generally covered with thick tropical growth, including rainforest, and their shorelines are punctuated by beaches, rocky headlands, and in some places, mangrove swamps. Offshore are extensive coral reefs.",

},


]



const categories = ({navigation,route}) => {


const CategoriesIcons = () => {

return(

    <View style = {styles.categoriesIconsContainer}>

        {catIcons.map((item,index) => {
    
        return(

            <View key = {index} style = {styles.iconsContainer}>{item}</View>


            )
        })}

    </View>
)

}

  
      

const [place,setPlace] = useState()

    return(

        <SafeAreaView style = {styles.container}>

            <ScrollView showsVerticalScrollIndicator = {false}>

            <View style = {styles.headerView}>

                <Header navigation = {navigation} icon = 'menu'/>

                <Image style = {{width:25,height:25,marginRight:10,marginTop:50}} source = {require('../../assets/bell.png')} />


            </View>

            <View style = {styles.content}>

                <View style = {styles.headerTextContainer}>

                    <Text style = {styles.headerText}>Expore the</Text>

                    <Text style = {[styles.headerText,{marginTop:7}]}>Beautiful places</Text>



                    <View style = {styles.inputFirstContainer}>

                        <View style = {styles.inputSecContainer}>

                            <Image style = {{width:30,height:30}} source = {require('../../assets/search.png')}/>

                            <TextInput 
                            placeholder = 'Search place' 
                            style = {{marginLeft:10}}
                            onChangeText = {text => {setPlace(text)}}
                            value = {place} 
                            />

                        </View> 

                    </View>

                </View>

               
                <CategoriesIcons/>

                <Text style = {styles.sectionTitle}>Places</Text>

                <FlatList
                
                data = {places}

                horizontal

                showsHorizontalScrollIndicator = {false}

                renderItem = {({item,index}) => {

                return(

                    <TouchableOpacity onPress = {() => navigation.navigate('detail',{images:item.image , placeNames: item.name, locationName: item.location, desc : item.description})}>

                        <ImageBackground style = {styles.cardImgBg} source = {item.image}>
                            
                            <Text style = {styles.cardTitle}>{item.name}</Text>   

                            <View style = {styles.cardFooter}>

                                <View style = {styles.cardFooterInner}>

                                    <Icon name = 'place' size = {25}  color = {colors.white} />

                                    <Text style = {styles.cardFooterInnerTxt}>{item.location}</Text>

                                </View>


                                <View style = {styles.cardFooterInner}>

                                    <Icon name = 'star' size = {25}  color = {colors.white} />

                                    <Text style = {styles.cardFooterInnerTxt}>5.0</Text>
                                    
                                </View>

                            </View>
                            
                        </ImageBackground>

                        

                    </TouchableOpacity>
                
                )
                }}
                
                    keyExtractor = {(item,index) => index.toString()}
                
                />

                <Text style = {styles.sectionTitle}>Recommended</Text>


                <FlatList

                horizontal

                snapToInterval = {screenWidth - 20}

                contentContainerStyle = {{marginLeft:10}}

                showsHorizontalScrollIndicator = {false}

                data = {places}

                renderItem = {({item,index}) => {

                return(

                    <TouchableOpacity style = {styles.rmcardImgContainer}>


                        <ImageBackground style = {styles.rmcardImg} source = {item.image}>
                            
                            
                            <Text style = {{color:colors.white, fontSize:16, fontWeight:'bold', marginLeft:10, marginTop:10}}>{item.name}</Text>
                            

                            <View style = {styles.rmcardImgLocation}>

                                <Icon name = 'place' size = {25}  color = {colors.white} />

                                <Text style = {styles.cardFooterInnerTxt}>{item.location}</Text>

                            </View>

                            <Text style = {{fontSize:20,color:colors.white,fontWeight:'bold',textAlign:'center',marginTop:30,opacity:0.8}}>{item.detail}</Text>

                           
                        </ImageBackground>
                    </TouchableOpacity>

                   
                )


                }}
                
                    keyExtractor = {(item,index) => index.toString()}
                />




               
                
            </View> 

            </ScrollView>

        </SafeAreaView>



    )

}
export default categories;

const styles = StyleSheet.create({

container : {flex:1},

content   : {flex:1,},

headerView : {flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:colors.primary,padding:30},

headerTextContainer : {backgroundColor:colors.primary,height:100,paddingHorizontal:20},

headerText : {color:colors.white,fontWeight:'bold',fontSize:20},

inputFirstContainer : {alignItems:'center'},

inputSecContainer : {flexDirection:'row',
                    alignItems:'center',
                    padding:20,
                    backgroundColor:colors.white,
                    width:'100%',
                    height:'70%',
                    marginTop:15,
                    borderRadius:10,
                    shadowRadius:10,
                    shadowColor:colors.primary,
                    elevation:10,
                    },

categoriesIconsContainer : {flexDirection: 'row', justifyContent: 'space-between',marginTop:60,marginLeft:15,marginRight:15},

iconsContainer           : {width:50, 
                            height:50, 
                            borderRadius:5 ,
                            backgroundColor:colors.secondary,
                            justifyContent:'center', 
                            alignItems:'center'},


sectionTitle  : {fontSize:25, fontWeight:'bold', marginHorizontal:15, marginVertical:15},

cardImgBg : {width: screenWidth/2, height:220, marginLeft:10, overflow:'hidden', borderRadius:10},

cardTitle : {fontSize:20, color:colors.white, marginLeft:10, marginTop: 10},

cardFooter: {flex:1, flexDirection:'row',justifyContent:'space-between', alignItems:'flex-end'},

cardFooterInner : {flexDirection:'row', alignItems:'center',margin:7},

cardFooterInnerTxt : {fontSize:16, color: colors.white},


rmcardImgContainer   : {margin:10},

rmcardImg   : {width:screenWidth-40,height:200,
               overflow:'hidden',borderRadius:10,
               },


rmcardImgLocation : {flexDirection:'row',alignItems:'center',marginLeft:10,marginTop:10}



})