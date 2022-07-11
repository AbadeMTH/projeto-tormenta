import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Megalokk from '../../../assets/imagensDeuses/Megalokk.png';

import estilo from '../estilo';

export default function TelaMegalokk() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS MEGALOKK*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Megalokk:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              O Deus dos Monstros
              é uma divindade de selvageria e descontrole —
              quando bárbaros entram
              em fúria, diz-se que estão apenas canalizando
              seu rancor primordial. Enquanto servos de Allihanna promovem harmonia entre a natureza e os povos civilizados, devotos de seu
              irmão sanguinário buscam apenas o extermínio de
              seus inimigos. E, para um servo do Deus dos Monstros, quase tudo que se move é um inimigo...
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE MEGALOKK*/}
        <Image style={estilo.img} source={Megalokk} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Praticar a violência, a
              soberania do mais forte. Jamais reprimir os próprios
              instintos e desejos. Jamais ser domado, desafiar qualquer forma de controle. Jamais oferecer perdão ou
              rendição. Eliminar os fracos. Destruir seus inimigos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Goblins, medusas, minotauros, sulfure, trogs, bárbaros, caçadores, druidas, lutadores.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              A garra de um monstro.
            </Text>
          </ScrollView>
        </View>

        {/*CARD CANALIZAR ENERGIA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Canalizar Energia:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Negativa.
            </Text>
          </ScrollView>
        </View>

        {/*CARD ARMA PREFERIDA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Arma Preferida:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Maça.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Devotos de Megalokk devem entregar-se à ferocidade, descontrole
              e impaciência. Você é proibido de tentar ações que
              exigem calma ou foco, como preparar uma ação,
              escolher 10 ou 20 em um teste ou lançar uma magia
              sustentada. O devoto também é obrigado a rejeitar
              os modos civilizados. Você é proibido de tentar
              qualquer teste de perícia baseada em Inteligência ou
              Carisma (exceto Intimidação).
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Olhar Amedrontador,
              Urro Divino, Voz dos Monstros.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}