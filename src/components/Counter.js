import React, { Component } from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class Counter extends Component {
    //Opção 1: iniciar um estado com o valor recebido de props
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1});
    }

    limpar() {
        //necessita de conversão para arrow function para aceitar a instância do componente e não do return (que virá nulo)
        //Exige que na chamada da função a função tenha "()" para não cair em undefined
        this.setState({numero: this.props.numeroInicial });
    }
    //Opçao 2
    //O this fica restrito ao que foi passado com a chamada da classe
    //Evita problemas com erros de escrita na chamada de funções no return
  /*   constructor(props){
        super(props);
        this.limpar = this.limpar.bind(this); //amarra o this à instância de Counter
    } */

    render (){
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight 
                    onPress={this.maisUm}
                    onLongPress={() => this.limpar()}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}