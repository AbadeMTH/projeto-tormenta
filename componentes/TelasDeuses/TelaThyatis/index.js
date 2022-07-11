import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Thyatis from '../../../assets/imagensDeuses/Thyatis.png';

import estilo from '../estilo';

export default function TelaThyatis() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS THYATIS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Thyatis:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              O generoso Deus da
              Ressurreição e Profecia
              representa o perdão, a
              tolerância, as segundas
              chances. Seu dom maior
              é a prevenção ou correção
              dos erros — através de predições que evitam esses erros ou
              reversão das mortes que tenham causado. Para Thyatis, ninguém deve ser castigado por errar e todos
              merecem a chance de aprender com suas falhas, em
              vez de morrer por elas. Dizem que seus clérigos são
              contemplados com poderosos dons de profecia e ressurreição, e seus paladinos nunca morrem!
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE THYATIS*/}
        <Image style={estilo.img} source={Thyatis} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Proteger a vida e
              aqueles necessitados de novas chances. Renegar a
              morte e a mentira. Ajudar os perdidos a encontrar
              seus caminhos e alcançar seus destinos. Oferecer
              clemência, perdão e redenção.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Aggelus, cavaleiros, guerreiros,
              inventores, lutadores, paladinos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Uma ave fênix.
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
              Espada longa.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Devotos de
              Thyatis são proibidos de matar seres inteligentes (Int
              3 ou mais). Podem atacar e causar dano, mas jamais
              levar à morte. Por esse motivo, devotos de Thyatis
              preferem armas e ataques que apenas incapacitam
              seus oponentes ou causam dano não letal.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Ataque Piedoso, Dom da
              Imortalidade, Dom da Profecia, Dom da Ressurreição.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}