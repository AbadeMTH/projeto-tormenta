import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaAmigoDosAnimais() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Amigos dos Animais:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode ter sido cavalariço no estábulo de um castelo, criador de gado em uma fazenda, ginete de Namalkah ou mesmo
                            tratador em um zoológico ou circo — em Arton, existem espetáculos circenses com animais em jaulas, que talvez você
                            tenha desejado libertar. Ou então nada disso: desde criança você tem facilidade em lidar com animais, sempre
                            conversou com eles, sentiu ser capaz de compreendê-los. Em certos lugares ou tribos, alguma montaria especial seria
                            destinada a você.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Cão de guarda, cavalo, pônei ou trobo (escolha um).
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Adestramento, Cavalgar (perícias); Amigo Especial (poder).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Amigo Especial (Poder)</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe +5 em testes de Adestramento com animais comuns. Além disso, possui um animal de estimação que o auxilia
                            e o acompanha em suas aventuras. Em termos de jogo, é um aliado que fornece +2 em uma perícia a sua escolha
                            (exceto Luta ou Pontaria e aprovada pelo mestre) e não conta em seu limite de aliados.
                        </Text>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}