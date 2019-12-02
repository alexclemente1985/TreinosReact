import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Simples from './components/Simples';
import Simples2 from './components/Simples2';
import Simples3 from './components/Simples3';
import EvenOdd from './components/EvenOdd';


export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        {/* <Text style={styles.f40}>App!</Text> */}
        {/* <Simples texto="Flexível!!!!"/> */}
        {/* <Simples2 texto="Flexível 2!!!!" /> */}
        <Simples3 texto="Fléxi 3!!!!"/>
        <EvenOdd numero = {57} />
      </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
    
  })
