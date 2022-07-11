import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaGladiador() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Gladiadores:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Em vários pontos do Reinado combates de arena são um entretenimento popular — a ponto de atrair muitos jovens
                            praticantes. Podem ser combates até a morte ou apenas encenações elaboradas ou ainda corridas de cavalo, arquearia e
                            outros esportes não tão sangrentos. Você acabou envolvido nesse mundo glamoroso por ser tradição em sua família, por
                            admirar algum gladiador renomado ou apenas por sede de fama e fortuna. Um evento traumático, uma desilusão ou o puro
                            tédio levou você a abandonar as arenas e aplausos, usando sua experiência em torneios para viver aventuras.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Uma arma marcial ou exótica, um item sem valor recebido de um admirador.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Atuação, Luta (perícias); Atraente, Pão e Circo, Torcida, um poder de combate a sua escolha (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Pão e Circo (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Por seu treino em combates de exibição, você sabe “bater sem machucar”. Pode escolher causar dano não letal sem
                        sofrer a penalidade de –5.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}