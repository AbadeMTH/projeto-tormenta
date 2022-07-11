import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import SereiaTritao from '../../../assets/imagensRacas/SereiasTritoes.png';

import estilo from '../estilo';

export default function TelaSereiaTritao() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE AS SEREIAS E TRITOES*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre as Sereias e Tritões:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Sendo chamadas sereias quando femininas e tritões quando masculinos, os membros desta raça de torso humanoide e
                            corpo de peixe podem adotar forma bípede para caminhar em terras emersas — algo que têm feito com cada vez mais
                            frequência. Enquanto algumas sereias temem ou desprezam os humanos, outras enxergam Arton como um mundo misterioso,
                            exótico, cheio de oportunidades e aventuras.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM SEREIA E TRITAO*/}
                <Image style={estilo.img} source={SereiaTritao} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>

                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>+2 em Três Atributos Diferentes</Text>

                        <Text style={estilo.topico}>Canção dos Mares</Text>
                        <Text style={estilo.paragrafo}>
                            Você pode lançar duas das magias a seguir: Amedrontar, Comando, Despedaçar, Enfeitiçar, Hipnotismo ou Sono
                            (atributo-chave Carisma). Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM.
                        </Text>

                        <Text style={estilo.topico}>Mestre do Tridente</Text>
                        <Text style={estilo.paragrafo}>
                            Para você, o tridente é uma arma simples. Além disso, você recebe +2 em rolagens de dano com azagaias, lanças e
                            tridentes.
                        </Text>

                        <Text style={estilo.topico}>Transformação Anfíbia</Text>
                        <Text style={estilo.paragrafo}>
                            Você pode respirar debaixo d’água e possui uma cauda que fornece deslocamento de natação 12m. Quando fora d’água,
                            sua cauda desaparece e dá lugar a pernas (deslocamento 9m). Se permanecer mais de um dia sem contato com água, você
                            não recupera PM com descanso até voltar para a água (ou, pelo menos, tomar um bom banho!).
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}