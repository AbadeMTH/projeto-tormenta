import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaGuarda() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Guardas:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você atuou como agente da lei em uma vila ou cidade. Nem de longe uma profissão tão glamorosa ou emocionante quanto
                            parece; boa parte de seu trabalho resumia-se a guardar um portão, fazer rondas tediosas ou recolher bêbados em
                            tavernas. Pelo menos você recebeu algum treino em investigação e combate. Também tem consigo alguma boa arma, que
                            “esqueceu” de devolver quando abandonou a milícia para se tornar aventureiro.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Apito, insígnia da milícia, uma arma marcial.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Investigação, Luta, Percepção (perícias); Detetive, Investigador, um poder de combate a sua escolha (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Detetive (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode substituir testes de Percepção e Intuição por testes de Investigação.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}