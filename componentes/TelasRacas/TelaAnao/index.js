import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Anao from '../../../assets/imagensRacas/Anoes.png';

import estilo from '../estilo';

export default function TelaAnao() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE OS ANOES*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Anões:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Anões são o mais resiliente dos povos. Em suas cidadelas subterrâneas, trabalham duro escavando minas e forjando
                            metal em belas armas, armaduras e joias. São honestos e determinados, honrando a família e a tradição. Apesar de
                            sua profunda paixão por forja e cerveja, pouca coisa é mais preciosa para um anão que cultivar uma barba longa e
                            orgulhosa.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM ANAO*/}
                <Image style={estilo.img} source={Anao} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Constituição +4, Sabedoria +2, Destreza +2</Text>

                        <Text style={estilo.topico}>Conhecimento das Rochas</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.
                        </Text>

                        <Text style={estilo.topico}>Devagar e Sempre</Text>
                        <Text style={estilo.paragrafo}>
                            Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga.
                        </Text>

                        <Text style={estilo.topico}>Duro Como Pedra</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe +3 pontos de vida no 1º nível e +1 por nível seguinte.
                        </Text>

                        <Text style={estilo.topico}>Tradição de Heredrimm</Text>
                        <Text style={estilo.paragrafo}>
                            Você é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de
                            ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques
                            com essas armas.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}