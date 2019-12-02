import React from 'react';
import { View, Text } from 'react-native';

export default (props) => {
    return (
        <View>
            <Text>Arrow 1: {props.texto}</Text>
            <Text>Arrow 2: {props.texto}</Text>
        </View>
    )
}