import React, {Component} from 'react';
import { View, Text, TextInput } from 'react-native';
import Pattern from '../styles/Pattern';

export const Entry = props => 
<View>
    <TextInput value={props.texto}
    style={Pattern.input}
    onChangeText={props.callWhenChange} />
</View>

export default class SyncText extends Component {
    state = {
        texto: ''
    }

    changeText = texto => {
        this.setState({texto});
    }

    render(){
        return(
            <View>
                <Text style = {Pattern.font40}>{this.state.texto}</Text>
                <Entry texto={this.state.texto}
                callWhenChange={this.changeText} />
            </View>
        )
    }
}