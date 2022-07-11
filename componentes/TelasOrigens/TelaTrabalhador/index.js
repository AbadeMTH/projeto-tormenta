import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaTrabalhador() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Trabalhadores:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Nenhum glamour aqui, apenas trabalho braçal pesado. De origem humilde, sem grandes chances na vida, você trabalhou
                            duro desde muito jovem. Transportou pedras na construção de templos e castelos, carregou sacas de grãos em fazendas,
                            empilhou cargas em portos, puxou arado feito um animal de tração. Talvez sua vida tenha sido um pouco melhor, como
                            servo em um palácio. Ou muito pior, arrastando ou queimando corpos em campos de batalha. Não é surpresa que a
                            carreira como aventureiro, mesmo perigosa, tenha parecido muito mais atraente.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Uma ferramenta pesada (mesmas estatísticas de uma maça ou lança, a sua escolha).
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Atletismo, Fortitude (perícias); Atlético, Esforçado (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Esforçado (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Você não teme trabalho duro, nem prazos apertados. Você recebe um bônus de +2 em todos os testes de perícias
                        estendidos.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}