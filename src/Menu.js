import React from 'react';
import {createDrawerNavigator} from 'react-navigation';

import Simples3 from './components/Simples3';
import EvenOdd from './components/EvenOdd';
import Invert, {MegaSena} from './components/Multi';
import Counter from './components/Counter';
import Platforms from './components/Platforms';
import ValidarProps from './components/PropsValidation';
import Evento from './components/Event';
import Avo from './components/DirectCom';
import SyncText from './components/IndirectCom';
import FlexList from './components/FlexList';

export default createDrawerNavigator(
  {FlexList:{
    screen: FlexList,
    navigationOptions: { title: "Lista (Flex Box)"}
  },
    Callback: {
      screen: () => <SyncText />,
      navigationOptions: { title: "Texto Sincronizado"}
    },
    Avo: {
      screen: () => <Avo nome="Joel" sobrenome=" Pinheiro" />,
    },
    Evento: {
      screen: Evento,
    },
    ValidarProps: {
      screen: () => <ValidarProps ano={19} />,
    },
    Platforms: {
      /* screen: () => <Platforms /> */
      screen: Platforms,
    },
    Counter: {
      screen: () => <Counter numeroInicial={1000} />,
    },
    MegaSena: {
      screen: () => <MegaSena numeros={8} />,
      navigationOptions: {title: 'Mega Sena'},
    },
    Invert: {
      screen: () => <Invert texto="React-Native" />,
    },
    EvenOdd: {
      screen: () => <EvenOdd numero={30} />,
      navigationOptions: {title: 'Par & Ímpar'},
    },
    Simples3: {
      screen: () => <Simples3 texto="Fléxi 3!!!" />,
    },
  },
  {drawerWidth: 300},
);
