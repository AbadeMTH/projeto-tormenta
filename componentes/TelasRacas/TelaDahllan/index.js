import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import Dahllan from '../../../assets/imagensRacas/Dahllan.png';

import estilo from '../estilo';

export default function TelaDahllan() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE AS DAHLLANS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre as Dahllans:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Parte humanas, parte fadas, as dahllan são uma raça de mulheres com a seiva de árvores correndo nas veias. Falam com
                            os animais, controlam as plantas — mas também são ferozes em batalha, retorcendo madeira para formar armaduras.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DAHLLAN*/}
                <Image style={estilo.img} source={Dahllan} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Sabedoria +4, Destreza +2, Inteligência -2</Text>

                        <Text style={estilo.topico}>Amiga das Plantas</Text>
                        <Text style={estilo.paragrafo}>
                            Você pode lançar a magia Controlar Plantas (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo
                            diminui em –1 PM.
                        </Text>

                        <Text style={estilo.topico}>Armadura de Allihanna</Text>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação de movimento e 1 PM para transformar sua pele em casca de árvore, recebendo +2 na Defesa
                            até o fim da cena.
                        </Text>

                        <Text style={estilo.topico}>Empatia Selvagem</Text>
                        <Text style={estilo.paragrafo}>
                            Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento para
                            mudar atitude e pedir favores de animais (veja Diplomacia, na página 117). Caso receba esta habilidade novamente,
                            recebe +2 em Adestramento.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}