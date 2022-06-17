import React, {Component} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    
 } from 'react-native';

export default function Contents({bitola,disjutor}) {
 return (
    <View style={styles.total}>
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <View style={styles.organizaTexto}>
                    <Text style={styles.titulos}>Material</Text>
                    <TextInput style={styles.inputs}/>
                </View>       
            </View>
            <View style={styles.subcontainer}>
                <View style={styles.organizaTexto}>
                    <Text style={styles.titulos}>Queda de Tensão (%)</Text>
                    <TextInput style={styles.inputs} keyboardType={'number-pad'}/>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.organizaTexto}>
                <Text style={styles.titulos}>Potência em Watts (W)</Text>
                <TextInput style={styles.inputsSingle} keyboardType={'number-pad'}/>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <View style={styles.organizaTexto}>
                    <Text style={styles.titulos}>Comprimento (m)</Text>
                    <TextInput style={styles.inputs} keyboardType={'number-pad'}/>
                </View>       
            </View>
            <View style={styles.subcontainer}>
                <View style={styles.organizaTexto}>
                    <Text style={styles.titulos}>Tensão (V)</Text>
                    <TextInput style={styles.inputs} keyboardType={'number-pad'}/>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.organizaTexto}>
                <Text style={styles.titulos}>Bitola Recomendada (mm²)</Text>
                <View style={styles.outputSingle}>
                    <Text style={styles.result}>{bitola}</Text>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.organizaTexto}>
                <Text style={styles.titulos}>Disjuntor recomedado (A)</Text>
                <View style={styles.outputSingle}>
                    <Text style={styles.result}>{disjutor}</Text>
                </View>
            </View>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    total:{
        flex:1 ,
        backgroundColor:'#ADA8B6',
        justifyContent: 'space-around'
    },
    subcontainer:{
        flexDirection:'row',
    },
    titulos:{
        fontSize:18,
        fontWeight:'bold',
        color:'#4C3B4D'
    },
    organizaTexto:{
        justifyContent:'space-around' ,
        alignItems:'center',
    },
    inputs:{
        backgroundColor:'#4C3B4D',
        borderWidth:1,
        borderColor:'#A53860',
        borderRadius: 10,
        color:'#FFEEDB',
        width:180,
        height:50,
        paddingLeft:60
    },
    inputsSingle:{
        backgroundColor:'#4C3B4D',
        borderWidth:1,
        borderColor:'#A53860',
        borderRadius: 10,
        color:'#FFEEDB',
        width:300,
        height:50,
        paddingLeft:60
    },
    dropDown:{
        width:80
    },
    result:{
        color:'#FFEEDB',
        fontSize:90,
        fontWeight:'bold'
    },
    outputSingle:{
        backgroundColor:'#4C3B4D',
        borderWidth:1,
        borderColor:'#A53860',
        borderRadius: 10,
        color:'#FFEEDB',
        width:300,
        height:150,
        justifyContent:'center',
        alignItems:'center'
    }
})