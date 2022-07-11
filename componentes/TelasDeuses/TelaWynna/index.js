import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import Wynna from '../../../assets/imagensDeuses/Wynna.png';

import estilo from '../estilo';

export default function TelaWynna() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS WYNNA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Wynna:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Depois de abandonados por Glórienn, a
              antiga Deusa dos Elfos,
              muitos membros desta raça estão oferecendo
              sua devoção à bondosa
              Wynna. Ela é a exuberante
              Deusa da Magia, louvada por
              fadas, qareen, gênios e todos aqueles que empregam
              poder arcano. Generosa e liberal além dos limites,
              Wynna concede mágica a todos que pedem, não importando se usada para o bem ou para o mal — pois a
              magia é mais importante que a vida e nunca deve ser
              negada a ninguém. Talvez por esse motivo Arton seja
              um mundo tão intenso em energias mágicas e tão povoado por arcanistas.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE WYNNA*/}
        <Image style={estilo.img} source={Wynna} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Reverenciar a magia
              arcana e seus praticantes. Promover o ensino da
              magia. Usar a magia para proteger os necessitados e
              trazer felicidade ao mundo.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Elfos, golens, qareen, sílfides, arcanistas, bardos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Um anel metálico.
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
              Ainda que a
              magia jamais possa ser negada para quem a busca,
              devotos de Wynna devem praticar a bondade e a generosidade de sua deusa, jamais recusando um pedido
              de ajuda. Além disso, devotos de Wynna são proibidos
              de matar seres mágicos (elfos, qareen, sílfides e outros
              a critério do mestre) e conjuradores arcanos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Bênção do Mana,
              Centelha Mágica, Escudo Mágico, Teurgista Místico.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}