import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
 } from 'react-native';

//Função para dimensionar statusbar para Android e Ios
const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight+10 : 64;


export default function Header({name}) {
 return (
   <View style={styles.container}>
    <Text style={styles.title}>{name}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#A53860",
        paddingTop: statusBarHeigth,
        flexDirection:'row',
        paddingStart:16,
        paddingEnd:16,
        paddingBottom:20,
        alignContent:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:22,
        color:"#FFEEDB",
        fontWeight:'bold'
    }

})
