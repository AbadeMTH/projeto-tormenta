import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaMarujo() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Marujos:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você foi tripulante em uma embarcação — um barco pesqueiro, caravela pirata, galeão explorador, trirreme dos
                            minotauros, junco tamuraniano... — provavelmente no Mar Negro ou no Mar do Dragão Rei, mas talvez ao longo do
                            imenso Rio dos Deuses. Você também pode ter trabalhado em um veículo exótico, como um dirigível goblin, ou mesmo
                            em uma embarcação mágica, como as naves vivas gog’magogue que viajam entre mundos!
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        T$ 2d6 (seu último salário), corda.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Atletismo, Jogatina, Pilotagem (perícias); Acrobático, Passagem de Navio (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Passagem de Navio (Poder)</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você consegue transporte marítimo para você e seus companheiros, sem custos, desde que todos paguem com trabalho
                            (passar em pelo menos um teste de perícia adequado durante a viagem).
                        </Text>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}