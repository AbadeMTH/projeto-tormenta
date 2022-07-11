import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Valkaria from '../../../assets/imagensDeuses/Valkaria.png';

import estilo from '../estilo';

export default function TelaValkaria() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS VALKARIA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Valkaria:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              A Deusa da Ambição
              sempre foi a mais ousada entre os seus. Ajudaria a criar os lefeu, a
              própria Tormenta. Criaria os seres humanos,
              povo mais impetuoso e
              beligerante de todos. Acabaria condenada ao cativeiro, até
              ser resgatada por seus próprios protegidos, elevando ainda mais sua glória (ou teria assim planejado
              desde o início?). Mas, quando Mestre Arsenal derrotou Keenn para tomar seu lugar como Deus da
              Guerra, o maior objetivo de Valkaria foi enfim alcançado: um humano superou um deus. Esse evento, e também a morte do antigo líder Tauron, levou
              os deuses a reconhecerem Valkaria como a nova liderança do Panteão.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE VALKARIA*/}
        <Image style={estilo.img} source={Valkaria} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Praticar o otimismo,
              a evolução, a rebeldia. Desafiar limites, almejar o
              impossível. Combater o mal, a opressão e a tirania.
              Proteger a liberdade. Aceitar o novo e diferente e
              adaptar-se a ele. Demonstrar ambição, paixão e
              coragem. Desfrutar e amar a vida.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Aventureiros; membros de todas as
              classes podem ser devotos de Valkaria.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              A Estátua de Valkaria ou
              seis faixas entrelaçadas.
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
              Mangual.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Valkaria odeia
              o conformismo. Seus devotos são proibidos de
              fixar moradia em um mesmo lugar, não podendo
              permanecer mais de 2d10+10 dias na mesma cidade (ou vila, aldeia, povoado...) ou 1d4+2 meses no
              mesmo reino.
              Devotos de Valkaria também são proibidos de se
              casar ou formar qualquer união estável.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Armas da Ambição,
              Coragem Total, Liberdade Divina.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}