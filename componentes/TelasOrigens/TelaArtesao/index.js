import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaArtesao() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Artesãos:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            O alfaiate habilidoso em costurar as vestes da nobreza. O marceneiro capaz de consertar uma carroça. O armeiro que
                            forja armas letais. Você foi treinado em sua família, ou por algum mestre, escola ou guilda, para fabricar itens
                            importantes no mundo civilizado. Suas habilidades podem ter sido aprendidas para o trabalho, mas cedo ou tarde
                            acabam se mostrando úteis durante as aventuras.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Kit de ofício (qualquer), um item que você possa fabricar de até T$ 50.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Ofício, Vontade (perícias); Frutos do Trabalho, Sortudo (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Frutos do Trabalho (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Quando passa em um teste de Ofício para sustento, você recebe o dobro do dinheiro.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}