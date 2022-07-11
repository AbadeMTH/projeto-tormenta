import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Sszzaas from '../../../assets/imagensDeuses/Sszzaas.png';

import estilo from '../estilo';

export default function TelaSszzaas() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS SSZZAAS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Sszzaas:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              O sibilante Deus da
              Traição não é apenas o
              mais inteligente entre
              os deuses, mas também
              o mais perigoso. Tão perigoso que, certa vez, tentou reunir os Rubis da Virtude — vinte gemas de poder
              contendo a essência de todos os deuses. Chegou a
              ser expulso do Panteão por esse crime, mas sua astúcia não conhecia limites; Sszzaas conseguiu tramar
              um novo plano para ser aceito de volta. Hoje, mesmo após a quase extinção de seu culto, os sszzaazitas
              voltam a se espalhar sobre Arton, agindo em nome
              do Grande Corruptor. Mas será prudente devotar-se
              a um Deus da Traição? Apenas os mais ousados e astutos acreditam que sim.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE SSZZAAS*/}
        <Image style={estilo.img} source={Sszzaas} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Praticar a mentira e a
              trapaça. Buscar sempre a solução mais inteligente.
              Demonstrar que lealdade e confiança são fraquezas,
              devem ser eliminadas. Promover competição, rivalidade, desconfiança. Usar os recursos do inimigo
              para alcançar seus objetivos. Levar outros a se
              sacrificarem em seu lugar.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Medusas, arcanistas, bardos, bucaneiros, inventores, ladinos, nobres.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Uma naja vertendo veneno pelas presas.
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
              Adaga.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              O devoto deve
              fazer um ato de traição, intriga ou corrupção por dia
              (ou por sessão de jogo, o que demorar mais) como
              oferenda a Sszzaas. Pouco importa se o alvo é aliado
              ou inimigo — uns poucos sszzaazitas usam seus
              métodos torpes para ajudar colegas aventureiros em
              suas missões, às vezes sem que eles próprios saibam.
              Sugerir a alguém que foi traído pelo cônjuge,
              influenciar um miliciano a aceitar suborno, instruir
              um mercador a roubar nos preços, levar alguém a ser
              culpado de um crime que não cometeu, forjar uma
              falsificação que incrimina um inocente, enganar um guerreiro para que mate um oponente rendido e inofensivo... Em termos de jogo, uma ação exigindo um
              teste de Enganação com CD mínima 15 + metade do
              seu nível.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Astúcia da Serpente,
              Presas Venenosas, Sangue Ofídico.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}