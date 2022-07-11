import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Goblin from '../../../assets/imagensRacas/Goblins.png';

import estilo from '../estilo';

export default function TelaGoblin() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE OS GOBLINS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Goblins:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Estes pequenos seres feiosos conseguiram um lugar entre os povos do Reinado. Podem ser encontrados em todas as grandes
                            cidades, muitos vivendo na imundície, outros prosperando em carreiras que quase ninguém tentaria: espiões, aeronautas
                            , engenhoqueiros. Onde o anão teimoso e o elfo empolado falham, o goblin pode dar um jeito. Porque ele não tem
                            vergonha. Nem orgulho. Nem bom senso.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM GOBLIN*/}
                <Image style={estilo.img} source={Goblin} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Destreza +4, Inteligência +2, Carisma –2.</Text>

                        <Text style={estilo.topico}>Engenhoso</Text>
                        <Text style={estilo.paragrafo}>
                            Você não sofre penalidades em testes de perícia por não usar kits. Se usar o kit, recebe +2 no teste de perícia.
                        </Text>

                        <Text style={estilo.topico}>Espelunqueiro</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe visão no escuro e deslocamento de escalada igual ao seu deslocamento terrestre.
                        </Text>

                        <Text style={estilo.topico}>Peste Esguia</Text>
                        <Text style={estilo.paragrafo}>
                            Seu tamanho é Pequeno (veja a página 106), mas seu deslocamento se mantém 9m. Apesar de pequenos, goblins são rápidos.
                        </Text>

                        <Text style={estilo.topico}>Rato das Ruas</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe +2 em Fortitude e sua recuperação de PV e PM nunca é inferior ao seu nível.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}