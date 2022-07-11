import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaHerdeiro() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Herdeiros:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pertence a uma linhagem de nobres, mercadores, conjuradores, acadêmicos, assassinos, ou outra atividade
                            tradicional em sua família — tão tradicional que, de você, não se espera outra coisa. Pode ser uma longa e
                            antiquíssima ascendência, traçada até antes da Grande Batalha, ou você apenas é filho de uma importante
                            personalidade. Talvez tenha nascido em alguma ordem de cavalaria em Bielefeld, ou uma influente estirpe da nobreza
                            de Deheon, ou como filho de um célebre arquimago com planos de enviá -lo à Academia Arcana, ou até cresceu em um
                            culto familiar secreto a um deus maligno. Graças a essa herança, recebeu treino e equipamento adequados. Mas você
                            pretende mesmo seguir esse caminho?
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Um símbolo de sua herança, como um anel de sinete ou manto cerimonial. Enquanto estiver com esse item, você pode
                            ser reconhecido por sua descendência, o que pode ser bom... ou não!
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Misticismo, Nobreza, Ofício (perícias); Comandar, Herança (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Herança (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Você herdou um item de preço de até T$ 1.000. Você pode escolher este poder duas vezes, para um item de até T$ 2.000.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}