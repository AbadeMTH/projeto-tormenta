import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import Osteon from '../../../assets/imagensRacas/Osteons.png';

import estilo from '../estilo';

export default function TelaOsteon() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE OS OSTEONS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Osteons:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Esqueletos sempre foram temidos como monstros profanos, movidos por puro rancor pelos vivos. Isso mudou; conhecidos
                            coletivamente como osteon, estes esqueletos demonstram a mesma inteligência e consciência das raças vivas, sendo
                            capazes de adotar quaisquer de suas profissões e devoções. Alguns atribuem seu surgimento à queda de Ragnar, antigo
                            Deus da Morte; outros dizem ser consequência da ascensão de Ferren Asloth como um poderoso lich, transformando a
                            nação de Aslothia em um reino necromante.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM OSTEON*/}
                <Image style={estilo.img} source={Osteon} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>+2 em Três Atributos Diferentes (exceto Constituição), Constituição –2</Text>

                        <Text style={estilo.topico}>Armadura Óssea</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe resistência a corte, frio e perfuração 5.
                        </Text>

                        <Text style={estilo.topico}>Memória Póstuma</Text>
                        <Text style={estilo.paragrafo}>
                            Você se torna treinado em uma perícia (não precisa ser da sua classe) ou recebe um poder geral a sua escolha. Como
                            alternativa, você pode ser um osteon de outra raça humanoide que não humano. Neste caso, você ganha uma habilidade
                            dessa raça a sua escolha. Se a raça era de tamanho diferente de Médio, você também possui sua categoria de tamanho.
                        </Text>

                        <Text style={estilo.topico}>Natureza Esquelética</Text>
                        <Text style={estilo.paragrafo}>
                            Você é uma criatura do tipo morto-vivo. Recebe visão no escuro e imunidade a doenças, fadiga, sangramento, sono e
                            venenos. Além disso, não precisa respirar, alimentar-se ou dormir. Por fim, habilidades mágicas de cura causam dano
                            a você e você não se beneficia de itens ingeríveis (comidas, poções etc.), mas dano de trevas recupera seus PV.
                        </Text>

                        <Text style={estilo.topico}>Preço da Não Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Você precisa passar oito horas sob a luz de estrelas ou no subterrâneo. Se fizer isso, recupera PV e PM por descanso
                            em condições normais (osteon não são afetados por condições boas ou ruins de descanso). Caso contrário, sofre os
                            efeitos de fome.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}