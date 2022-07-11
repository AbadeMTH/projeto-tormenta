import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Marah from '../../../assets/imagensDeuses/Marah.png';

import estilo from '../estilo';

export default function TelaMarah() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS MARAH*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Marah:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Neste mundo sempre em guerra, devotos
              da Deusa da Paz talvez
              sejam os mais corajosos
              e perseverantes, buscando inspiração em sua padroeira para proteger Arton
              sem usar de violência. Marah
              ensina a suportar qualquer provação,
              demonstrar que brutalidade nunca é a única resposta. Ainda assim, esta não é apenas uma divindade de
              placidez e indolência; devotos de Marah costumam
              ser plenos de bom humor e atitude positiva, sempre prontos para uma nova celebração ou romance...
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE MARAH*/}
        <Image style={estilo.img} source={Marah} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Praticar o amor e a gratidão pela vida, pela bondade dos deuses. Promover a
              paz, harmonia e felicidade. Aliviar a dor e o sofrimento, trazer conforto aos aflitos. Praticar a caridade e o
              altruísmo. Oferecer clemência, perdão e redenção.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Aggelus, elfos, hynne, qareen, bardos, nobres, paladinos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Um coração vermelho.
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
              Não há. Devotos desta deusa
              não podem lançar a magia Arma Espiritual e similares.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Devotos de
              Marah não podem causar dano e impor condições a
              criaturas, exceto fascinado e pasmo (habilidades que
              aumentem o dano causado por seus aliados também
              são proibidas). Em combate, só podem recorrer a
              ações como proteger ou curar — ou então fugir,
              render-se ou aceitar a morte. Um devoto de Marah jamais vai causar violência, nem mesmo para se salvar.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Aura de Paz, Palavras
              de Bondade, Talento Artístico.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}