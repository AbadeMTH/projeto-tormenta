import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Tenebra from '../../../assets/imagensDeuses/Tenebra.png';

import estilo from '../estilo';

export default function TelaTenebra() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS TENEBRA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Tenebra:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Assim como seu inimigo Azgher vigia e protege Arton durante o
              dia, Tenebra é atenta sob
              as estrelas; nada acontece na noite sem seu conhecimento. A sedutora e
              misteriosa Deusa das Trevas
              é mãe de tudo que anda e rasteja no escuro, dos nobres anões aos sinistros mortos-vivos e trogloditas.
              Ainda que muitas vezes temida, Tenebra sempre protegeu as criaturas noturnas e subterrâneas, bondosas ou malignas. No entanto, com a recente destruição de Ragnar, antigo Deus da Morte, cada vez mais
              cultos necromantes começam a oferecer sacrifícios à
              Mãe Noite.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE TENEBRA*/}
        <Image style={estilo.img} source={Tenebra} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Reverenciar a noite,
              a escuridão, a lua e as estrelas. Proteger segredos
              e mistérios, proteger tudo que é oculto e invisível.
              Reverenciar a não vida e os mortos-vivos, propagar a
              prática da necromancia. Rejeitar o sol e a luz.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Anões, medusas, qareen, osteon,
              sulfure, trogs, arcanistas, bardos, ladinos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Estrela negra de cinco
              pontas.
            </Text>
          </ScrollView>
        </View>

        {/*CARD CANALIZAR ENERGIA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Canalizar Energia:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Negativo.
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
              Tenebra proíbe
              que seus devotos sejam tocados por Azgher, o odiado
              rival. O devoto deve se cobrir inteiramente durante o
              dia, sem expor ao sol nenhum pedaço de pele.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Carícia Sombria,
              Manto da Penumbra, Visão nas Trevas.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}