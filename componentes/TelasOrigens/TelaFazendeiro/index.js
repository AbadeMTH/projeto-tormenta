import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaFazendeiro() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Fazendeiros:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Boa parte da população de Arton jamais conheceu outro modo de viver. Em algum lugar na perigosa transição entre os
                            ermos e as cidades, você trabalhou duro em campos e fazendas. Cultivando a terra ou criando animais, viveu longos
                            anos em contato com a natureza, orando e trabalhando por boas colheitas ou gado saudável, só ocasionalmente visitando
                            povoados para negociar sua produção. Por que essa vida tranquila acabou? Sua família foi assassinada por goblins?
                            Sua fazenda foi devastada por um dragão? Ou você apenas foi atraído pelo chamado da aventura?
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Uma ferramenta agrícola (mesmas estatísticas de uma lança), 10 rações de viagem, um animal não combativo (como uma
                        galinha, porco ou ovelha).
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Adestramento, Cavalgar, Ofício (fazendeiro), Sobrevivência (perícias); Água no Feijão, Ginete (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Água no Feijão (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Você gasta apenas metade da matéria-prima para testes de Ofício (cozinheiro).
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}