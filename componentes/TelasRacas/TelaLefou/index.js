import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import Lefou from '../../../assets/imagensRacas/Lefous.png';

import estilo from '../estilo';

export default function TelaLefou() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE OS LEFOUS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Lefous:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Com a influência macabra da Tormenta permeando cada vez mais o mundo, surgiram os lefou. Estes meios-demônios de
                            aparência grotesca passaram a nascer em famílias de outras raças, sendo logo sacrificados ou expulsos. Entre os que
                            escapam, por sua facilidade em manifestar poderes aberrantes, muitos escolhem abraçar o mal, enquanto outros decidem
                            combatê-lo.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM LEFOU*/}
                <Image style={estilo.img} source={Lefou} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>+2 em Três Atributos Diferentes (exceto Carisma), Carisma –2</Text>

                        <Text style={estilo.topico}>Cria da Tormenta</Text>
                        <Text style={estilo.paragrafo}>
                            Você é uma criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e pela
                            Tormenta.
                        </Text>

                        <Text style={estilo.topico}>Deformidade</Text>
                        <Text style={estilo.paragrafo}>
                            Todo lefou possui defeitos físicos que, embora desagradáveis, conferem certas vantagens. Você recebe +2 em duas
                            perícias a sua escolha. Cada um desses bônus conta como um poder da Tormenta. Você pode trocar um desses bônus por um
                            poder da Tormenta a sua escolha. Esta habilidade não causa perda de Carisma.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}