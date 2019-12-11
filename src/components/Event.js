import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Pattern from '../styles/Pattern';

export default class Event extends Component {
  state = {
    texto: '',
  };

  alterarTexto = texto => {
    this.setState({texto});
  };

  render() {
    return (
      <View>
        <Text style={Pattern.font40}>{this.state.texto}</Text>
        <TextInput
          value={this.state.texto}
          style={Pattern.input}
          onChangeText={this.alterarTexto}
        />
      </View>
    );
  }
}
