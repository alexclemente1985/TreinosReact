import React from 'react';
import { View, Text } from 'react-native';
import Pattern from '../styles/Pattern';
import If from './If';


function evenOdd(num){
    /* if(num % 2 ==0){
        return <Text style={Pattern.ex}>Par</Text>;
    }else{
        return <Text style={Pattern.ex}>Ímpar</Text>;
    } */
    const v = num % 2 ==0 ? 'Par' : 'Ímpar';
    return <Text style={Pattern.ex}>{v}</Text>;
}


export default props => 
<View>
    {/* <If test={props.numero % 2 ==0}>
        <Text style={Pattern.ex}>Par</Text>
    </If>
    <If test={props.numero % 1 ==0}>
        <Text style={Pattern.ex}>Ímpar</Text>
    </If> */}
    {evenOdd(props.numero)}
    {/* {
        props.numero % 2 == 0 ? 
        <Text style={Pattern.ex}>Par</Text>
        : <Text style={Pattern.ex}>Ímpar</Text>
    } */}
</View>