import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import Trog from '../../../assets/imagensRacas/Trogs.png';

import estilo from '../estilo';

export default function TelaTrog() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE OS TROGS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Trogs:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Trogloditas (ou “trogs”) são homens- -lagarto primitivos e subterrâneos que odeiam todos os outros seres —
                            especialmente os que sabem forjar aço, aquilo que mais cobiçam. Suas tribos tramam incursões contra povoados humanos,
                            fazem emboscadas em estradas, atacam exploradores em masmorras. Uns poucos, no entanto, divergem da crueldade e
                            selvageria inerentes à raça. Abandonam a tribo ou são expulsos. Escolhem caminhos surpreendentes, inesperados;
                            tornam-se druidas, ou clérigos, ou bucaneiros, ou sabe-se lá o que mais. Enfim, acabam aceitos como colegas por
                            aventureiros tão estranhos e deslocados quanto eles próprios.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM TROG*/}
                <Image style={estilo.img} source={Trog} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Constituição +4, Força +2, Inteligência –2</Text>

                        <Text style={estilo.topico}>Mau Cheiro</Text>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação padrão e 2 PM para expelir um gás fétido. Todas as criaturas (exceto trogs) em alcance
                            curto devem passar em um teste de Fortitude contra veneno (CD Con) ou ficarão enjoadas durante 1d6 rodadas. Uma
                            criatura que passe no teste de resistência fica imune a esta habilidade por um dia.
                        </Text>

                        <Text style={estilo.topico}>Mordida</Text>
                        <Text style={estilo.paragrafo}>
                            Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Quando usa a ação atacar, pode gastar 1
                            PM para fazer um ataque corpo a corpo extra com a mordida.
                        </Text>

                        <Text style={estilo.topico}>Reptiliano</Text>
                        <Text style={estilo.paragrafo}>
                            Você é uma criatura do tipo monstro e recebe visão no escuro, +1 na Defesa e, se estiver sem armadura ou roupas
                            pesadas, +5 em Furtividade.
                        </Text>

                        <Text style={estilo.topico}>Sangue Frio</Text>
                        <Text style={estilo.paragrafo}>
                            Você sofre 1 ponto de dano adicional por dado de dano de frio.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}