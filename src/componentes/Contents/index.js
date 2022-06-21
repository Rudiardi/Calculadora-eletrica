import React, {useState, useRef} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
 } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

//import {Picker} from '@react-native-picker/picker';
//react select


export default function Contents({bitola,disjutor}) { 
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0.0172);
    const [items, setItems] = useState([
        {label: 'Cobre', value: 0.0172},
        {label: 'Aluminio', value: 0.0282}
      ]);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(0.01);
    const [items2, setItems2] = useState([
        {label: '1%', value: 0.01},
        {label: '2%', value: 0.02},
        {label: '3%', value: 0.03},
        {label: '4%', value: 0.04},
        {label: '5%', value: 0.05},
      ]);


    

 return (
    <View style={styles.total}>
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <View style={styles.organizaTexto}>
                    <Text style={styles.titulos}>Material</Text>
                    <DropDownPicker 
                        dropDownStyle={{fontWeight:'bold'}}
                        style={styles.dropDown}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>       
            </View>
            <View style={styles.subcontainer}>
                <View style={styles.organizaTexto}>
                    <Text style={styles.titulos}>Queda de Tensão (%)</Text>
                    <DropDownPicker 
                        dropDownStyle={{fontWeight:'bold'}}
                        style={styles.dropDown}
                        open={open2}
                        value={value2}
                        items={items2}
                        setOpen={setOpen2}
                        setValue={setValue2}
                        setItems={setItems2}
                    />
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
                    <Text style={styles.result}></Text>
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
        backgroundColor:'#4C3B4D',
        borderWidth:1,
        borderColor:'#A53860',
        borderRadius: 10,
        width:180,
        height:50,
        paddingLeft:60,
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
    },
    listaSusp:{
        height:50,
        width:200,
        backgroundColor:'#4C3B4D',
        color:'#FFEEDB',
        fontWeight:'bold',
    }
})