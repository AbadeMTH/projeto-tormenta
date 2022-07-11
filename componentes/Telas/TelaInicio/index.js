import React from 'react';
import { Text, ImageBackground, View, Image, Pressable, ScrollView } from 'react-native';

import Fundo from '../../../assets/imagensGeral/fundo_olho.png';
import Logo from '../../../assets/imagensGeral/tormenta_logo.png';

import estilo from './estilo';

export default function TelaInicio(props) {
    return (
        <ImageBackground source={Fundo} blurRadius={5} style={estilo.container}>
            {/*CARD SOBRE*/}
            <View style={estilo.card}>
                <Image source={Logo} style={estilo.img} />
                <Text style={estilo.descricao}>
                    Esse aplicativo foi criado como estudo, nele você pode conferir todas Raças, Classes e Origens do livro oficial de Tormenta
                    20 RPG
                </Text>
            </View>
            {/*BOTAO MENU*/}
            <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Menu') }}>
                <Text style={estilo.textobotao}>Toque para ver Raças, Classes e Origens</Text>
            </Pressable>
        </ImageBackground>
    )
}