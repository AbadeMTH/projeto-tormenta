import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaCapanga() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Capangas:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Agilidade e esperteza são importantes no mundo do crime, mas não são tudo; às vezes é preciso esmurrar alguém. Por
                            ser grande, forte ou mal-encarado, você acabou trabalhando como músculos para algum bandido, ou integrando um bando,
                            quadrilha ou guilda de ladrões. Talvez você não fosse muito bom em bater carteiras nas ruas de Ahlen, mas sabia
                            erguer alguém pelo tornozelo e sacudir até as moedas caírem. Hoje, como aventureiro, você provavelmente deixou essa
                            época para trás — pelo menos até que alguém precise ser “convencido” a colaborar.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Tatuagem ou outro adereço de sua gangue aprimorado (+2 em Intimidação), uma arma simples corpo a corpo.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Luta, Intimidação (perícias); Confissão, um poder de combate a sua escolha (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Confissão (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode usar Intimidação para obter informação sem custo (veja Investigação).
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}