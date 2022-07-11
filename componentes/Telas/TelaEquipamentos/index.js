import React from 'react';
import { Text, View, ScrollView, Pressable } from 'react-native';

import estilo from './estilo';

export default function TelaEquipamentos(props) {
  return (
    <ScrollView persistentScrollbar scrollEnabled>
      <View style={estilo.container}>
        {/*CARD SOBRE OS EQUIPAMENTOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre os Equipamentos:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              Espadas afiadas e armaduras resplandecentes. Símbolos sagrados e tomos
              ancestrais. Ou simplesmente um bom
              prato de comida!
            </Text>
            <Text style={estilo.paragrafo}>
              Aventureiros precisam de diversos equipamentos
              em suas missões. Este capítulo descreve os itens e
              serviços mundanos encontrados em Arton.
            </Text>
          </ScrollView>
        </View>

        {/*RIQUEZAS E MOEDAS*/}
        <Text style={estilo.categoria}>Riquezas & Moedas</Text>
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              O Tibar (T$) é a moeda padrão do Reinado.
              Trata-se de uma peça redonda de prata com 1,5 cm
              de diâmetro. A cunhagem traz em um lado o rosto
              de Tibar, o Deus do Comércio — um rei com cabelos
              encaracolados e uma joia em forma de olho na coroa;
              e no outro lado o mesmo rosto, mas sem a coroa. Em
              Arton, ao jogar “cara ou coroa”, o costume é escolher
              “coroa ou não coroa”.
            </Text>
            <Text style={estilo.paragrafo}>
              A moeda foi criada por Quindogar Tolliannor,
              primeiro conselheiro real de Deheon e adepto ardoroso das artes da barganha e negociação. Ficou tão
              popular que Tollianor passou a ser conhecido pelo
              nome de sua criação e ascendeu como Deus Menor
              do Comércio. Atualmente, ele tenta “negociar” uma
              posição no Panteão. Acredita-se que manter um
              Tibar no bolso ou no pescoço (como um amuleto)
              garante boa fortuna.
            </Text>
            <Text style={estilo.paragrafo}>
              Nem todos os reinos seguem o padrão do Tibar.
              Em alguns lugares, devido à escassez de prata, o Tibar
              de cobre é usado como moeda padrão. Em outros, o
              valor do Tibar pode apresentar flutuações — provocando grande agitação entre as guildas de comerciantes,
              falsificadores e contrabandistas.
            </Text>
            <Text style={estilo.paragrafo}>
              Por padrão, todos os preços de itens e serviços são
              exibidos em T$. Entretanto, existem duas variações da
              moeda: o Tibar de cobre (TC), que vale um décimo
              do T$, mais utilizado por camponeses e plebeus, e o
              Tibar de Ouro (TO), que vale T$ 10, mais utilizado por
              aristocratas, grandes mercadores e aventureiros.
            </Text>
          </ScrollView>
        </View>

        {/*TROCA E COMERCIO*/}
        <Text style={estilo.categoria}>Troca & Comércio</Text>
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Sobre:</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              O comércio é organizado pela nobreza e por
              guildas mercantes, que determinam os preços dos
              produtos e serviços que controlam. As guildas também decidem quem pode vender o quê, e demandam
              uma porcentagem de cada negociação.
            </Text>
            <Text style={estilo.paragrafo}>
              Em grande parte do Reinado — especialmente
              em regiões afastadas de grandes cidades —, o uso
              de moedas não é comum. Negociações são realizadas pela troca de gado, colheita, terras, direitos sobre
              coleta de impostos ou exploração de recursos naturais.
            </Text>
            <Text style={estilo.paragrafo}>
              Personagens podem, em geral, vender seus
              próprios itens pela metade do preço normal. Esse
              valor pode ser melhorado através de barganha (veja a
              perícia Diplomacia).
            </Text>
          </ScrollView>
        </View>

        {/*EQUIPAMENTO INICIAL*/}
        <Text style={estilo.categoria}>Equipamento Inicial</Text>
        <Text style={estilo.descricao}>
          Personagens de 1º nível começam com os itens
          fornecidos pela sua origem e os itens a seguir
        </Text>
        <View style={estilo.card}>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.paragrafo}>
              <Text style={estilo.topico}>1.</Text> Uma mochila, um saco de dormir e um traje
              de viajante.
            </Text>
            <Text style={estilo.paragrafo}>
              <Text style={estilo.topico}>2.</Text> Uma arma simples a sua escolha. Se você tiver
              proficiência com armas marciais, começa também
              com uma arma marcial a sua escolha (além da arma
              simples que todo personagem possui).
            </Text>
            <Text style={estilo.paragrafo}>
              <Text style={estilo.topico}>3.</Text> Uma armadura de couro, couro batido ou gibão de peles, a sua escolha. Se você tiver proficiência
              com armaduras pesadas, em vez disso pode começar
              com uma brunea. Se tiver proficiência com escudos,
              começa também com um escudo leve. Exceção: arcanistas começam sem armadura.
            </Text>
            <Text style={estilo.paragrafo}>
              <Text style={estilo.topico}>4.</Text> T$ 4d6, que você pode usar para comprar
              itens ou guardar para usar na aventura. Se o personagem começar a aventura acima do nível 1, usar
              a tabela abaixo.
            </Text>
          </ScrollView>
        </View>

        {/*PERSONAGENS DE ALTO NIVEL*/}
        <Text style={estilo.categoria}>Personagens de Alto Nível</Text>
        <Text style={estilo.descricao}>
          Se você criar um personagem acima do 1º nível,
          recebe uma quantidade de dinheiro inicial maior,
          conforme a tabela a seguir.
        </Text>
        <View style={estilo.cardtabela}>
          <View style={estilo.linhaCinzaTopo}>
            <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
            <Text style={estilo.paragrafoPretoDinheiroTitulo}>Dinheiro Inicial (T$)</Text>
          </View>
          <View style={estilo.linhaBranca}>
            <Text style={estilo.paragrafoPretoNivel}>1°</Text>
            <Text style={estilo.paragrafoPreto}>4d6</Text>
          </View>
          <View style={estilo.linhaCinza}>
            <Text style={estilo.paragrafoPretoNivel}>2°</Text>
            <Text style={estilo.paragrafoPreto}>300</Text>
          </View>
          <View style={estilo.linhaBranca}>
            <Text style={estilo.paragrafoPretoNivel}>3°</Text>
            <Text style={estilo.paragrafoPreto}>600</Text>
          </View>
          <View style={estilo.linhaCinza}>
            <Text style={estilo.paragrafoPretoNivel}>4°</Text>
            <Text style={estilo.paragrafoPreto}>1.000</Text>
          </View>
          <View style={estilo.linhaBranca}>
            <Text style={estilo.paragrafoPretoNivel}>5°</Text>
            <Text style={estilo.paragrafoPreto}>2.000</Text>
          </View>
          <View style={estilo.linhaCinza}>
            <Text style={estilo.paragrafoPretoNivel}>6°</Text>
            <Text style={estilo.paragrafoPreto}>3.000</Text>
          </View>
          <View style={estilo.linhaBranca}>
            <Text style={estilo.paragrafoPretoNivel}>7°</Text>
            <Text style={estilo.paragrafoPreto}>5.000</Text>
          </View>
          <View style={estilo.linhaCinza}>
            <Text style={estilo.paragrafoPretoNivel}>8°</Text>
            <Text style={estilo.paragrafoPreto}>7.000</Text>
          </View>
          <View style={estilo.linhaBranca}>
            <Text style={estilo.paragrafoPretoNivel}>9°</Text>
            <Text style={estilo.paragrafoPreto}>10.000</Text>
          </View>
          <View style={estilo.linhaCinza}>
            <Text style={estilo.paragrafoPretoNivel}>10°</Text>
            <Text style={estilo.paragrafoPreto}>13.000</Text>
          </View>
          <View style={estilo.linhaBranca}>
            <Text style={estilo.paragrafoPretoNivel}>11°</Text>
            <Text style={estilo.paragrafoPreto}>19.000</Text>
          </View>
          <View style={estilo.linhaCinza}>
            <Text style={estilo.paragrafoPretoNivel}>12°</Text>
            <Text style={estilo.paragrafoPreto}>27.000</Text>
          </View>
          <View style={estilo.linhaBranca}>
            <Text style={estilo.paragrafoPretoNivel}>13°</Text>
            <Text style={estilo.paragrafoPreto}>36.000</Text>
          </View>
          <View style={estilo.linhaCinza}>
            <Text style={estilo.paragrafoPretoNivel}>14°</Text>
            <Text style={estilo.paragrafoPreto}>49.000</Text>
          </View>
          <View style={estilo.linhaBranca}>
            <Text style={estilo.paragrafoPretoNivel}>15°</Text>
            <Text style={estilo.paragrafoPreto}>66.000</Text>
          </View>
          <View style={estilo.linhaCinza}>
            <Text style={estilo.paragrafoPretoNivel}>16°</Text>
            <Text style={estilo.paragrafoPreto}>88.000</Text>
          </View>
          <View style={estilo.linhaBranca}>
            <Text style={estilo.paragrafoPretoNivel}>17°</Text>
            <Text style={estilo.paragrafoPreto}>110.000</Text>
          </View>
          <View style={estilo.linhaCinza}>
            <Text style={estilo.paragrafoPretoNivel}>18°</Text>
            <Text style={estilo.paragrafoPreto}>150.000</Text>
          </View>
          <View style={estilo.linhaBranca}>
            <Text style={estilo.paragrafoPretoNivel}>19°</Text>
            <Text style={estilo.paragrafoPreto}>200.000</Text>
          </View>
          <View style={estilo.linhaCinzaFinal}>
            <Text style={estilo.paragrafoPretoNivel}>20°</Text>
            <Text style={estilo.paragrafoPreto}>260.000</Text>
          </View>
        </View>

        {/*ARMAS E ARMADURAS*/}
        <Text style={estilo.categoria}>Tabelas de Armas e Armaduras</Text>
        <Text style={estilo.descricao}>Selecione para ver sobre os itens respectivos</Text>

        <View style={estilo.linha}>
          {/*BOTAO ARMAS*/}
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Armas') }}>
            <Text style={estilo.texto}>Armas</Text>
          </Pressable>

          {/*BOTAO ARMADURAS E ESCUDOS*/}
          <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Armaduras e Escudos') }}>
            <Text style={estilo.texto}>Armaduras e Escudos</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}