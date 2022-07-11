import React from 'react';
import { Image, View, ScrollView, Text } from 'react-native';

import LinWu from '../../../assets/imagensDeuses/Lin-Wu.png';

import estilo from '../estilo';

export default function TelaLinWu() {
  return (
    <ScrollView nested persistentScrollbar>
      <View style={estilo.container}>
        {/*CARD SOBRE OS LINWU*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Lin-Wu:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Mesmo com a quase extinção de seu povo
              pela Tormenta, o honrado Deus Samurai
              nunca fraquejou, nunca perdeu sua dignidade. Hoje, o Império de Jade
              está livre da tempestade, seus
              habitantes retornam para a grande reconstrução. LinWu e seu povo sempre serão gratos aos campeões
              gaijin, por sua amizade e suporte durante os anos de
              pesadelo. Talvez por esse motivo, conforme especulam seus servos shugenja, devotos de Lin-Wu atuando longe de Tamu-ra recebem poderes diferentes,
              mais convenientes para suas missões.
            </Text>
          </ScrollView>
        </View>

        {/*IMAGEM DE LINWU*/}
        <Image style={estilo.img} source={LinWu} />

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Promover a honra
              acima de tudo. Proteger Tamu-ra e o Reinado de
              Arton. Praticar honestidade, coragem, cortesia e
              compaixão. Demonstrar integridade e dignidade.
              Ser leal a seus companheiros. Buscar redenção após
              cometer desonra.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Anões, cavaleiros, guerreiros, nobres,
              paladinos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Placa de metal com a
              silhueta de um dragão-serpente celestial.
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
              Katana.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Obrigações e Restrições:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Antigas proibições quanto a devotos estrangeiros ou do gênero
              feminino não mais se aplicam. No entanto, devotos
              de Lin-Wu ainda devem demonstrar comportamento
              honrado, jamais recorrendo a mentiras e subterfúgios. Em termos de jogo, são proibidos de tentar
              qualquer ação que exigiria um teste de Enganação,
              Furtividade ou Ladinagem.
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Coragem Total, Kiai
              Divino, Mente Vazia.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView >
  )
}