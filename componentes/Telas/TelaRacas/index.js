import React from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';

import estilo from './estilo';

export default function TelaRacas(props) {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE AS RACAS*/}
                <View style={estilo.box}>
                    <Text style={estilo.titulo}>Sobre as raças:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            As raças de Arton (Continente onde se passa Tormenta 20 RPG) são muito variadas entre si. Algumas raças são mais numerosas ou têm
                            papel predominante na história de Arton — hu¬manos, anões, dahllan, elfos, goblins, lefou, minotauros e qareen.
                        </Text>
                        <Text style={estilo.paragrafo}>
                            O povo do continente está acostumado a ver membros dessas raças.
                        </Text>
                        <Text style={estilo.paragrafo}>
                            Uma vila humana pode ter um ferreiro anão, por exemplo, e ninguém ficará surpreso. Mas
                            essas não são as únicas raças de Arton.
                        </Text>
                        <Text style={estilo.paragrafo}>
                            Dentre toda a variedade dos seres deste mundo, há um grupo de raças mais raras: golens,
                            hynne, kliren, medusas, osteon, sereias, sílfides, suraggel e trogs. A maioria das pessoas nunca viu um membro dessas raças.
                            Pode considerar que são míticas, que foram extintas ou que jamais pisaram no continente.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD CARACTERISTICAS DA RACA*/}
                <View style={estilo.box}>
                    <Text style={estilo.titulo}>Características da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Modificadores de Atributo</Text>
                        <Text style={estilo.paragrafo}>
                            Sua raça modifica seus atributos, podendo aumentá-los acima de 18. Um modificador de raça nunca baixa um valor de
                            atributo para menos de 3.
                        </Text>

                        <Text style={estilo.topico}>Habilidades de Raça</Text>
                        <Text style={estilo.paragrafo}>
                            Você possui todas as habilidades de sua raça. Consulte a seção “Clas-ses” para as regras de como usar habilidades.
                        </Text>

                        <Text style={estilo.topico}>Tamanho & Deslocamento</Text>
                        <Text style={estilo.paragrafo}>
                            Sua raça define seu tamanho e deslocamento. A menos que especificado o contrário, seu tamanho é Médio e seu
                            deslocamento é 9m. Veja mais sobre essas características na página 106.
                        </Text>
                    </ScrollView>
                </View>

                {/*LISTAGEM DAS RACAS*/}
                <Text style={estilo.tituloracas}>Listagem das Raças</Text>
                <Text style={estilo.descricao}>Clique para checar cada raça</Text>

                {/*BOTOES COM CADA RACA*/}
                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Humanos') }}>
                        <Text style={estilo.texto}>Humanos</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Anões') }}>
                        <Text style={estilo.texto}>Anões</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Dahllans') }}>
                        <Text style={estilo.texto}>Dahllans</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Elfos') }}>
                        <Text style={estilo.texto}>Elfos</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Goblins') }}>
                        <Text style={estilo.texto}>Goblins</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Lefous') }}>
                        <Text style={estilo.texto}>Lefous</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Minotauros') }}>
                        <Text style={estilo.texto}>Minotauros</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Qareens') }}>
                        <Text style={estilo.texto}>Qareens</Text>
                    </Pressable>
                </View>

                <Text style={estilo.tituloracas}>Raças Extras</Text>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Golens') }}>
                        <Text style={estilo.texto}>Golens</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Hynnes') }}>
                        <Text style={estilo.texto}>Hynnes</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Klirens') }}>
                        <Text style={estilo.texto}>Klirens</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Medusas') }}>
                        <Text style={estilo.texto}>Medusas</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Osteons') }}>
                        <Text style={estilo.texto}>Osteons</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Sereias/Tritões') }}>
                        <Text style={estilo.texto}>Sereias e cia.</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Silfides') }}>
                        <Text style={estilo.texto}>Sílfides</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Suraggels') }}>
                        <Text style={estilo.texto}>Suraggels</Text>
                    </Pressable>
                </View>

                <Pressable style={estilo.ultimobotao} onPress={() => { props.navigation.navigate('Trogs') }}>
                    <Text style={estilo.texto}>Trogs</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}