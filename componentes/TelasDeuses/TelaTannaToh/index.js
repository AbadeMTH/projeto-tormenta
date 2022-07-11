import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import TannaToh from '../../../assets/imagensDeuses/Tanna-Toh.png';

import estilo from '../estilo';

export default function TelaTannaToh() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS TANNATOH*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Tanna-Toh:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Em uma sociedade
              medieval típica, apenas
              membros do clero ou
              da nobreza teriam acesso a boa educação —
              camponeses jamais saberiam ler e escrever. Não
              é assim no Reinado de Arton, graças ao empenho da igreja
              de Tanna-Toh. Devotos da Deusa do Conhecimento
              atuam como professores, catequistas e pesquisadores, tomando a missão sagrada de levar educação e
              cultura para todos. Tanna-Toh é amplamente venerada pelos povos civilizados, amada por aqueles que
              se devotam aos estudos ou artes. Ainda assim, esta
              deusa é inimiga de povos bárbaros que escolhem
              permanecer ignorantes e selvagens.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE TANNATOH*/}
        <Image style={estilo.img} source={TannaToh} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Reverenciar a mente
              racional, o conhecimento, a civilização, a verdade.
              Proteger o progresso, o avanço dos povos civilizados. Promover o ensino e a prática das artes e
              das ciências. Solucionar todos os mistérios, revelar
              todas as mentiras. Buscar novo conhecimento. Não
              tolerar a ignorância.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Golens, kliren, arcanistas, bardos,
              inventores, nobres, paladinos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Rolo de pergaminho e
              pena.
            </Text>
          </ScrollView>
        </View>

        {/*CARD CANALIZAR ENERGIA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Canalizar Energia:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Qualquer.
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
              Tanna-Toh jamais podem recusar uma missão que
              envolva a busca por um novo conhecimento ou informação; investigar rumores sobre um livro perdido,
              procurar uma aldeia lendária, pesquisar os hábitos
              de uma criatura desconhecida...
              Além disso, o devoto sempre deve dizer a verdade e nunca pode se recusar a responder uma pergunta direta, pouco importando as consequências. É
              proibido para ele esconder qualquer conhecimento.
              seu nível.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Conhecimento Enciclopédico, Mente Analítica, Voz da Civilização.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}