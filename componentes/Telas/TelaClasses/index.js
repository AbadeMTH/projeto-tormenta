import React from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';

import estilo from './estilo';

export default function TelaClasses(props) {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE AS CLASSES*/}
                <View style={estilo.box}>
                    <Text style={estilo.titulo}>Sobre as classes:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Uma classe é como uma profissão. Ela representa a forma que você escolheu para enfrentar os perigos do mundo e
                            perseguir seus objetivos — com armas, perícias ou magias.
                        </Text>

                        <Text style={estilo.paragrafo}>
                            A classe é a característica mais importante de um personagem e define que papel você terá no grupo de aventureiros.
                            Tormenta20 contém quatorze classes.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.box}>
                    <Text style={estilo.titulo}>Características de classe:</Text>

                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida e Mana</Text>
                        <Text style={estilo.paragrafo}>
                            Sua classe define seus pontos de vida e pontos de mana.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Sua classe define suas perícias treinadas.
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Os tipos de equipamento que você sabe usar (além de armas simples e armaduras leves, que todos os personagens sabem
                            usar).
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD BENEFICIOS POR NIVEL*/}
                <View style={estilo.box}>
                    <Text style={estilo.titulo}>Benefícios por Nível:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando sobe de nível, você ganha três benefícios.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Vida e Mana</Text>
                        <Text style={estilo.paragrafo}>
                            Seus PV e PM aumentam de acordo com a sua classe. Some seu modificador de Constituição aos PV que ganha por nível
                            (mas você sempre ganha pelo menos 1 PV ao subir de nível).
                        </Text>

                        <Text style={estilo.topico}>Habilidades de Classe</Text>
                        <Text style={estilo.paragrafo}>
                            Consulte a tabela da sua classe para saber quais habilidades você ganha
                        </Text>

                        <Text style={estilo.topico}>Bônus em Perícia</Text>
                        <Text style={estilo.paragrafo}>
                            Seu bônus em perícias é igual à metade do seu nível. Assim, a cada nível par (2º, 4º, 6º etc.) ele aumenta em +1.
                            Isso representa o fato de que heróis experientes se tornam mais capazes. Você usa o número antes da barra para
                            perícias treinadas e o número depois da barra para perícias não treinadas.
                        </Text>
                    </ScrollView>
                </View>

                {/*LISTAGEM DAS CLASSES*/}
                <Text style={estilo.tituloracas}>Listagem das Classes</Text>
                <Text style={estilo.descricao}>Clique para checar cada classe</Text>

                {/*BOTOES COM CADA CLASSE*/}
                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Arcanista') }}>
                        <Text style={estilo.texto}>Arcanista</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Bárbaro') }}>
                        <Text style={estilo.texto}>Bárbaro</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Bardo') }}>
                        <Text style={estilo.texto}>Bardo</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Bucaneiro') }}>
                        <Text style={estilo.texto}>Bucaneiro</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Caçador') }}>
                        <Text style={estilo.texto}>Caçador</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Cavaleiro') }}>
                        <Text style={estilo.texto}>Cavaleiro</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Clérigo') }}>
                        <Text style={estilo.texto}>Clérigo</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Druida') }}>
                        <Text style={estilo.texto}>Druida</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Guerreiro') }}>
                        <Text style={estilo.texto}>Guerreiro</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Inventor') }}>
                        <Text style={estilo.texto}>Inventor</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Ladino') }}>
                        <Text style={estilo.texto}>Ladino</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Lutador') }}>
                        <Text style={estilo.texto}>Lutador</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Nobre') }}>
                        <Text style={estilo.texto}>Nobre</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Paladino') }}>
                        <Text style={estilo.texto}>Paladino</Text>
                    </Pressable>
                </View>

            </View>
        </ScrollView>
    )
}