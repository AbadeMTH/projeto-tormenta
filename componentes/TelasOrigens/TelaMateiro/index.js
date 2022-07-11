import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaMateiro() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Mateiros:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Nem todos em Arton vivem em cidades confortavelmente abastecidas por fazendeiros, mineiros ou pescadores — muitas
                            comunidades ainda obtêm sustento através da caça. Você aprendeu cedo a abater animais selvagens para colocar comida
                            na mesa, ou como esporte de gosto duvidoso. Se você caça com reverência a Allihanna ou apenas coleciona troféus com
                            orgulho, a escolha é sua. De qualquer forma, para alguém habituado a flechar cervos e colocar armadilhas para
                            coelhos, combater ogros, demônios e dragões seria apenas o passo seguinte.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Uma barraca, um arco curto, 20 flechas.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Atletismo, Furtividade, Sobrevivência (perícias); Lobo Solitário, Sentidos Aguçados, Vendedor de Carcaças (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Vendedor de Carcaças (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode fazer testes de Sobrevivência para sustento, como a perícia Ofício.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}