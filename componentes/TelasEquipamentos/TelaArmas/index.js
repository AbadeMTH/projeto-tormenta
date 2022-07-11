import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import estilo from '../estilo';

export default function Armas() {
  return (
    <ScrollView persistentScrollbar scrollEnabled>
      <View style={estilo.container}>
        {/*CARD HABILIDADES DE ARMAS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Habilidades de Armas</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <Text style={estilo.topicoSobre}>Adaptável</Text>
            <Text style={estilo.paragrafoSobre}>
              Uma arma de uma mão com
              esta habilidade pode ser usada com as duas
              mãos para aumentar seu dano em um passo.
            </Text>

            <Text style={estilo.topicoSobre}>Ágil</Text>
            <Text style={estilo.paragrafoSobre}>
              Pode ser usada com Acuidade com
              Arma, mesmo não sendo uma arma leve.
            </Text>

            <Text style={estilo.topicoSobre}>Alongada</Text>
            <Text style={estilo.paragrafoSobre}>
              Dobra o alcance natural
              do atacante, mas não permite atacar um
              adversário adjacente.
            </Text>

            <Text style={estilo.topicoSobre}>Dupla</Text>
            <Text style={estilo.paragrafoSobre}>
              Pode ser usada com Estilo de Duas
              Armas (e poderes similares) para fazer
              ataques adicionais, como se fosse uma arma
              de uma mão e uma arma leve.
            </Text>

            <Text style={estilo.topicoSobre}>Versátil</Text>
            <Text style={estilo.paragrafoSobre}>
              Fornece bônus em uma ou mais
              manobras (cumulativo com outros bônus de
              itens), conforme a arma.
            </Text>
          </ScrollView>
        </View>

        {/*TODAS ARMAS SIMPLES*/}
        <Text style={estilo.categoria}>Armas Simples</Text>
        {/*ARMAS CORPO A CORPO LEVES*/}
        <Text style={estilo.descricao}>Corpo a Corpo - Leves</Text>

        {/*CARD SOBRE A ADAGA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Adaga</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 2</Text>
              <Text style={estilo.paragrafo}>1d4</Text>
              <Text style={estilo.paragrafo}>19</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>Curto</Text>
              <Text style={estilo.paragrafoPeso}>0,5kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Esta faca afiada é usada por muitos
              habitantes adultos do Reinado, embora seja favorita
              de ladrões e assassinos, por ser facilmente escondida
              (fornece +2 em testes de Ladinagem para ocultá-la).
              Quando ataca com uma adaga, você pode usar seu
              modificador de Destreza em vez de Força nos testes
              de ataque. Uma adaga pode ser arremessada.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O ATAQUE DESARMADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Ataque Desarmado</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafo}>1d3</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>----</Text>
              <Text style={estilo.paragrafoTipo}>Impacto</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Você pode atacar com
              um soco, chute ou qualquer outro golpe que use
              seu próprio corpo como se fosse uma arma corpo a
              corpo. Um ataque desarmado causa dano não letal.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A ESPADA CURTA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Espada Curta</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 10</Text>
              <Text style={estilo.paragrafo}>1d6</Text>
              <Text style={estilo.paragrafo}>19</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>1kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              O tipo mais comum de espada,
              usada por guardas ou como arma secundária de guerreiros mais capazes. Mede entre 40 e 50cm.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A FOICE*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Foice</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 4</Text>
              <Text style={estilo.paragrafo}>1d6</Text>
              <Text style={estilo.paragrafo}>3x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>1kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Originalmente um instrumento agrícola,
              consiste de uma lâmina curva presa a um cabo de
              madeira. Uma arma tradicional de druidas.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A MANOPLA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Manopla</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 5</Text>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafo}>----</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>1kg</Text>
              <Text style={estilo.paragrafoTipo}>Impacto</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Luva metálica que permite socos
              mais perigosos — o dano de seus ataques desarmados torna-se letal. Manoplas superiores e mágicas
              aplicam os efeitos de suas modificações e encantos
              em ataques desarmados. Uma manopla não pode
              ser desarmada.
            </Text>
          </ScrollView>
        </View>

        {/*ARMAS CORPO A CORPO DE UMA MAO*/}
        <Text style={estilo.descricao}>Corpo a Corpo - Uma Mão</Text>

        {/*CARD SOBRE A CLAVA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Clava</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafo}>1d6</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>1,5kg</Text>
              <Text style={estilo.paragrafoTipo}>Impacto</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Um pedaço de madeira empunhado
              como arma, geralmente usado por bárbaros ou criaturas brutais — ou como arma improvisada, como um galho
              de árvore ou pedaço de mobília. Sendo fácil
              de conseguir, seu preço é zero.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A LANCA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Lança</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 2</Text>
              <Text style={estilo.paragrafo}>1d6</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>Curto</Text>
              <Text style={estilo.paragrafoPeso}>1,5kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Qualquer arma feita com uma haste de
              madeira e uma ponta afiada, natural ou metálica. Por
              sua facilidade de fabricação, é muito comum entre
              orcs, kobolds, trogloditas e outras raças menos civilizadas. Uma lança pode ser arremessada.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A MACA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Maça</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 12</Text>
              <Text style={estilo.paragrafo}>1d8</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>6kg</Text>
              <Text style={estilo.paragrafoTipo}>Impacto</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Bastão com um peso cheio de protuberâncias na ponta, a maça é usada por clérigos que
              fazem votos de não derramar sangue. De fato, um
              golpe de maça nem sempre derrama sangue, mas
              esmaga ossos.
            </Text>
          </ScrollView>
        </View>

        {/*ARMAS CORPO A CORPO DE DUAS MAOS*/}
        <Text style={estilo.descricao}>Corpo a Corpo - Duas Mãos</Text>

        {/*CARD SOBRE O BORDAO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Bordão</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoDanoGrande}>1d6/1d6</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>2kg</Text>
              <Text style={estilo.paragrafoTipo}>Impacto</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Um cajado apreciado por viajantes e
              camponeses por sua praticidade e fácil acesso (seu
              preço é zero). O bordão é uma arma dupla.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O PIQUE*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Pique</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 2</Text>
              <Text style={estilo.paragrafo}>1d8</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>5kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Essencialmente uma lança muito longa.
              O pique é uma arma alongada.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O TACAPE*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Tacape</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafo}>1d10</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>4kg</Text>
              <Text style={estilo.paragrafoTipo}>Impacto</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Versão maior e/ou com pregos de uma
              clava. Não é uma arma elegante, mas faz o serviço.
            </Text>
          </ScrollView>
        </View>

        {/*ARMAS DE ATAQUE A DISTANCIA*/}
        <Text style={estilo.descricao}>Ataque à Distância</Text>

        {/*CARD SOBRE O ARCO CURTO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Arco Curto</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 30</Text>
              <Text style={estilo.paragrafo}>1d6</Text>
              <Text style={estilo.paragrafo}>3x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>Médio</Text>
              <Text style={estilo.paragrafoPeso}>1kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>Flechas (20)</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 1</Text>
              <Text style={estilo.paragrafo}>1,5kg</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Uma arma antiga e comum, este
              arco é usado primariamente como ferramenta de
              caça, embora seja usado como arma de guerra por
              milícias, bandidos e exércitos menos equipados.
              Exige as duas mãos, mas pode ser usado montado.
            </Text>
            <Text style={estilo.paragrafoSobre}>
              Hastes de madeira com ponta
              metálica e penas para estabilizar o voo, flechas são
              vendidas em aljavas com 20 unidades. Recarregar um
              arco com uma flecha é uma ação livre.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A BESTA LEVE*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Besta Leve</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 35</Text>
              <Text style={estilo.paragrafo}>1d8</Text>
              <Text style={estilo.paragrafo}>19</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>Médio</Text>
              <Text style={estilo.paragrafoPeso}>3kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>Virotes (20)</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 2</Text>
              <Text style={estilo.paragrafo}>1kg</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Um arco montado sobre uma
              coronha de madeira com um gatilho, a besta leve é uma arma que dispara virotes com grande potência.
              Recarregar uma besta leve é uma ação de movimento.
              Exige as duas mãos.
            </Text>
            <Text style={estilo.paragrafoSobre}>
              Pequenas setas de madeira que servem como munição para bestas. Uma caixa com 20
              virotes custa T$ 2.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A AZAGAIA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Azagaia</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 1</Text>
              <Text style={estilo.paragrafo}>1d6</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>Médio</Text>
              <Text style={estilo.paragrafoPeso}>1kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Uma lança leve e flexível, própria
              para arremesso. Pode ser usada como arma corpo a
              corpo, mas você sofre uma penalidade de –5 no teste
              de ataque.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A FUNDA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Funda</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafo}>1d4</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>Médio</Text>
              <Text style={estilo.paragrafoPeso}>250g</Text>
              <Text style={estilo.paragrafoTipo}>Impacto</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>Balas (20)</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 0,5</Text>
              <Text style={estilo.paragrafo}>2kg</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Uma simples tira de couro usada para
              arremessar balas de metal. Na falta de munição adequada, pode disparar pedras comuns, mas o dano é
              reduzido em um passo. Recarregar uma funda é uma
              ação de movimento. Ao contrário de outras armas
              de disparo, você aplica seu modificador de Força a
              rolagens de dano com uma funda.
            </Text>
            <Text style={estilo.paragrafoSobre}>
              Fundas atiram pequenas balas esféricas
              de metal, que são vendidas em sacos de couro contendo 20 balas por 1 tibar de cobre. Recarregar uma
              funda com uma bala é uma ação de movimento.
            </Text>
          </ScrollView>
        </View>

        {/*TODAS ARMAS MARCIAIS*/}
        <Text style={estilo.categoria}>Armas Marciais</Text>
        {/*ARMAS CORPO A CORPO LEVES*/}
        <Text style={estilo.descricao}>Corpo a Corpo - Leves</Text>

        {/*CARD SOBRE O ESCUDO LEVE*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Escudo Leve</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 5</Text>
              <Text style={estilo.paragrafo}>1d4</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>3kg</Text>
              <Text style={estilo.paragrafoTipo}>Impacto</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Você pode usar
              um escudo como uma arma marcial, mas perde seu
              bônus na Defesa até o próximo turno.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A MACHADINHA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Machadinha</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 6</Text>
              <Text style={estilo.paragrafo}>1d6</Text>
              <Text style={estilo.paragrafo}>3x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>Curto</Text>
              <Text style={estilo.paragrafoPeso}>2kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Ferramenta útil para cortar
              madeira e também inimigos. Uma machadinha pode
              ser arremessada.
            </Text>
          </ScrollView>
        </View>

        {/*ARMAS CORPO A CORPO DE UMA MAO*/}
        <Text style={estilo.descricao}>Corpo a Corpo - Uma Mão</Text>

        {/*CARD SOBRE A CIMITARRA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Cimitarra</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 15</Text>
              <Text style={estilo.paragrafo}>1d6</Text>
              <Text style={estilo.paragrafo}>18</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>2kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Espada com a lâmina curva e muito
              afiada. A cimitarra é uma arma ágil.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O ESCUDO PESADO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Escudo Pesado</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 15</Text>
              <Text style={estilo.paragrafo}>1d6</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>7kg</Text>
              <Text style={estilo.paragrafoTipo}>Impacto</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Você pode usar
              um escudo como uma arma marcial, mas perde seu
              bônus na Defesa até o próximo turno.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A ESPADA LONGA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Espada Longa</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 15</Text>
              <Text style={estilo.paragrafo}>1d8</Text>
              <Text style={estilo.paragrafo}>19</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>2kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Arma típica de soldados e
              guerreiros, esta espada de dois gumes tem lâmina
              reta medindo entre 80cm e 1m.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O FLORETE*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Florete</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 20</Text>
              <Text style={estilo.paragrafo}>1d6</Text>
              <Text style={estilo.paragrafo}>18</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>1kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              A lâmina leve e fina desta espada torna
              a arma muito precisa. O florete é uma arma ágil.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O MACHADO DE BATALHA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Machado de Batalha</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 10</Text>
              <Text style={estilo.paragrafo}>1d8</Text>
              <Text style={estilo.paragrafo}>3x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>3kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Adaptado do machado de lenhador, este não é um instrumento para
              corte de árvores, mas sim uma arma capaz de causar
              ferimentos terríveis.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O MANGUAL*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Mangual</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 8</Text>
              <Text style={estilo.paragrafo}>1d8</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>2,5kg</Text>
              <Text style={estilo.paragrafoTipo}>Impacto</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Uma haste metálica ligada a uma
              corrente com uma esfera de aço na ponta, que
              pode se enroscar na arma do adversário. O mangual
              é uma arma versátil, fornecendo +2 em testes
              para desarmar.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O MARTELO DE GUERRA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Martelo de Guerra</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 12</Text>
              <Text style={estilo.paragrafo}>1d8</Text>
              <Text style={estilo.paragrafo}>3x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>2,5kg</Text>
              <Text style={estilo.paragrafoTipo}>Impacto</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Outra ferramenta
              adaptada para combate, esta é a arma favorita de
              quase todos os anões que não usam machados.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A PICARETA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Picareta</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 8</Text>
              <Text style={estilo.paragrafo}>1d6</Text>
              <Text style={estilo.paragrafo}>4x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>3kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Usada por mineradores, esta ferramenta quebra pedras com facilidade. Imagine o que
              pode fazer com carne e osso!
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O TRIDENTE*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Tridente</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 15</Text>
              <Text style={estilo.paragrafo}>1d8</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>2kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              . Uma lança com três pontas, favorita
              de povos marinhos e gladiadores e própria para prender as pernas do oponente. O tridente é uma arma
              versátil, fornecendo +2 em testes para derrubar.
            </Text>
          </ScrollView>
        </View>

        {/*ARMAS CORPO A CORPO DE UMA MAO*/}
        <Text style={estilo.descricao}>Corpo a Corpo - Duas Mãos</Text>

        {/*CARD SOBRE A ALABARDA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Alabarda</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 10</Text>
              <Text style={estilo.paragrafo}>1d10</Text>
              <Text style={estilo.paragrafo}>3x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>6kg</Text>
              <Text style={estilo.paragrafoTipo}>Cor./Perfu.</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Uma haste de madeira com 2m de
              comprimento e uma lâmina de machado na ponta. A
              alabarda é uma arma alongada.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A ALFANGE*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Alfange</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 75</Text>
              <Text style={estilo.paragrafo}>2d4</Text>
              <Text style={estilo.paragrafo}>18</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>4kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Uma versão maior da cimitarra, esta
              espada de lâmina larga e curva é bastante usada por
              guerreiros do Deserto da Perdição.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O GADANHO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Gadanho</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 18</Text>
              <Text style={estilo.paragrafo}>2d4</Text>
              <Text style={estilo.paragrafo}>4x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>5kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Outra ferramenta agrícola, o gadanho é uma versão maior da foice, para uso com
              as duas mãos. Foi criada para ceifar cereais, mas
              também pode ceifar vidas.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A LANCA MONTADA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Lança Montada</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 10</Text>
              <Text style={estilo.paragrafo}>1d8</Text>
              <Text style={estilo.paragrafo}>3x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>5kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              A lança montada é uma
              arma alongada. Se você estiver montado, pode usá-la
              com apenas uma mão. Além disso, quando usada
              numa investida montada, causa +2d8 pontos de
              dano (não multiplicados em caso de acerto crítico).
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O MACHADO DE GUERRA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Machado de Guerra</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 20</Text>
              <Text style={estilo.paragrafo}>1d12</Text>
              <Text style={estilo.paragrafo}>3x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>6kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Este imenso machado
              com lâmina dupla é uma das armas mais perigosas
              que existem.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O MONTANTE*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Montante</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 50</Text>
              <Text style={estilo.paragrafo}>2d6</Text>
              <Text style={estilo.paragrafo}>19</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>4kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Enorme e pesada, esta espada de
              1,5m de comprimento é uma arma poderosa.
            </Text>
          </ScrollView>
        </View>

        {/*ARMAS DE ATAQUE A DISTANCIA*/}
        <Text style={estilo.descricao}>Ataque à Distância</Text>

        {/*CARD SOBRE O ARCO LONGO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Arco Longo</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 100</Text>
              <Text style={estilo.paragrafo}>1d8</Text>
              <Text style={estilo.paragrafo}>3x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>Médio</Text>
              <Text style={estilo.paragrafoPeso}>1,5kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>Flechas (20)</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 1</Text>
              <Text style={estilo.paragrafo}>1,5kg</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Este arco reforçado tem a altura
              de uma pessoa. Ao contrário da versão curta, é primariamente uma arma de guerra. Por ter uma puxada
              pesada, permite que você aplique seu modificador de
              Força às rolagens de dano. Exige as duas mãos e não
              pode ser usado se você estiver montado.
            </Text>
            <Text style={estilo.paragrafoSobre}>
              Hastes de madeira com ponta
              metálica e penas para estabilizar o voo, flechas são
              vendidas em aljavas com 20 unidades. Recarregar um
              arco com uma flecha é uma ação livre.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A BESTA PESADA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Besta Pesada</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 50</Text>
              <Text style={estilo.paragrafo}>1d12</Text>
              <Text style={estilo.paragrafo}>19</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>Médio</Text>
              <Text style={estilo.paragrafoPeso}>4kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>Virotes (20)</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 2</Text>
              <Text style={estilo.paragrafo}>1kg</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Versão maior e mais potente da
              besta leve. Recarregar uma besta pesada é uma ação
              padrão. Exige as duas mãos.
            </Text>
            <Text style={estilo.paragrafoSobre}>
              Pequenas setas de madeira que servem como munição para bestas. Uma caixa com 20
              virotes custa T$ 2.
            </Text>
          </ScrollView>
        </View>

        {/*TODAS ARMAS EXOTICAS*/}
        <Text style={estilo.categoria}>Armas Exóticas</Text>
        {/*ARMAS CORPO A CORPO DE UMA MÃO*/}
        <Text style={estilo.descricao}>Corpo a Corpo - Uma Mão</Text>

        {/*CARD SOBRE O CHICOTE*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Chicote</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 2</Text>
              <Text style={estilo.paragrafo}>1d3</Text>
              <Text style={estilo.paragrafo}>2x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>1kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Esta arma pode ser usada para atacar
              inimigos a até 4,5m e pode se enroscar nas mãos,
              pernas ou armas de seus adversários. O chicote é
              uma arma ágil e versátil, fornecendo +2 em testes
              para derrubar ou desarmar.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A ESPADA BASTARDA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Espada Bastarda</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 35</Text>
              <Text style={estilo.paragrafoDanoGrande}>1d10/1d12</Text>
              <Text style={estilo.paragrafo}>19</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>3kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Maior e mais pesada que
              a espada longa, esta arma é tradicionalmente usada
              pelos cavaleiros de Bielefeld. A espada bastarda é
              uma arma adaptável. É muito grande para ser usada
              com uma só mão sem treinamento especial; por isso
              é uma arma exótica. Ela pode ser usada como uma
              arma marcial de duas mãos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A KATANA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Katana</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 100</Text>
              <Text style={estilo.paragrafoDanoGrande}>1d8/1d10</Text>
              <Text style={estilo.paragrafo}>19</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>2,5kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              A espada tradicional do samurai tem
              lâmina levemente curva e apenas um gume. A katana
              é uma arma adaptável e ágil. É muito grande para
              ser empunhada com uma só mão sem treinamento especial; por isso, é uma arma exótica. Ela pode ser
              usada como uma arma marcial de duas mãos.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O MACHADO ANÃO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Machado Anão</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 30</Text>
              <Text style={estilo.paragrafo}>1d10</Text>
              <Text style={estilo.paragrafo}>3x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>4kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              A arma preferida por onze
              entre dez guerreiros anões. Um machado anão é
              muito grande para ser usado com uma só mão sem
              treinamento especial; por isso é uma arma exótica.
              Ele pode ser usado como uma arma marcial de
              duas mãos.
            </Text>
          </ScrollView>
        </View>

        {/*ARMAS CORPO A CORPO DE DUAS MÃOS*/}
        <Text style={estilo.descricao}>Corpo a Corpo - Duas Mãos</Text>

        {/*CARD SOBRE A CORRENTE DE ESPINHOS*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Corrente de Espinhos</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 25</Text>
              <Text style={estilo.paragrafoDanoGrande}>2d4/2d4</Text>
              <Text style={estilo.paragrafo}>19</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>5kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Esta arma pode
              ser usada para atacar inimigos a até 4,5m e pode
              se enroscar nas mãos, pernas ou armas de seus
              adversários. A corrente de espinhos é uma arma
              ágil, dupla e versátil, fornecendo +2 em testes para
              derrubar ou desarmar.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE O MACHADO TAURICO*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Machado Táurico</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 50</Text>
              <Text style={estilo.paragrafo}>2d8</Text>
              <Text style={estilo.paragrafo}>3x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafoPeso}>12kg</Text>
              <Text style={estilo.paragrafoTipo}>Corte</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Uma haste comprida com
              uma lâmina extremamente grossa na ponta, esta é
              uma arma ancestral dos minotauros. Um machado
              táurico é muito grande para ser usado sem treinamento especial; por isso, é uma arma exótica. Além
              disso, por ser pesado e desbalanceado, impõe –2 em
              testes de ataque.
            </Text>
          </ScrollView>
        </View>

        {/*ARMAS DE ATAQUE A DISTANCIA*/}
        <Text style={estilo.descricao}>Ataque a Distância</Text>

        {/*CARD SOBRE A REDE*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Rede</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 20</Text>
              <Text style={estilo.paragrafo}>----</Text>
              <Text style={estilo.paragrafo}>----</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>Curto</Text>
              <Text style={estilo.paragrafoPeso}>3kg</Text>
              <Text style={estilo.paragrafoTipo}>----</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              A rede tem pequenos dentes em sua trama e uma corda para controlar os inimigos presos. Se
              você acertar um ataque com a rede, não causa dano.
              Em vez disso, a vítima fica enredada (deslocamento
              reduzido à metade, não pode correr nem fazer investidas e sofre –2 em Defesa e testes de ataque).
            </Text>
            <Text style={estilo.paragrafoSobre}>
              Enquanto você estiver segurando a corda, sempre que a vítima se mover você pode fazer um teste de Força oposto contra ela como uma reação. Se você
              vencer, a vítima só pode se mover até o limite da
              corda (alcance curto).
            </Text>
            <Text style={estilo.paragrafoSobre}>
              A vítima pode se soltar com uma ação completa e
              um teste de Acrobacia (CD 20). A rede tem 5 pontos
              de vida e, se rasgar, qualquer criatura enredada se
              solta automaticamente. A rede só pode ser usada
              contra criaturas no máximo uma categoria de tamanho maior que você.
            </Text>
          </ScrollView>
        </View>

        {/*TODAS ARMAS DE FOGO*/}
        <Text style={estilo.categoria}>Armas de Fogo</Text>
        {/*ARMAS DE ATAQUE A DISTANCIA*/}
        <Text style={estilo.descricao}>Ataque à Distância</Text>

        {/*CARD SOBRE O MOSQUETE*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Mosquete</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 500</Text>
              <Text style={estilo.paragrafo}>2d8</Text>
              <Text style={estilo.paragrafo}>19/3x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>Médio</Text>
              <Text style={estilo.paragrafoPeso}>4kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              Uma arma de fogo de uso difícil,
              mas com poder devastador. Recarregar um mosquete
              é uma ação padrão. Exige as duas mãos.
            </Text>
            <Text style={estilo.paragrafoSobre}>
              Inclui uma bolsa com 20 balas (pequenas esferas de chumbo) e pólvora para 20 tiros
              de mosquete ou pistola.
            </Text>
          </ScrollView>
        </View>

        {/*CARD SOBRE A PISTOLA*/}
        <View style={estilo.card}>
          <Text style={estilo.titulo}>Pistola</Text>
          <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>PREÇO</Text>
              <Text style={estilo.topico}>DANO</Text>
              <Text style={estilo.topico}>CRÍTICO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 250</Text>
              <Text style={estilo.paragrafo}>2d6</Text>
              <Text style={estilo.paragrafo}>19/3x</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>ALCANCE</Text>
              <Text style={estilo.topicoPeso}>PESO</Text>
              <Text style={estilo.topico}>TIPO</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>Curto</Text>
              <Text style={estilo.paragrafoPeso}>1kg</Text>
              <Text style={estilo.paragrafoTipo}>Perfuração</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.topico}>Munição (20)</Text>
            </View>
            <View style={estilo.linha}>
              <Text style={estilo.paragrafo}>T$ 20</Text>
              <Text style={estilo.paragrafo}>0,5kg</Text>
            </View>
            <Text style={estilo.topicoSobre}>Descrição</Text>
            <Text style={estilo.paragrafoSobre}>
              A arma de fogo mais comum. Uma
              pistola conta como uma arma leve para propósitos do
              poder Estilo de Duas Armas e similares. Recarregar
              uma pistola é uma ação padrão.
            </Text>
            <Text style={estilo.paragrafoSobre}>
              Inclui uma bolsa com 20 balas (pequenas esferas de chumbo) e pólvora para 20 tiros
              de mosquete ou pistola.
            </Text>
          </ScrollView>
        </View>

      </View>
    </ScrollView>
  )
}