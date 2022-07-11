import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Oceano from '../../../assets/imagensDeuses/Oceano.png';

import estilo from '../estilo';

export default function TelaOceano() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS OCEANO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Oceano:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Nestes tempos de
              grande tumulto no plano divino, em meio a
              deuses caindo e ascendendo, o Deus dos Mares está entre os poucos
              ainda imutáveis. Sua antiga época de fúria, quando arrasava civilizações inteiras, foi quase esquecida. Hoje
              o Oceano é sereno, pleno em si mesmo, alienado
              dos conflitos no Panteão — acha os outros deuses
              mesquinhos, disputando ninharias, frente à vastidão de seus domínios. Ainda assim, recebe preces
              de marinheiros, piratas e povos marinhos, orando
              por sua tranquilidade, rogando que suas tempestades sejam breves.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE OCEANO*/}
        <Image style={estilo.img} source={Oceano} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Reverenciar os mares, o oceano e os seres que ali habitam. Promover
              harmonia entre o oceano e o mundo seco. Proteger
              os seres marinhos, mas também os seres do mundo
              seco que se aventuram sobre as ondas. Demandar
              devido respeito ao mar e seu poder.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Dahllan, hynne, minotauros, sereias/
              tritões, bárbaros, bucaneiros, caçadores, druidas.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Uma concha.
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
              Tridente.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              As únicas armas
              permitidas para devotos do Oceano são a azagaia, a
              lança, o tridente e a rede. Podem usar apenas armaduras de couro. O devoto também não pode se manter
              afastado do oceano por mais de uma semana.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Anfíbio, Arsenal das
              Profundezas, Mestre dos Mares.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}