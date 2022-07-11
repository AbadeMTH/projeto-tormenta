import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaNomade() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Nômades:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Até onde se lembra, você nunca pertenceu a um só lugar. Sua família viajava constantemente, como parte de alguma
                            grande caravana comercial, peregrinação religiosa ou algum povo primitivo que nunca praticou agricultura. Ou talvez
                            suas razões para viajar sejam bastante diferentes e pessoais — após a quase extinção de seu povo, muitos elfos temem
                            criar raízes, enquanto a deusa Valkaria exige que seus devotos se mantenham sempre em viagem. Para você, habituado às
                            estradas e sem laços com nenhuma terra, bastou um pequeno passo para se tornar aventureiro.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Bordão, bússola.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Cavalgar, Pilotagem, Sobrevivência (perícias); Lobo Solitário, Mochileiro, Sentidos Aguçados (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Mochileiro (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Você não sofre a penalidade de armadura e a redução de deslocamento por transportar carga pesada.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}