import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaAristocrata() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Aristocratas:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você nasceu na nobreza. Recebeu educação sofisticada em assuntos acadêmicos, política mercantil, torneios de
                            cavalaria ou mesmo conjuração arcana, dependendo das tradições em sua linhagem e desejos de seus pais. Você ainda
                            procura cumprir seus compromissos como nobre? Luta para conciliar as expectativas da família com a vida de aventuras?
                            Ou cortou totalmente seus laços com o passado, mantendo apenas alguns pertences valiosos e contatos úteis?
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Joia de família no valor de T$ 100, traje da corte.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Diplomacia, Enganação, Nobreza (perícias); Comandar, Sangue Azul (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sangue Azul (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Você tem alguma influência política, suficiente para ser tratado com mais leniência pela guarda, conseguir uma
                        audiência com o nobre local etc.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}