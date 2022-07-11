import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Hyninn from '../../../assets/imagensDeuses/Hyninn.png';

import estilo from '../estilo';

export default function TelaHyninn() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS HYNINN*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Hyninn:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Capaz de enganar
              até mesmo outros deuses, o ardiloso Deus da
              Trapaça é uma divindade favorita por ladrões
              e piratas — seus clérigos
              atuam como conselheiros,
              ou até mesmo líderes, em guildas criminosas ou navios piratas. Também é louvado por regentes, estrategistas e mercadores não
              muito honestos, orando por vantagens ilícitas. No
              entanto, mesmo pessoas honradas eventualmente simpatizam com Hyninn por sua esperteza, despreocupação e ousadia.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE HYNINN*/}
        <Image style={estilo.img} source={Hyninn} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Praticar a astúcia e a
              esperteza. Demonstrar que honestidade e sinceridade levam ao fracasso. Desafiar a lei e a ordem. Ser
              vitorioso sem seguir regras. Fazer aos outros antes
              que façam a você. Levar vantagem em tudo.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Hynne, goblins, sílfides, bardos,
              bucaneiros, ladinos, inventores, nobres.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Uma adaga atravessando
              uma máscara, ou uma raposa.
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
              Adaga.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Um devoto de
              Hyninn não recusa participação em um golpe, trapaça ou artimanha (o que muitas vezes inclui missões
              para roubar... hã, resgatar tesouros), exceto quando
              prejudica seus próprios companheiros.
              O devoto também deve fazer um ato furtivo,
              ousado ou proibido por dia (ou por sessão de jogo,
              o que demorar mais), como oferenda a Hyninn.
              Roubar uma bolsa, enganar um miliciano, invadir o
              quarto de um nobre... Em termos de jogo, uma ação
              exigindo um teste de Enganação ou Ladinagem com
              CD mínima 15 + metade do seu nível.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Farsa do Fingidor,
              Forma de Macaco, Golpista Divino.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}