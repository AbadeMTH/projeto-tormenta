import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Elfo from '../../../assets/imagensRacas/Elfos.png';

import estilo from '../estilo';

export default function TelaElfo() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE OS ELFOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Elfos:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Elfos são seres feitos para a beleza e para a guerra, tão habilidosos com magia quanto com espadas e arcos. Elegantes,
                            astutos, de vidas quase eternas, parecem superiores aos humanos em tudo. Poderiam ter governado toda Arton, não
                            fosse a arrogância herdada de sua deusa. Com a queda de Glórienn, os elfos se tornaram um povo sem uma deusa. Um
                            povo independente. Enquanto alguns veem a falta de uma divindade como uma tragédia, outros acreditam que, pela
                            primeira vez na história, são livres.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM ELFO*/}
                <Image style={estilo.img} source={Elfo} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Inteligência +4, Destreza +2, Constituição –2</Text>

                        <Text style={estilo.topico}>Graça de Glórienn</Text>
                        <Text style={estilo.paragrafo}>
                            Seu deslocamento é 12m (em vez de 9m).
                        </Text>

                        <Text style={estilo.topico}>Herança Feérica</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe +1 ponto de mana por nível.
                        </Text>

                        <Text style={estilo.topico}>Sentidos Élficos</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe visão na penumbra e +2 em Misticismo e Percepção.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}