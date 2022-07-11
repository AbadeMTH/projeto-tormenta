import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Allihanna from '../../../assets/imagensDeuses/Allihanna.png';

import estilo from '../estilo';

export default function TelaAllihanna() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS ALLIHANA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Allihanna:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Outrora um dos terríveis Lordes da Tormenta, esta aberração
              monstruosa ambicionava o grande poder
              divino oferecido pelos
              devotos de Arton. Após
              anos liderando seu próprio
              culto profano, Aharadak matou
              Tauron, o Deus da Força, e ascendeu como o novo e
              macabro Deus da Tormenta. Agora ocupando uma posição importante no Panteão, os invasores lefeu avançam mais uma etapa em seus planos para corromper
              Arton. Apenas os devotos mais depravados ousam
              cultuar esta divindade de escatologia e sadismo.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE ALLIHANNA*/}
        <Image style={estilo.img} source={Allihanna} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Reverenciar os seres
              da natureza. Proteger a vida selvagem. Promover
              harmonia entre a natureza e a civilização. Combater
              monstros, mortos-vivos e outras criaturas que perturbam o equilíbrio natural.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Dahllan, elfos, sílfides, bárbaros,
              caçadores, druidas.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Para bárbaros e outros
              adoradores de animais, o símbolo corresponde ao
              respectivo animal. Para outros, uma pequena árvore.
            </Text>
          </ScrollView>
        </View>

        {/*CARD CANALIZAR ENERGIA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Canalizar Energia:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Positiva.
            </Text>
          </ScrollView>
        </View>

        {/*CARD ARMA PREFERIDA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Arma Preferida:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Bordão.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Devotos de
              Allihanna não podem usar armaduras e escudos
              feitos de metal. Assim, você só pode usar armadura
              acolchoada, armadura de couro, gibão de peles e
              escudo leve.
              Devotos de Allihanna não podem descansar em
              nenhuma comunidade maior que uma aldeia (não
              perdem seus poderes, mas também não recuperam
              pontos de vida ou mana). Por isso, sempre preferem
              o relento a um quarto de estalagem.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Dedo Verde, Descanso
              Natural, Voz da Natureza.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}