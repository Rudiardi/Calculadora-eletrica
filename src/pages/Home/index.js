import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//Fazendo o import das paginas de outras pastas
import Header from '../../componentes/Header';
import Contents from '../../componentes/Contents';


export default function App() {
    return (
      <View style={styles.container}>
        <Header name="Calculadora de cabos"/>
        <Contents bitola='4.0' disjutor='40'/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFEEDB'
    }
  })