import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaAmnesico() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Amnésicos:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você perdeu a maior parte da memória. Sabe apenas o próprio nome, ou nem isso. Talvez tenha alguns itens pessoais,
                            mas nenhuma ideia de como os conseguiu — podem ser relíquias de família, presentes de uma pessoa querida ou apenas
                            coisas que pegou de uns viajantes mortos lá atrás. Você não sabe como recebeu seu treinamento; apenas tem uma
                            intuição sobre aquilo que consegue fazer. Seus atuais companheiros são a única família que conhece. Quem sabe,
                            viajando com eles, você descubra algo sobre seu passado.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Um ou mais itens (somando até T$ 100), que podem ser uma pista misteriosa da sua vida antiga.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Em vez de dois benefícios de uma lista, você recebe uma perícia e um poder escolhidos pelo mestre e o poder
                        Lembranças Graduais.
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Lembranças Graduais (Poder)</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Durante suas aventuras, em determinados momentos a critério do mestre, você pode fazer um teste de Sabedoria (CD 10)
                            para reconhecer pessoas, criaturas ou lugares que tenha encontrado antes de perder a memória.
                        </Text>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}