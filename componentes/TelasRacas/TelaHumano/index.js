import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

import Humano from '../../../assets/imagensRacas/Humanos.png';

import estilo from '../estilo';

export default function TelaHumano() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE OS HUMANOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Humanos:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            O povo mais numeroso em Arton, humanos são considerados os escolhidos dos deuses, aqueles que governam o mundo. Em
                            sua variedade e adaptabilidade, são encontrados em quase todos os pontos do continente — dos vales férteis do Reinado
                            às vastidões áridas do Deserto da Perdição. São exploradores e desbravadores ambiciosos, sempre buscando algo além.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM HUMANO*/}
                <Image style={estilo.img} source={Humano} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>+2 em Três Atributos Diferentes</Text>
                        <Text style={estilo.paragrafo}>
                            Filhos de Valkaria, Deusa da Ambição, humanos podem se destacar em qualquer caminho que escolherem
                        </Text>

                        <Text style={estilo.topico}>Versátil</Text>
                        <Text style={estilo.paragrafo}>
                            Você se torna treinado em duas perícias a sua escolha (não precisam ser da sua classe). Você pode trocar uma dessas
                            perícias por um poder geral a sua escolha.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}