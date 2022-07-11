import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Khalmyr from '../../../assets/imagensDeuses/Khalmyr.png';

import estilo from '../estilo';

export default function TelaKhalmyr() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS KHALMYR*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Khalmyr:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Antigo líder do Panteão, o Deus da Justiça
              já foi considerado a divindade mais popular
              no Reinado. Isso mudaria com a vitória dos minotauros nas Guerras Táuricas, bem como a recente
              ascensão de Valkaria como nova líder dos deuses. Mesmo assim, Khalmyr ainda é louvado por aqueles que lutam pela ordem e justiça. As
              duas maiores ordens de cavaleiros em Arton foram
              criadas em sua honra: a Ordem da Luz e a Ordem de
              Khalmyr. Esta é também uma das divindades principais dos anões, junto de Tenebra — conforme a crença,
              ambos teriam gerado juntos a raça anã.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE KHALMYR*/}
        <Image style={estilo.img} source={Khalmyr} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Praticar a caridade e
              o altruísmo. Defender a lei, a ordem e os necessitados. Combater a mentira, o crime e o mal. Oferecer
              clemência, perdão e redenção. Lutar o bom combate.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Aggelus, anões, cavaleiros, guerreiros,
              nobres, paladinos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Espada sobreposta a uma
              balança.
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
              Espada Longa.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Devotos de Khalmyr não podem recusar pedidos de ajuda feitos por
              pessoas inocentes. Também devem cumprir as ordens
              de superiores na hierarquia da igreja (qualquer devoto
              do Deus da Justiça de nível maior) e só podem usar
              itens mágicos criados por devotos do mesmo deus.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Coragem Total, Dom
              da Verdade, Espada Justiceira.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}