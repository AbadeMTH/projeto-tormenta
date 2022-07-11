import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import Golem from '../../../assets/imagensRacas/Golems.png';

import estilo from '../estilo';

export default function TelaGolem() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE OS GOLENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Golens:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Diz-se que estes seres são apenas construtos sem vida, criados não pelos deuses, mas por mortais. No entanto, são
                            movidos por forças vivas — espíritos elementais selvagens, capturados e lacrados por meios mágicos em corpos de pedra
                            e metal. Muitos conformam-se com seus papéis como trabalhadores e soldados, enquanto outros demonstram alta
                            inteligência, personalidade e iniciativa. Podem fazer tudo que outras raças fazem, até mesmo conjurar magias arcanas
                            ou divinas. Será que têm alma? Será que encontrarão os deuses quando chegar sua hora?
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM GOLEM*/}
                <Image style={estilo.img} source={Golem} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Força +4, Constituição +2, Carisma –2</Text>

                        <Text style={estilo.topico}>Canalizar Repaross</Text>
                        <Text style={estilo.paragrafo}>
                            Como uma ação completa, você pode gastar pontos de mana para recuperar pontos de vida, à taxa de 5 PV por PM.
                        </Text>

                        <Text style={estilo.topico}>Chassi</Text>
                        <Text style={estilo.paragrafo}>
                            Seu corpo artificial é resistente, mas rígido. Você recebe +2 na Defesa, mas possui penalidade de armadura –2 e seu
                            deslocamento é 6m. Você leva um dia para vestir ou remover uma armadura (pois precisa acoplar as peças dela a seu
                            chassi).
                        </Text>

                        <Text style={estilo.topico}>Criatura Artificial</Text>
                        <Text style={estilo.paragrafo}>
                            Você é uma criatura do tipo construto. Recebe visão no escuro e imunidade a doenças, fadiga, sangramento, sono e
                            venenos. Além disso, não precisa respirar, alimentar-se ou dormir. Por fim, não recupera pontos de vida por descanso
                            e não se beneficia de habilidades de cura e itens ingeríveis (comidas, poções etc.). Você precisa ficar inerte por
                            oito horas por dia para recarregar sua fonte de energia. Se fizer isso, recupera PM por descanso em condições normais
                            (golens não são afetados por condições boas ou ruins de descanso).
                        </Text>

                        <Text style={estilo.topico}>Espírito Elemental</Text>
                        <Text style={estilo.paragrafo}>
                            Escolha entre água (frio), ar (eletricidade), fogo (fogo) e terra (ácido). Você é imune a dano causado por essa
                            energia. Se fosse sofrer dano mágico dessa energia, em vez disso cura PV em quantidade igual à metade do dano. Por
                            exemplo, se um golem com espírito elemental do fogo é atingido por uma Bola de Fogo que causa 30 pontos de dano, em
                            vez de sofrer esse dano, ele recupera 15 PV.
                        </Text>

                        <Text style={estilo.topico}>Sem Origem</Text>
                        <Text style={estilo.paragrafo}>
                            Como uma criatura artificial, você já foi construído “pronto”. Não teve uma infância — portanto, não tem direito a
                            escolher uma origem e receber benefícios por ela.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}