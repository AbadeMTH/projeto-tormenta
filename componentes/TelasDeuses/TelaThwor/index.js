import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Thwor from '../../../assets/imagensDeuses/Thwor.png';

import estilo from '../estilo';

export default function TelaThwor() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS THWOR*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Thwor:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              A Flecha de Fogo foi
              disparada, rompendo o
              coração das trevas. A
              antiga profecia foi cumprida. No entanto, o que
              muitos pensavam significar o fim da Aliança Negra
              dos goblinoides resultou em
              algo totalmente diferente, totalmente novo. Ao enfrentar e derrotar o próprio Ragnar, antigo Deus da
              Morte, o imperador bugbear Thwor Khoshkothruk
              ascendeu ao Panteão como o Deus dos Goblinoides.
              Agora protegidos e governados por uma poderosa divindade, os povos duyshidakk erguem sua própria civilização no continente de Lamnor, e o Reinado de
              Arton deverá lidar com o futuro que surgir disso.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE THWOR*/}
        <Image style={estilo.img} source={Thwor} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Reverenciar a lealdade, a força e a coragem. Promover a união entre
              goblins, hobgoblins, bugbears, orcs, ogros e outros
              povos humanoides. Reverenciar o caos, a mutação,
              a vida sempre em movimento. Proteger a cultura e o
              modo de vida goblinoide. Destruir os elfos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Qualquer humanoide (mas veja
              adiante).
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Um grande punho fechado.
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
              Machado de guerra.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Não importando sua raça, o devoto de Thwor deve ser considerado
              duyshidakk — ou seja, aceito como membro do povo
              goblinoide. Também deve se esforçar para que o
              modo de vida duyshidakk tome o continente. Deve
              sempre procurar fazer alianças com goblinoides e só
              lutar contra eles em último caso.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Fúria Divina, Olhar
              Amedrontador, Tropas Duyshidakk.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}