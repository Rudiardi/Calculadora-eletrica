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
    const [valueMaterial, setValue] = useState(0.0172);
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
    const [open3, setOpen3] = useState(null);
    const [value3, setValue3] = useState(220);
    const [items3, setItems3] = useState([
        {label: '127', value: 127},
        {label: '220', value: 220},
      ]);

    const [Potencia,setPotencia]=useState(0)
    const [Comprimento,setComprimento]=useState(0)


    let tamanhoInput = 6;

    let validador = null
    
    let bitolaRec = (2*valueMaterial)*((Potencia*Comprimento)/(value2*value3*value3));
    
    let bitolaExi = null;
    let disjutorExi = null;

    if ((Potencia)>0&&(Comprimento)>0) {
        validador='ok';
    }else{
        validador='erro';
    }


    if (bitolaRec<=1.5) {
        bitolaExi=1.5
        disjutorExi=16;
    } else if (1.5<bitolaRec && bitolaRec<=2.5){
        bitolaExi=2.5;
        disjutorExi=25;
    } 
    else if (2.5<bitolaRec && bitolaRec<=4){
        bitolaExi=4;
        disjutorExi=32;
    } 
    else if (4<bitolaRec && bitolaRec<=6){
        bitolaExi=6;
        disjutorExi=40;
    }
    else if (6<bitolaRec && bitolaRec<=10){
        bitolaExi=10;
        disjutorExi=50;
    }
    else if (10<bitolaRec && bitolaRec<=16){
        bitolaExi=16;
        disjutorExi=70;
    }
    else if (16<bitolaRec && bitolaRec<=25){
        bitolaExi=25;
        disjutorExi=100;
    }
    else if (25<bitolaRec && bitolaRec<=35){
        bitolaExi=35;
        disjutorExi=125;
    }
    else if (35<bitolaRec && bitolaRec<=50){
        bitolaExi=50;
        disjutorExi=150;
    }
    else if (50<bitolaRec && bitolaRec<=70){
        bitolaExi=70;
        disjutorExi=175;
    }
    else if (70<bitolaRec && bitolaRec<=95){
        bitolaExi=95;
    }
    else if (95<bitolaRec && bitolaRec<=120){
        bitolaExi=120;
    }
    else if (120<bitolaRec && bitolaRec<=150){
        bitolaExi=150;
    }
    else if (150<bitolaRec && bitolaRec<=185){
        bitolaExi=185;
    }
    else if (185<bitolaRec && bitolaRec<=240){
        bitolaExi=240;
    }
    else if (240<bitolaRec && bitolaRec<=300){
        bitolaExi=300;
    }
    else if (300<bitolaRec && bitolaRec<=400){
        bitolaExi=400;
    }
    else if (400<bitolaRec && bitolaRec<=500){
        bitolaExi=500;
    }
    else if (500<bitolaRec && bitolaRec<=630){
        bitolaExi=630;
    }
    else if (630<bitolaRec && bitolaRec<=800){
        bitolaExi=800;
    }
    else if (800<bitolaRec && bitolaRec<=1000){
        bitolaExi=1000;
    }
    else {
        bitolaExi = null;
    }




 return (
    <View style={styles.total}>
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <View style={styles.organizaTexto}>
                    <Text style={styles.titulos}>Material</Text>
                    <DropDownPicker 
                        arrowColor='#FFEEDB'
                        textStyle={{fontSize: 20,color: '#FFEEDB', fontWeight:'bold'}}
                        dropDownContainerStyle={{backgroundColor: "#A53860"}}
                        style={styles.dropDown}
                        open={open}
                        value={valueMaterial}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>       
            </View>
            <View style={styles.subcontainer}>
                <View style={styles.organizaTexto}>
                    <Text style={styles.titulos}>Queda de Tens??o (%)</Text>
                    <DropDownPicker 
                        
                        textStyle={{fontSize: 20,color: '#FFEEDB',fontWeight:'bold'}}
                        dropDownContainerStyle={{backgroundColor: "#A53860"}}
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
                <Text style={styles.titulos}>Pot??ncia em Watts (W)</Text>
                <TextInput 
                    style={styles.inputsSingle} 
                    keyboardType={'number-pad'}
                    value={Potencia}
                    multiline={false}
                    maxLength={tamanhoInput}
                    onChangeText={text=>setPotencia(text)}/>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <View style={styles.organizaTexto}>
                    <Text style={styles.titulos}>Comprimento (m)</Text>
                    <TextInput 
                        style={styles.inputs} 
                        keyboardType={'number-pad'}
                        value={Comprimento}
                        maxLength={tamanhoInput}
                        onChangeText={text=>setComprimento(text)}/>
                </View>       
            </View>
            <View style={styles.subcontainer}>
                <View style={styles.organizaTexto}>
                    <Text style={styles.titulos}>Tens??o (V)</Text>
                    <DropDownPicker 
                        textStyle={{fontSize: 20,color: '#FFEEDB',fontWeight:'bold'}}
                        dropDownContainerStyle={{backgroundColor: "#A53860"}}
                        style={styles.dropDown}
                        open={open3}
                        value={value3}
                        items={items3}
                        setOpen={setOpen3}
                        setValue={setValue3}
                        setItems={setItems3}/>
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.organizaTexto}>
                <Text style={styles.titulos}>Bitola Recomendada (mm??)</Text>
                <View style={styles.outputSingle}>
                    {validador=='ok'?<Text style={styles.legenda}>EXATO:{bitolaRec.toFixed(1)}mm??</Text>:<Text></Text>}
                    {validador=='ok'?<Text style={styles.result}>{bitolaExi}</Text>:<Text Text style={styles.result}>...</Text>}
                </View>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.organizaTexto}>
                <Text style={styles.titulos}>Disjuntor recomedado (A)</Text>
                <View style={styles.outputSingle}>
                    {validador=='ok'?<Text style={styles.result}>{disjutorExi}</Text>:<Text Text style={styles.result}>...</Text>}
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
        color:'#4C3B4D',
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
        paddingLeft:75,
        fontSize:20,
        fontWeight:'bold'
    },
    inputsSingle:{
        backgroundColor:'#4C3B4D',
        borderWidth:1,
        borderColor:'#A53860',
        borderRadius: 10,
        color:'#FFEEDB',
        width:300,
        height:50,
        fontSize:20,
        paddingLeft:125,
        fontWeight:'bold'
    },
    dropDown:{
        backgroundColor:'#4C3B4D',
        borderWidth:1,
        borderColor:'#A53860',
        borderRadius: 10,
        width:180,
        height:50,
        paddingLeft:60,
        zIndex: -1
    
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
    },
    legenda:{
        color:'#FFEEDB',
        fontWeight:'bold',
        justifyContent: 'flex-end'

    }
})

//eas build -p android --profile preview  gerar apk