import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Aharadak from '../../../assets/imagensDeuses/Aharadak.png';

import estilo from '../estilo';

export default function TelaAharadak() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS AHARADAK*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Aharadak:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Outrora um dos terríveis Lordes da Tormenta, esta aberração
              monstruosa ambicionava o grande poder
              divino oferecido pelos
              devotos de Arton. Após
              anos liderando seu próprio
              culto profano, Aharadak matou
              Tauron, o Deus da Força, e ascendeu como o novo e
              macabro Deus da Tormenta. Agora ocupando uma posição importante no Panteão, os invasores lefeu 
              avançam mais uma etapa em seus planos para corromper
              Arton. Apenas os devotos mais depravados ousam
              cultuar esta divindade de escatologia e sadismo.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE AHARADAK*/}
        <Image style={estilo.img} source={Aharadak}/>

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Reverenciar a Tormenta, apregoar a inevitabilidade de sua chegada ao
              mundo. Praticar a devassidão e a perversão. Deturpar
              tudo que é correto, desfigurar tudo que é normal.
              Abraçar a agonia, crueldade e loucura.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Quaisquer. A Tormenta aceita tudo e
              todos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Um olho macabro de
              pupila vertical e cercado de espinhos.
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
              Corrente de espinhos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Quase todos
              os cultistas de Aharadak são maníacos insanos,
              compelidos a praticar os atos mais abomináveis. No
              entanto, talvez devido à própria natureza alienígena
              e incompreensível deste deus, uns poucos devotos
              conseguem se resguardar. Conseguem preservar sua
              preciosa humanidade, abstendo-se de cometer crimes
              ou profanações. Ainda assim, o devoto de Aharadak
              deve pagar um preço. No início de qualquer cena de
              ação, role 1d6. Com um resultado ímpar, você fica
              fascinado na primeira rodada, perdido em devaneios
              sobre a futilidade da vida.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Afinidade com a Tormenta, Percepção Temporal, Rejeição Divina.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}