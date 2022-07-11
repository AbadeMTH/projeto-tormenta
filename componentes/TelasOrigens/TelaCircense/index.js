import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaCircense() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Circenses:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você adquiriu treinamento com acrobacia, malabarismo, mágica ou outra forma de arte circense. Talvez tenha aprendido
                            sozinho, durante as brincadeiras de infância. Talvez tenha sido ensinado por um ente querido, tornando essa arte uma
                            forte ligação com seu passado. Ou ainda, é possível que tenha sido forçado a aprender um ou outro truque para
                            sobreviver nas ruas. De qualquer forma, são aptidões que podem acabar sendo úteis em suas aventuras.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Traje de artista, três bolas coloridas para malabarismo, um baralho.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Acrobacia, Atuação, Reflexos (perícias); Acrobático, Torcida, Truque de Mágica (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Truque de Mágica (Poder)</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode lançar Explosão de Chamas, Hipnotismo e Transmutar Objetos, mas apenas com o aprimoramento Truque. Esta não
                            é uma habilidade mágica — os efeitos provêm de truques e prestidigitação.
                        </Text>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}