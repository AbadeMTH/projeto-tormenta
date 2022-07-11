import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import estilo from '../estilo';

export default function ArmaduraseEscudos() {
  return (
    <ScrollView persistentScrollbar scrollEnabled>
      <View style={estilo.container}>
        {/*TODAS ARMADURAS E ESCUDOS*/}
        <Text style={estilo.categoria}>Armaduras e Escudo</Text>
        {/*ARMADURAS LEVES*/}
        <Text style={estilo.descricao}>Armaduras Leves</Text>

        {/*CARD SOBRE A ARMADURA ACOLCHOADA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Armadura Acolchoada</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DEFESA</Text>
              <Text style={estilo.topico}>PESO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 5</Text>
              <Text style={estilo.paragrafo}>+1</Text>
              <Text style={estilo.paragrafo}>5kg</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PENALIDADE</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>0</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Uma
              túnica almofadada feita em linho ou lã.
              É a armadura mais leve, mas protege
              todo o corpo, fornecendo +2 em testes
              de Fortitude.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A ARMADURA DE COURO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Armadura de Couro</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DEFESA</Text>
              <Text style={estilo.topico}>PESO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 20</Text>
              <Text style={estilo.paragrafo}>+2</Text>
              <Text style={estilo.paragrafo}>7kg</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PENALIDADE</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>0</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              O peitoral
              desta armadura é feito de couro curtido
              em óleo fervente, para ficar mais rígido,
              enquanto as demais partes são feitas de
              couro flexível.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A ARMADURA DE COURO BATIDO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Couro Batido</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DEFESA</Text>
              <Text style={estilo.topico}>PESO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 35</Text>
              <Text style={estilo.paragrafo}>+3</Text>
              <Text style={estilo.paragrafo}>10kg</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PENALIDADE</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>-1</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Versão mais pesada da armadura de couro, reforçada com
              rebites de metal.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O GIBAO DE PELES*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Gibão de Peles</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DEFESA</Text>
              <Text style={estilo.topico}>PESO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 25</Text>
              <Text style={estilo.paragrafo}>+4</Text>
              <Text style={estilo.paragrafo}>12kg</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PENALIDADE</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>-3</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Usada principalmente por bárbaros e selvagens, esta
              armadura é formada por várias camadas
              de peles e couro de animais.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A COURACA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Couraça</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DEFESA</Text>
              <Text style={estilo.topico}>PESO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 500</Text>
              <Text style={estilo.paragrafo}>+5</Text>
              <Text style={estilo.paragrafo}>15kg</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PENALIDADE</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>-4</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              A mais robusta das
              armaduras leves, formada por uma
              placa metálica que protege o peito e as
              costas, presa sobre um casaco de couro.
            </Text>
          </ScrollView>
        </View>

        {/*ARMADURAS PESADAS*/}
        <Text style={estilo.descricao}>Armaduras Pesadas</Text>

        {/*CARD SOBRE A BRUNEA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Brunea</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DEFESA</Text>
              <Text style={estilo.topico}>PESO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 50</Text>
              <Text style={estilo.paragrafo}>+5</Text>
              <Text style={estilo.paragrafo}>15kg</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PENALIDADE</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>-2</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Colete de couro coberto
              com plaquetas de metal sobrepostas,
              como escamas de um peixe. Por ser barata
              de produzir, é a armadura mais utilizada no
              Reinado por soldados de infantaria e guardas
              de castelo.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A COTA DE MALHA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Cota de Malha</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DEFESA</Text>
              <Text style={estilo.topico}>PESO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 150</Text>
              <Text style={estilo.paragrafo}>+6</Text>
              <Text style={estilo.paragrafo}>20kg</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PENALIDADE</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>-2</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Longa veste de
              anéis metálicos interligados, formando
              uma malha flexível e resistente, que vai
              até os joelhos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A LORIGA SEGMENTADA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Loriga Segmentada</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DEFESA</Text>
              <Text style={estilo.topico}>PESO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 250</Text>
              <Text style={estilo.paragrafo}>+7</Text>
              <Text style={estilo.paragrafo}>17kg</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PENALIDADE</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>-3</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Composta
              por tiras horizontais de metal, esta
              armadura pesada é muito utilizada por
              legionários do Império de Tauron.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A MEIA ARMADURA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Meia Armadura</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DEFESA</Text>
              <Text style={estilo.topico}>PESO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 600</Text>
              <Text style={estilo.paragrafo}>+8</Text>
              <Text style={estilo.paragrafo}>22kg</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PENALIDADE</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>-4</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Uma cota de malha reforçada com placas de metal.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A ARMADURA COMPLETA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Armadura Completa</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DEFESA</Text>
              <Text style={estilo.topico}>PESO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 3.000</Text>
              <Text style={estilo.paragrafo}>+10</Text>
              <Text style={estilo.paragrafo}>25kg</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PENALIDADE</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>-5</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              A mais
              forte e pesada das armaduras, formada por
              placas de metal forjadas e encaixadas de modo
              a cobrir o corpo inteiro. Inclui manoplas e grevas (luvas e botas metálicas, respectivamente),
              um elmo com viseira e uma túnica acolchoada
              para ser usada sob as placas. Correias e
              fivelas distribuem o peso da armadura
              pelo corpo inteiro.
            </Text>
            <Text style={estilo.paragrafoSobre}>
              Esta armadura precisa ser feita
              sob medida para cada usuário; um
              ferreiro cobra T$ 200 para adaptar uma
              armadura completa a um novo usuário.
            </Text>
          </ScrollView>
        </View>

        {/*ESCUDOS*/}
        <Text style={estilo.descricao}>Escudos</Text>

        {/*CARD SOBRE O ESCUDO LEVE*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Escudo Leve</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DEFESA</Text>
              <Text style={estilo.topico}>PESO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 5</Text>
              <Text style={estilo.paragrafo}>+1</Text>
              <Text style={estilo.paragrafo}>3kg</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PENALIDADE</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>-1</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Tipicamente feito de madeira, este escudo é amarrado no antebraço,
              deixando a mão livre. O usuário pode carregar um objeto na mão do escudo, mas não
              manusear uma arma.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O ESCUDO PESADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Escudo Pesado</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DEFESA</Text>
              <Text style={estilo.topico}>PESO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 15</Text>
              <Text style={estilo.paragrafo}>+2</Text>
              <Text style={estilo.paragrafo}>7kg</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PENALIDADE</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>-2</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Normalmente feito de aço, este escudo é preso ao
              antebraço e também deve ser empunhado com firmeza, impedindo o usuário
              de usar aquela mão.
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  )
}