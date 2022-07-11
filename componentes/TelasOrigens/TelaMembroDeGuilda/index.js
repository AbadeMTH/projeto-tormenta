import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaMembroDeGuilda() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Membros de Guilda:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você foi, ou ainda é, membro atuante em uma grande guilda — uma associação de artesãos, mercadores, magos, criminosos
                            ou mesmo aventureiros. A guilda forneceu o treinamento e equipamento necessários para suas atividades, esperando que
                            você seja útil em troca. Você se manteve fiel a seus patronos, cumprindo missões e colhendo os benefícios de
                            pertencer a uma vasta organização? Ou deixou essa vida para trás, sendo agora desprezado ou até caçado por seus
                            antigos mestres?
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Kit de ladrão ou kit de ofício.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Diplomacia, Enganação, Misticismo, Ofício (perícias); Foco em Perícia, Rede de Contatos (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Rede de Contatos (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Graças à influência de sua guilda, você pode usar Diplomacia para obter informação sem custo (veja Investigação).
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}