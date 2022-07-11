import React from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';

import estilo from './estilo';

export default function TelaDeuses(props) {
  return (
    <ScrollView persistentScrollbar scrollEnabled>
      <View style={estilo.container}>
        {/*CARD SOBRE OS DEUSES*/}
        <View style={estilo.box}>
          <Text style={estilo.titulo}>Sobre os deuses:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Em Arton, você pode trabalhar a serviço dos
              deuses, cumprindo seus desígnios. Um personagem
              que serve a uma divindade é chamado devoto. Em
              troca de seguir certas obrigações, recebe poderes. Ser
              devoto é uma escolha. Por exemplo, você pode ser um
              cavaleiro normal, livre de obrigações, ou um cavaleiro
              devoto de Khalmyr, com obrigações e poderes.
            </Text>
            <Text style={estilo.paragrafo}>
              Muitos artonianos acham mais prudente prestar
              respeito a vários deuses, até mesmo a todo o Panteão. No entanto, você só pode ser um devoto com
              poderes de uma única divindade.
            </Text>
          </ScrollView>
        </View>

        {/*CARD CRENCAS E OBJETIVOS*/}
        <View style={estilo.box}>
          <Text style={estilo.titulo}>Crenças e Objetivos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingright: 7 }}>
            <Text style={estilo.paragrafo}>
              Um resumo da doutrina e dos objetivos da divindade. Aquilo que seus
              devotos acreditam e devem fazer.
            </Text>
          </ScrollView>
        </View>

        {/*CARD DEVOTOS*/}
        <View style={estilo.box}>
          <Text style={estilo.titulo}>Devotos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Para ser um devoto com poderes, você
              deve ser de uma raça ou classe listada aqui. Humanos
              e clérigos podem ser devotos de qualquer deus.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SIMBOLO SAGRADO*/}
        <View style={estilo.box}>
          <Text style={estilo.titulo}>Símbolo Sagrado:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Todo devoto possui e
              deve trazer consigo o símbolo sagrado da divindade,
              estampado na roupa (ou armadura) ou como acessório (medalhão, cetro...). Nenhum poder concedido
              funciona sem a posse desse símbolo.
            </Text>
          </ScrollView>
        </View>

        {/*CARD CANALIZAR ENERGIA*/}
        <View style={estilo.box}>
          <Text style={estilo.titulo}>Canalizar Energia:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              O tipo de energia (positiva ou negativa) que a divindade canaliza. Isso define
              o tipo de dano (luz para energia positiva, trevas para
              energia negativa) e outras características de certas
              habilidades e magias. Alguns deuses permitem que
              o devoto escolha seu tipo de energia. Uma vez feita,
              essa escolha não pode ser mudada.
            </Text>
          </ScrollView>
        </View>

        {/*CARD ARMA PREFERIDA*/}
        <View style={estilo.box}>
          <Text style={estilo.titulo}>Arma Preferida:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              A arma típica de devotos da
              divindade, importante para certas habilidades e magias.
            </Text>
          </ScrollView>
        </View>

        {/*CARD OBRIGACOES E RESTRICOES*/}
        <View style={estilo.box}>
          <Text style={estilo.titulo}>Arma Preferida:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Se você for devoto do deus, deve seguir essas regras. Se violar uma
              delas, perde todos os seus pontos de mana e só pode
              recuperá-los a partir do próximo dia. Se violar uma
              dessas regras pela segunda vez na mesma aventura,
              perde todos os seus PM e só pode recuperá-los se
              fizer uma penitência (veja a perícia Religião).
            </Text>
          </ScrollView>
        </View>

        {/*CARD PODERES CONCEDIDOS*/}
        <View style={estilo.box}>
          <Text style={estilo.titulo}>Poderes Concedidos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Se você for devoto do
              deus, recebe um poder concedido dessa lista a sua
              escolha. Se for um clérigo, druida ou paladino, recebe todos os poderes concedidos da lista deste livro.
              . Magias
              recebidas por poderes concedidos contam como magias divinas e usam Sabedoria como atributo-chave.
            </Text>
          </ScrollView>
        </View>

        {/*LISTAGENS DOS DEUSES*/}
        <Text style={estilo.tituloracas}>Listagem dos Deuses</Text>
        <Text style={estilo.descricao}>Clique para checar cada Deus</Text>

        {/*BOTOES COM CADA DEUS*/}
        <View style={estilo.linha}>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Aharadak') }}>
            <Text style={estilo.texto}>Aharadak</Text>
          </Pressable>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Allihanna') }}>
            <Text style={estilo.texto}>Allihanna</Text>
          </Pressable>
        </View>

        <View style={estilo.linha}>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Arsenal') }}>
            <Text style={estilo.texto}>Arsenal</Text>
          </Pressable>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Azgher') }}>
            <Text style={estilo.texto}>Azgher</Text>
          </Pressable>
        </View>

        <View style={estilo.linha}>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Hyninn') }}>
            <Text style={estilo.texto}>Hyninn</Text>
          </Pressable>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Kallyadranoch') }}>
            <Text style={estilo.texto}>Kallyadranoch</Text>
          </Pressable>
        </View>

        <View style={estilo.linha}>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Khalmyr') }}>
            <Text style={estilo.texto}>Khalmyr</Text>
          </Pressable>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Lena') }}>
            <Text style={estilo.texto}>Lena</Text>
          </Pressable>
        </View>

        <View style={estilo.linha}>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Lin-Wu') }}>
            <Text style={estilo.texto}>Lin-Wu</Text>
          </Pressable>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Marah') }}>
            <Text style={estilo.texto}>Marah</Text>
          </Pressable>
        </View>

        <View style={estilo.linha}>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Megalokk') }}>
            <Text style={estilo.texto}>Megalokk</Text>
          </Pressable>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Nimb') }}>
            <Text style={estilo.texto}>Nimb</Text>
          </Pressable>
        </View>

        <View style={estilo.linha}>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Oceano') }}>
            <Text style={estilo.texto}>Oceano</Text>
          </Pressable>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Sszzaas') }}>
            <Text style={estilo.texto}>Sszzaas</Text>
          </Pressable>
        </View>

        <View style={estilo.linha}>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Tanna-Toh') }}>
            <Text style={estilo.texto}>Tanna-Toh</Text>
          </Pressable>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Tenebra') }}>
            <Text style={estilo.texto}>Tenebra</Text>
          </Pressable>
        </View>

        <View style={estilo.linha}>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Thwor') }}>
            <Text style={estilo.texto}>Thwor</Text>
          </Pressable>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Thyatis') }}>
            <Text style={estilo.texto}>Thyatis</Text>
          </Pressable>
        </View>

        <View style={estilo.linha}>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Valkaria') }}>
            <Text style={estilo.texto}>Valkaria</Text>
          </Pressable>
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Wynna') }}>
            <Text style={estilo.texto}>Wynna</Text>
          </Pressable>
        </View>

      </View>
    </ScrollView>
  )
}