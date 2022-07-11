import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import Suraggel from '../../../assets/imagensRacas/Suraggels.png';

import estilo from '../estilo';

export default function TelaSuraggel() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE AS SURAGGELS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre as Suraggels:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Descendentes de extraplanares divinos, esta raça é formada por seres com traços angelicais ou demoníacos — ou ambos.
                            Por serem ligados às forças opostas da luz e trevas, suraggel têm traços diferentes quando orientados para seu lado
                            celestial, sendo então conhecidos como aggelus; ou para o lado abissal, assim sendo chamados sulfure. Sua natureza
                            em geral combina com a ascendência, lembrando habitantes dos Mundos dos Deuses, mas eles também podem ser
                            surpreendentes e contraditórios: não se espante muito ao conhecer um aggelus ladino ou um sulfure paladino.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM SURAGGEL*/}
                <Image style={estilo.img} source={Suraggel} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Sabedoria +4, Carisma +2 (Aggelus); Destreza +4, Inteligência +2 (Sulfure).</Text>

                        <Text style={estilo.topico}>Herança Divina</Text>
                        <Text style={estilo.paragrafo}>
                            Você é uma criatura do tipo espírito e recebe visão no escuro.
                        </Text>

                        <Text style={estilo.topico}>Luz Sagrada (Aggelus)</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe +2 em Diplomacia e Intuição. Além disso, pode lançar Luz (como uma magia divina; atributo-chave Carisma).
                            Caso aprenda novamente essa magia, o custo para lançá-la diminui em –1 PM.
                        </Text>

                        <Text style={estilo.topico}>Sombras Profanas (Sulfure)</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe +2 em Enganação e Furtividade. Além disso, pode lançar Escuridão (como uma magia divina; atributochave
                            Inteligência). Caso aprenda novamente essa magia, o custo para lançá-la diminui em –1 PM.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}