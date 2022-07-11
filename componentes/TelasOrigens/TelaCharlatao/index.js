import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaCharlatao() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Charlatães:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você sempre teve talento para resolver problemas com conversa, sincera ou nem tanto. Talvez tenha aprendido andando
                            com más companhias. Por ser pequeno e fraco em meio a guerreiros truculentos, talvez fosse pura questão de
                            sobrevivência. Ou foi tocado por Hyninn, Sszzaas ou outra entidade traiçoeira. Seja como for, após um pouco de
                            diálogo, você percebe o que as pessoas mais querem ou temem, usando palavras para vencer obstáculos e abrir caminhos
                            tão facilmente quanto espadas e magias. Ou melhor.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Joia falsificada (valor aparente de T$ 100, sem valor real), kit de disfarces (esse é de verdade).
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Enganação, Jogatina (perícias); Alpinista Social, Aparência Inofensiva, Sortudo (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Alpinista Social (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode substituir testes de Diplomacia por testes de Enganação.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}