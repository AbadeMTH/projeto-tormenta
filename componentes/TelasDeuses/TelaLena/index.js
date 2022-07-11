import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Lena from '../../../assets/imagensDeuses/Lena.png';

import estilo from '../estilo';

export default function TelaLena() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS LENA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Lena:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Mesmo os deuses
              mais violentos e cruéis
              são respeitosos com a
              Deusa Criança, provedora da fertilidade, do sustento, da própria vida.
              Lena não é venerada apenas
              por aventureiros necessitados
              de curas mágicas, mas também por fazendeiros que
              imploram por colheitas fartas, criadores desejosos de
              saúde para seus animais e cada grávida prestes a dar
              à luz. Servida quase exclusivamente por mulheres, a
              Deusa da Vida oferece os mais poderosos milagres de
              cura presenciados em Arton.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE LENA*/}
        <Image style={estilo.img} source={Lena} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Reverenciar e proteger
              a vida em todas as suas formas. Reverenciar a fertilidade, a fecundidade, a maternidade e a infância.
              Praticar a caridade e o altruísmo. Oferecer clemência,
              perdão e redenção. Aliviar a dor e o sofrimento físico,
              mental ou espiritual.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Dahllan, qareen, nobres, paladinos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Lua crescente prateada.
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
              Não há. Servos desta deusa
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
              Lena não podem causar dano letal a criaturas vivas
              (habilidades que aumentem o dano letal causado por
              seus aliados também são proibidas). Podem causar
              dano não letal e prejudicar seus inimigos (em termos
              de jogo, impondo condições), desde que não causem
              dano letal. Para um devoto de Lena, é preferível
              perder a própria vida a tirá-la de outros.
              Apenas mulheres podem ser devotas de Lena.
              Uma clériga precisa dar à luz pelo menos uma vez
              antes de receber seus poderes divinos. A fecundação
              é um mistério bem guardado pelas sacerdotisas;
              conta-se que a própria deusa vem semear suas discípulas. Paladinos de Lena podem ser homens (são os
              únicos devotos masculinos permitidos) ou mulheres.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Ataque Piedoso, Aura
              Restauradora, Cura Gentil, Curandeira Perfeita.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}