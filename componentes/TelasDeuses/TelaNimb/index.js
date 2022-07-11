import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Nimb from '../../../assets/imagensDeuses/Nimb.png';

import estilo from '../estilo';

export default function TelaNimb() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS NIMB*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Nimb:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              “Khalmyr tem o tabuleiro, mas quem move
              as peças é Nimb” — provérbio dos tempos em
              que o Deus da Justiça governava o Panteão, sua liderança sempre desafiada pelo insano Deus do Caos.
              Nada é certo sobre esta entidade do acaso, sorte e
              azar. Teria Nimb cuidadosamente tramado a queda de
              Khalmyr, enfim derrotando o eterno rival? Seria ele
              capaz de um plano tão louco e brilhante? Ou não?
              Nimb é mais temido do que venerado pelos
              artonianos, cautelosos quanto as suas constantes
              mudanças de humor. Muitos desejam que ele lhes
              sorria, mas poucos escolhem ser seus devotos. Ainda
              assim, há quem abrace sua loucura libertadora.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE NIMB*/}
        <Image style={estilo.img} source={Nimb} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Reverenciar o caos, a
              aleatoriedade, a sorte e o azar. Praticar a ousadia e a
              rebeldia, desafiar regras e leis. Rejeitar o bom senso.
              Tornar o mundo mais interessante. Ou divertido.
              Ou terrível. Ou não.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Goblins, qareen, sílfides, arcanistas,
              bárbaros, bardos, bucaneiros, inventores, ladinos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Um dado de seis faces.
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
              Nenhuma e todas! Ao usar
              um efeito que dependa de arma preferida, qualquer
              arma (ou outro objeto!) pode aparecer, de acordo
              com o mestre.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Por serem
              incapazes de seguir regras, estes devotos não têm
              “obrigações” verdadeiras (portanto, nunca perdem
              seus poderes concedidos). No entanto, sofrem certas
              restrições que não podem escolher ignorar.
              Devotos de Nimb são loucos (ou agem como se
              fossem), não conseguindo convencer ninguém de
              coisa alguma. Você sofre –5 em testes de perícias
              baseadas em Carisma. Além disso, no início de cada
              cena de ação, role 1d6. Com um resultado 1, você fica
              confuso até o fim da cena.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Poder Oculto, Sorte
              dos Loucos, Transmissão da Loucura.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}