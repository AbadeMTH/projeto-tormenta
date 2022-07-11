import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaAssistenteDeLab() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Assistentes:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você atuou como ajudante para um alquimista, inventor ou mago. Costumava tomar notas, limpar o laboratório, arrumar
                            as ferramentas, vasculhar mercados em busca de ingredientes exóticos, recapturar a aberração antinatural que fugiu
                            da jaula... enfim, não era o trabalho mais fácil, limpo ou seguro do mundo. Exposição prolongada a substâncias e
                            experimentos perigosos talvez tenham prejudicado sua saúde (ou despertado suas habilidades de classe...).
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Kit de Ofício (alquimia).
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Ofício (alquimia), Misticismo (perícias); Esse Cheiro..., Venefício, um poder da Tormenta a sua escolha (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Esse Cheiro... (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe +2 em Fortitude e passa automaticamente em testes de Ofício (alquimia) para identificar itens alquímicos.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}