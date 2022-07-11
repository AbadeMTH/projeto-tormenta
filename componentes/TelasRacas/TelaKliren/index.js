import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import Kliren from '../../../assets/imagensRacas/Klirens.png';

import estilo from '../estilo';

export default function TelaKliren() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE OS KLIRENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Klirens:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Estes visitantes de outro mundo seriam uma combinação entre humanos e gnomos — mas, afinal, o que são gnomos? São
                            uma raça que talvez existisse em Arton, não fosse o envolvimento criminoso de seu deus Tilliann na criação da própria
                            Tormenta. Seja como for, os kliren somam a alta inteligência gnômica e a curiosidade humana, resultando em seres de
                            extrema engenhosidade, criatividade e talento com aparatos mecânicos. Seriam capazes de grandes feitos, talvez até
                            dominar Arton, não fossem a impulsividade e imprudência que por vezes abreviam suas vidas...
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM KLIREN*/}
                <Image style={estilo.img} source={Kliren} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Inteligência +4, Carisma +2, Força –2</Text>

                        <Text style={estilo.topico}>Híbrido</Text>
                        <Text style={estilo.paragrafo}>
                            Sua natureza multifacetada fez com que você aprendesse conhecimentos variados. Você se torna treinado em uma perícia
                            a sua escolha (não precisa ser da sua classe).
                        </Text>

                        <Text style={estilo.topico}>Lógica Gnômica</Text>
                        <Text style={estilo.paragrafo}>
                            Quando faz um teste de atributo ou perícia, você pode gastar 2 PM para substituir o modificador de atributo utilizado
                            por Inteligência. Por exemplo, ao fazer um teste de Atletismo você pode gastar 2 PM para usar seu modificador de
                            Inteligência em vez do modificador de Força.
                        </Text>

                        <Text style={estilo.topico}>Osso Frágeis</Text>
                        <Text style={estilo.paragrafo}>
                            Você sofre 1 ponto de dano adicional por dado de dano de impacto. Por exemplo, se for atingido por uma clava
                            (dano 1d6), sofre 1d6+1 pontos de dano. Se cair de 3m de altura (dano 2d6), sofre 2d6+2 pontos de dano.
                        </Text>

                        <Text style={estilo.topico}>Vanguardista</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe proficiência em armas de fogo e +2 em testes de Ofício (um qualquer, a sua escolha).
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}