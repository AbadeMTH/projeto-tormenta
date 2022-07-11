import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import Minotauro from '../../../assets/imagensRacas/Minotauros.png';

import estilo from '../estilo';

export default function TelaMinotauro() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE OS MINOTAUROS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Minotauros:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Povo guerreiro, orgulhoso e poderoso, criadores de uma civilização avançada, com a missão sagrada de proteger e
                            governar os fracos — ou assim se enxergavam. Em seus tempos áureos, tomaram grande parte de Arton. Hoje, após a morte
                            de sua divindade e a decadência de seu Império, os minotauros lutam para recuperar a glória perdida ou encontrar um
                            novo papel no mundo.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM MINOTAURO*/}
                <Image style={estilo.img} source={Minotauro} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>

                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Força +4, Constituição +2, Sabedoria –2</Text>

                        <Text style={estilo.topico}>Chifres</Text>
                        <Text style={estilo.paragrafo}>
                            Você possui uma arma natural de chifres (dano 1d6, crítico x2, perfuração). Quando usa a ação atacar, pode gastar 1
                            PM para fazer um ataque corpo a corpo extra com os chifres.
                        </Text>

                        <Text style={estilo.topico}>Couro Rígido</Text>
                        <Text style={estilo.paragrafo}>
                            Sua pele é dura como a de um touro. Você recebe +1 na Defesa.
                        </Text>

                        <Text style={estilo.topico}>Faro</Text>
                        <Text style={estilo.paragrafo}>
                            Você tem olfato apurado. Você não fica desprevenido e sofre apenas camuflagem (em vez de camuflagem total) contra
                            inimigos em alcance curto que não possa ver.
                        </Text>

                        <Text style={estilo.topico}>Medo de Altura</Text>
                        <Text style={estilo.paragrafo}>
                            Se estiver adjacente a uma queda de 3m ou mais de altura (como um buraco ou penhasco), você fica abalado.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}