import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Arsenal from '../../../assets/imagensDeuses/Arsenal.png';

import estilo from '../estilo';

export default function TelaArsenal() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS ARSENAL*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Arsenal:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Outrora um infame
              clérigo guerreiro, o vilão conhecido apenas
              como Mestre Arsenal se
              tornou sumo-sacerdote
              do violento deus Keenn.
              No entanto, após uma longa campanha que envolveu a
              conquista da mais poderosa espada mágica de Arton,
              o clérigo derrotou seu próprio patrono em combate durante um torneio épico, ascendendo ao Panteão
              como o novo Deus da Guerra. Com o objetivo de tornar Arton mais forte, capaz de confrontar qualquer
              inimigo, Arsenal e seus devotos seguem deflagrando
              conflitos por todo o Reinado e além.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE ARSENAL*/}
        <Image style={estilo.img} source={Arsenal} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Promover a guerra e o
              conflito. Vencer a qualquer custo, pela força ou estratégia. Jamais oferecer ou aceitar rendição. Eliminar
              as próprias fraquezas. Conhecer o inimigo como a
              si mesmo. Sempre encontrar condições de vitória;
              quando não existirem, criá-las.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Anões, minotauros, bárbaros, cavaleiros, guerreiros, lutadores.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Um martelo de guerra e
              uma espada longa cruzados sobre um escudo.
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
              Martelo de Guerra.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Um devoto de
              Arsenal é proibido de ser derrotado em qualquer tipo
              de combate ou disputa (como um teste oposto para
              ver quem é mais forte). Caso seu grupo seja derrotado,
              isso também constitui uma violação das obrigações.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Conjurar Arma, Coragem Total, Sangue de Ferro.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}