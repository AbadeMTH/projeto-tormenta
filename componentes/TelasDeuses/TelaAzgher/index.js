import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Azgher from '../../../assets/imagensDeuses/Azgher.png';

import estilo from '../estilo';

export default function TelaAzgher() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS AZGHER*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Azgher:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Venerado pelos povos
              do Deserto da Perdição, o
              Deus-Sol é também cultuado por viajantes, mercadores honestos e todos
              aqueles que combatem as
              trevas. É um deus generoso;
              sua jornada diária derrama calor e conforto sobre Arton. Azgher é como um pai
              severo: responsável, provedor, mas que também exige respeito de seus filhos. Como um olho sempre vigilante nos céus, nada acontece à luz do dia sem que
              Azgher perceba.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE AZGHER*/}
        <Image style={estilo.img} source={Azgher} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Praticar a gratidão pela
              proteção e generosidade do sol. Promover a honestidade, expor embustes e mentiras. Praticar a caridade
              e o altruísmo. Proteger os necessitados. Oferecer
              clemência, perdão e redenção. Combater o mal.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Aggelus, qareen, arcanistas, bárbaros,
              caçadores, cavaleiros, guerreiros, nobres, paladinos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Um sol dourado.
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
              Cimitarra.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              O devoto de
              Azgher deve manter o rosto sempre coberto (com
              uma máscara, capuz ou trapos). Sua face pode ser
              revelada apenas ao sumo-sacerdote ou em seu funeral. Devotos do Sol também devem doar para a
              igreja de Azgher 20% de qualquer tesouro obtido.
              Essa doação deve ser feita em ouro, seja na forma
              de moedas ou itens.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Espada Solar, Habitante do Deserto, Inimigo de Tenebra.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}