import React from 'react';
import { Text } from 'react-native';
import Pattern from '../styles/Pattern';


/* export */ const Invert = props => {
    const inv = props.texto.split('').reverse().join('');
    return <Text style={Pattern.ex}>{inv}</Text>
} 

/* export  */const MegaSena = props => {
    const [min,max]=[1,60];
    const numeros = Array(props.numeros || 6).fill(0);

    for (let i=0;i< numeros.length; i++){
        let novo = 0;
        while (numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max-min +1))+min;
        }
        numeros[i] = novo;
    }
    numeros.sort((a,b) => a-b);
    return <Text style={Pattern.ex}>{numeros.join(', ')}</Text>
}


export default Invert;
export { Invert, MegaSena };