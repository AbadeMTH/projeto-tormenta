import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Kallyadranoch from '../../../assets/imagensDeuses/Kallyadranoch.png';

import estilo from '../estilo';

export default function TelaKallyadranoch() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS KALLYADRANOCH*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Kallyadranoch:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Como punição imposta
              por Khalmyr pelo crime de
              criar a Tormenta, o Deus
              dos Dragões estava esquecido até poucos anos
              atrás, conhecido apenas
              como “o Terceiro”. Restaurado em tempos recentes durante um combate
              épico contra os invasores aberrantes, Kallyadranoch agora governa não apenas os
              dragões, mas todos que cultuam o poder elemental
              das grandes feras. Além disso, enquanto Wynna representa o lado bondoso e generoso da magia arcana,
              Kally é cultuado por arcanistas malignos.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE KALLYADRANOCH*/}
        <Image style={estilo.img} source={Kallyadranoch} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Praticar a soberania.
              Demonstrar orgulho, superioridade, majestade. Praticar o acúmulo de riquezas. Proteger suas posses e
              sua dignidade. Ser implacável com seus inimigos.
              Reverenciar os dragões e suas crias.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Elfos, medusas, sulfure, arcanistas,
              cavaleiros, guerreiros, lutadores, nobres.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Escamas de cinco cores
              diferentes.
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
              Lança.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Para subir de
              nível, além de acumular XP suficiente, o devoto de
              Kally deve realizar uma oferenda em tesouro. O valor
              é igual à metade da diferença do dinheiro inicial do
              nível que vai alcançar para o nível atual (por exemplo,
              T$ 200 para subir para o 4° nível). Sabe-se, também,
              de devotos malignos que sacrificam vítimas a Kally
              (não permitido para personagens jogadores).
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Aura de Medo, Escamas Dracônicas, Servos do Dragão.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}