import React from 'react';
import { Text, View, Pressable } from 'react-native';

import estilo from './estilo';

export default function TelaMenu(props) {
    return (
        <View style={estilo.container}>
            {/*CARD SOBRE*/}
            <View style={estilo.card}>
                <Text style={estilo.titulo}>Clique na opção desejada para saber mais sobre</Text>
            </View>

            {/*BOTAO DAS RACAS*/}
            <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Raças') }}>
                <Text style={estilo.texto}>Raças</Text>
            </Pressable>

            {/*BOTAO DAS CLASSES*/}
            <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Classes') }}>
                <Text style={estilo.texto}>Classes</Text>
            </Pressable>

            {/*BOTAO DAS ORIGENS*/}
            <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Origens') }}>
                <Text style={estilo.texto}>Origens</Text>
            </Pressable>

            {/*BOTAO DOS DEUSES*/}
            <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Deuses') }}>
                <Text style={estilo.texto}>Deuses</Text>
            </Pressable>

            {/*BOTAO DOS EQUIPAMENTOS*/}
            <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Equipamentos') }}>
                <Text style={estilo.textoMenor}>Equipamentos</Text>
            </Pressable>
        </View>


    )
}