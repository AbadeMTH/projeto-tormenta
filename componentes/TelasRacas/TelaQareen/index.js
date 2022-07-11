import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import Qareen from '../../../assets/imagensRacas/Qareens.png';

import estilo from '../estilo';

export default function TelaQareen() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE OS QAREENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Qareens:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Descendentes de poderosos gênios, os qareen são otimistas, generosos e prestativos, sempre ansiosos por ajudar.
                            Consideram-se abençoados pela Deusa da Magia, exibindo como evidência a marca de Wynna em seus corpos. Sua magia é
                            mais poderosa quando usada para realizar desejos de outros.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM QAREEN*/}
                <Image style={estilo.img} source={Qareen} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Carisma +4, Inteligência +2, Sabedoria –2</Text>

                        <Text style={estilo.topico}>Desejos</Text>
                        <Text style={estilo.paragrafo}>
                            Se lançar uma magia que alguém tenha pedido desde seu último turno, o custo da magia diminui em –1 PM. Fazer um
                            desejo ao qareen é uma ação livre.
                        </Text>

                        <Text style={estilo.topico}>Resistência Elemental</Text>
                        <Text style={estilo.paragrafo}>
                            Conforme sua ascendência, você recebe resistência 10 a um tipo de dano. Escolha uma: frio (qareen da água),
                            eletricidade (do ar), fogo (do fogo), ácido (da terra), luz (da luz) ou trevas (qareen das trevas).
                        </Text>

                        <Text style={estilo.topico}>Tatuagem Mística</Text>
                        <Text style={estilo.paragrafo}>
                            Você pode lançar uma magia de 1º círculo a sua escolha (atributo-chave Carisma). Caso aprenda novamente essa magia,
                            seu custo diminui em –1 PM.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}