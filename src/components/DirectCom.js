import React from 'react';
import {View, Text} from 'react-native';

const fonte = {style: {fontSize: 30}};
//Percorre todos os elementos para passar as propriedades dos seus pais
function filhosComProps(props) {
  return React.Children.map(props.children, c =>
    React.cloneElement(c, {...props, ...c.props}),
  );
}

export const Filho = props => (
  <View>
    <Text {...fonte}>
      Filho: {props.nome}
      {props.sobrenome}
    </Text>
  </View>
);

export const Pai = props => (
  <View>
    <Text {...fonte}>
      Pai: {props.nome}
      {props.sobrenome}
    </Text>
    {/*  {props.children} */}
  {filhosComProps(props)}
  </View>
);

export const Avo = props => (
  <View>
    <Text {...fonte}>
      Avô: {props.nome}
      {props.sobrenome}
    </Text>
     <Pai {...props} nome="Alex">
      <Filho nome="Caio" />

      <Filho nome="Jonas" />
    </Pai>
    <Pai {...props} nome="Raul" sobrenome=" Ramiro">
      <Filho nome="Seixas" />
    </Pai>
  </View>
);

export default Avo;
