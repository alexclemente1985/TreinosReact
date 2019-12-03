import React from 'react';
import { createDrawerNavigator} from 'react-navigation';

import Simples3 from './components/Simples3';
import EvenOdd from './components/EvenOdd';
import Invert, { MegaSena } from './components/Multi';
import Counter from './components/Counter';
import Platforms from './components/Platforms';
import ValidarProps from './components/PropsValidation';

export default createDrawerNavigator({
   ValidarProps: {
       screen: () => <ValidarProps ano = {19} />
   },
   Platforms:{
       /* screen: () => <Platforms /> */
       screen: Platforms
   },
    Counter: {
       screen: () => <Counter numeroInicial={1000}/>
   },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena'}
    },
    Invert: {
        screen: () => <Invert texto='React-Native'/>
    },
    EvenOdd: {
        screen: () => <EvenOdd numero={30} />,
        navigationOptions: { title: 'Par & Ímpar'}
    },
    Simples3: {
        screen:() => <Simples3 texto='Fléxi 3!!!'/>
    }

},{ drawerWidth: 300});