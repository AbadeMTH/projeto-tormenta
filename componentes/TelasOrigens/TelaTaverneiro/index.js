import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaTaverneiro() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Taverneiros:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Não é incomum que heróis aposentados se tornem donos de tavernas ou estalagens, mas o contrário também pode ocorrer.
                            Você foi dono, filho do dono ou empregado em algum lugar frequentado por aventureiros — esses tipos sempre cheios de
                            ouro e bravatas, atiçando sua ambição. Claro, eles nem sempre mencionam os horrores, amputações e mortes! Ainda
                            assim, parece bem melhor que a vida atrás do balcão, limpando canecas sujas. Você ouviu todas as grandes histórias,
                            trocou socos em algumas brigas e até ganhou uma lembrança ou outra de algum herói bêbado.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Rolo de macarrão ou martelo de carne (mesmas estatísticas de uma clava), uma panela, um avental, uma caneca e um pano
                        sujo.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Diplomacia, Jogatina, Ofício (culinária) (perícias); Gororoba, Proficiência, Vitalidade (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Gororoba (Poder)</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você prepara comidas em uma categoria de tempo menor (uma hora para comidas de até T$ 10, um dia para comidas de até
                            T$ 100 etc.). Você ainda pode sofrer uma penalidade de –5 no teste de Ofício para diminuir o tempo em mais uma
                            categoria (uma hora baixa para dez minutos).
                        </Text>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}