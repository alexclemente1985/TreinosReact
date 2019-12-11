import React from 'react';
import { ScrollView, View, FlatList, Text} from 'react-native';

const alunos = [
    {id:1, nome:"João", nota: 4.9},
    {id:2, nome:"Ana", nota: 9.9},
    {id:3, nome:"Maria", nota: 8.9},
    {id:4, nome:"José", nota: 7.9},
    {id:5, nome:"Franciscco", nota: 6.9},
    {id:6, nome:"Luana", nota: 5.9},
    {id:7, nome:"Mariana", nota: 4.9},
    {id:8, nome:"Rebeca", nota: 7.9},
    {id:9, nome:"Jair", nota: 8.4},
    {id:10, nome:"Leopoldo", nota: 8.9},
    {id:11, nome:"Raul", nota: 7.5},
    {id:12, nome:"Suzie", nota: 7.1},
    {id:13, nome:"Debora", nota: 8.4},
    {id:14, nome:"Lair", nota: 6.9},
    {id:15, nome:"Jairo", nota: 9.9},
    {id:16, nome:"Estevão", nota: 8.9},
    {id:17, nome:"Lurdes", nota: 7.8},
    {id:18, nome:"Renata", nota: 7.0},
];

const itemEstilo ={
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: "#DDD",
    borderWidth: 0.5,
    borderColor: "#222",
    //flex

    alignItems: "center",
    flexDirection: "row",
    /* justifyContent: "space-between", */
    justifyContent: "space-around",
    /* alignItems:"flex-start", */
};

export const Aluno = props =>
<View style={itemEstilo}>
    <Text>Nome: {props.nome}</Text>
    <Text style={{fontWeight: 'bold'}}>nota: {props.nota}</Text>
</View>

export default props =>{
    const renderItem = ({item}) =>{
        return <Aluno {...item}/>
    }

    return(
        <ScrollView>
            <FlatList data ={alunos} renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}