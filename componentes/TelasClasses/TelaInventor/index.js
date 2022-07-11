import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Inventor from '../../../assets/imagensClasses/Inventor.png';
import Tabela from '../../../assets/imagensClasses/TabelaInventor.png';

import estilo from '../estilo';

export default function TelaIventor() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS INVENTOR*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Inventores:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            O inventor é um dos mais raros tipos de aventureiros. Enquanto outros se preocupam com glória, riquezas e missões
                            divinas, o inventor almeja testar e aprimorar suas criações mirabolantes. Enquanto outros contam com força bruta, fé
                            ou mistérios ancestrais, o inventor confia em si mesmo e olha para o futuro. Criatividade, otimismo, paciência e
                            trabalho duro: estas são as armas do inventor.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Inventores Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            Dok, Ingram Brassbones, Marlin, Lorde Niebling.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO INVENTOR*/}
                <Image style={estilo.img} source={Inventor} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um inventor começa com 12 pontos de vida (+ modificador de Constituição) e ganha 3 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            4 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Ofício (Int) e Vontade (Sab), mais 4 a sua escolha entre Conhecimento (Int), Cura (Sab), Diplomacia (Car), Fortitude
                            (Con), Iniciativa (Des), Investigação (Int), Luta (For), Misticismo (Int), Ofício (Int), Pilotagem (Des), Pontaria
                            (Des) e Percepção (Sab).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Nenhuma.
                        </Text>
                    </ScrollView>
                </View>

                {/*TABELA O INVENTOR*/}
                <Text style={estilo.categoria}>Tabela O Inventor</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Engenhosidade, protótipo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Fabricar item superior (1 modificação), poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Comerciante, poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Fabricar item superior (2 modificações), poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Fabricar item superior (3 modificações), poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Encontrar fraqueza, poder do inventor</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Fabricar item superior (4 modificações), poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Fabricar item mágico (menor), poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Fabricar item superior (5 modificações), poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Olho do dragão, poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Fabricar item superior (6 modificações), poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Fabricar item mágico (médio), poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Fabricar item mágico (maior), poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de inventor</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>Obra-prima, poder de inventor</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Engenhosidade</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando faz um teste de perícia, você pode gastar 2 PM para receber um bônus igual ao seu modificador de
                            Inteligência no teste. Você não pode usar esta habilidade em testes de ataque.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Protótipo</Text>
                    <Text style={estilo.paragrafo}>
                        Você começa o jogo com um item superior com uma modificação ou 10 itens alquímicos, com preço total de até T$
                        500. Veja o Capítulo 3: Equipamento para a lista de itens.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fabricar Item Superior</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 2º nível, você recebe um item superior com preço de até T$ 2.000 e passa a poder fabricar itens superiores com
                            uma modificação. Veja o Capítulo 3: Equipamento para a lista de modificações. Nos níveis 4, 6, 8, 10 e 12, você
                            pode substituir esse item por um item superior com duas, três, quatro, cinco e seis modificações, respectivamente,
                            e passa a poder fabricar itens superiores com essa quantidade de modificações. O item do 4º nível tem limite de
                            preço de T$ 5.000. Os demais itens não possuem limitação de preço. Considera-se que você estava trabalhando nos
                            itens e você não gasta dinheiro ou tempo neles (mas gasta em itens que fabricar futuramente).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Comerciante</Text>
                    <Text style={estilo.paragrafo}>
                        No 3º nível, você pode vender itens 10% mais caro (não cumulativo com barganha).
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Encontrar Fraqueza</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            A partir do 7º nível, você pode gastar uma ação de movimento e 2 PM para analisar um objeto em alcance curto. Se
                            fizer isso, ignora a resistência a dano dele. Você também pode usar esta habilidade para encontrar uma fraqueza
                            em um inimigo. Se ele estiver de armadura ou for um construto, você recebe +2 em seus testes de ataque contra
                            ele. Os benefícios desta habilidade duram até o fim da cena.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fabricar Item Mágico</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 9º nível, você recebe um item mágico menor e passa a poder fabricar itens mágicos menores. Veja o Capítulo 8:
                            Recompensas para as regras de itens mágicos. Nos níveis 13 e 17, você pode substituir esse item por um item
                            mágico médio e maior, respectivamente, e passa a poder fabricar itens mágicos dessas categorias. Considera-se
                            que você estava trabalhando nos itens que recebe e você não gasta dinheiro, tempo ou pontos de mana neles
                            (mas gasta em itens que fabricar futuramente).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Olho do Dragão</Text>
                    <Text style={estilo.paragrafo}>
                        A partir do 11º nível, você pode gastar uma ação completa para analisar um item. Você automaticamente descobre se
                        o item é mágico, suas propriedades e como utilizá-las.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Obra-Prima</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 20º nível, você fabrica sua obra-prima, aquela pela qual seu nome será lembrado em eras futuras. Você é livre
                            para criar as regras do item, mas ele deve ser aprovado pelo mestre. Como linha geral, ele pode ter os benefícios
                            de um item superior com seis modificações e de um item mágico maior. Considera-se que você estava trabalhando no
                            item e você não gasta dinheiro, tempo ou PM nele.
                        </Text>
                    </ScrollView>
                </View>

                {/*PODERES DE INVENTOR*/}
                <Text style={estilo.categoria}>Poderes de Inventor</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Agite Antes de Usar</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando usa um item alquímico que cause dano, você pode gastar uma quantidade de PM a sua escolha (limitado pelo
                            seu bônus de Inteligência). Para cada PM que gastar, o item causa um dado extra de dano do mesmo tipo.
                            <Text style={estilo.requisito}> Pré-requisito: treinado em Ofício (alquimia).</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ajuste de Mira</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitado pelo seu bônus de
                            Inteligência) para aprimorar uma arma de ataque à distância que esteja usando. Para cada PM que gastar, você
                            recebe +1 em rolagens de dano com a arma até o final da cena.<Text style={estilo.requisito}> Pré-requisito:
                                Balística.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Alquimista de Batalha</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa um item alquímico ou poção que cause dano, você soma seu modificador de Inteligência na rolagem de
                        dano.<Text style={estilo.requisito}> Pré-requisito: Alquimista Iniciado.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Alquimista Iniciado</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe um livro de fórmulas e pode fabricar poções com fórmulas que conheça de 1º e 2º círculos. Veja a
                            página 327 para as regras de poções.<Text style={estilo.requisito}> Pré-requisitos: Int 13, Sab 13, treinado em
                                Ofício (alquimia).</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Armeiro</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe proficiência com armas marciais corpo a corpo. Quando usa uma arma corpo a corpo, pode usar seu
                            modificador de Inteligência em vez de Força nos testes de ataque e rolagens de dano.
                            <Text style={estilo.requisito}> Pré-requisitos: treinado em Luta e Ofício (armeiro).</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ativação Rápida</Text>
                    <Text style={estilo.paragrafo}>
                        Ao ativar uma engenhoca com ação padrão, você pode pagar 2 PM para ativá-la com uma ação de movimento, ao invés
                        disto.<Text style={estilo.requisito}> Pré-requisitos: Engenhoqueiro, 7º nível de inventor.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aumento de Atributo</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez
                            que escolhê-lo para o mesmo atributo, o aumento diminui para +1.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Autômato</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você fabrica um autômato, uma criatura mecânica que obedece a seus comandos. Ele é um aliado Iniciante de um tipo
                            a sua escolha entre ajudante, assassino, atirador, combatente, guardião, montaria ou vigilante. No 7º nível, ele
                            muda para Veterano e, no 15º nível, para Mestre. Se o autômato for destruído, você pode fabricar um novo com uma
                            semana de trabalho e T$ 100.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Autômato Prototipado</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação padrão e 2 PM para ativar uma modificação experimental no autômato. Role 1d6. Em
                            um resultado 2 a 6, você aumenta o nível de aliado do autômato em um passo (até Mestre), ou concede a ele a
                            habilidade Iniciante de outro tipo de aliado, até o fim da cena. Em um resultado 1, o autômato enguiça como
                            uma engenhoca.<Text style={estilo.requisito}> Pré-requisitos: Autômato, Engenhoqueiro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Balística</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe proficiência com armas marciais de ataque à distância ou com armas de fogo. Quando usa uma arma de
                            ataque à distância, pode usar seu modificador de Inteligência em vez de Destreza nos testes de ataque (e, caso
                            possua o poder Estilo de Disparo, nas rolagens de dano).<Text style={estilo.requisito}> Pré-requisitos: treinado
                                em Pontaria e Ofício (armeiro).</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Blindagem</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode somar o modificador de Inteligência na Defesa quando usa armadura pesada. Se fizer isso, não pode somar
                            o modificador de Destreza, mesmo que outras habilidades ou efeitos permitam isso (como a modificação Delicada,
                            por exemplo).<Text style={estilo.requisito}> Pré-requisitos: Couraceiro, 8º nível de inventor.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Cano Raiado</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa uma arma de disparo feita por você mesmo, ela recebe +1 na margem de ameaça.
                        <Text style={estilo.requisito}> Pré-requisitos: Balística, 5º nível de inventor.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Catalisador Instável</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação completa e 3 PM para fabricar um item alquímico ou poção cuja fórmula conheça
                            instantaneamente. O custo do item é reduzido à metade e você não precisa fazer o teste de Ofício (alquimia).
                            Contudo, ele só dura até o fim da cena.<Text style={estilo.requisito}> Pré-requisito: Alquimista Iniciado.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Chutes e Palavrões</Text>
                    <Text style={estilo.paragrafo}>
                        Uma vez por rodada, você pode pagar 1 PM para repetir um teste falho de Ofício (engenhoqueiro) recém realizado
                        para ativar uma engenhoca.<Text style={estilo.requisito}> Pré-requisito: Engenhoqueiro.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Conhecimento de Fórmulas</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você aprende três fórmulas de quaisquer círculos que possa aprender. Você pode escolher este poder quantas vezes
                            quiser.<Text style={estilo.requisito}> Pré-requisito: Alquimista Iniciado.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Couraceiro</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe proficiência com armaduras pesadas e escudos. Quando usa armadura, pode somar seu bônus de
                            Inteligência em vez de Destreza na Defesa (mas continua não podendo somar um bônus de atributo na Defesa q
                            uando usa armadura pesada).<Text style={estilo.requisito}> Pré-requisito: treinado em Ofício (armeiro).</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Engenhoqueiro</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode fabricar engenhocas. Veja as regras para isso na página 70.<Text style={estilo.requisito}>
                            Pré-requisitos: Int 17, treinado em Ofício (engenhoqueiro).</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Farmacêutico</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando usa um item alquímico que cure pontos de vida, você pode gastar uma quantidade de PM a sua escolha
                            (limitado pelo seu bônus de Inteligência). Para cada PM que gastar, o item cura um dado extra do mesmo tipo.
                            <Text style={estilo.requisito}> Pré-requisitos: Sab 13, treinado em Ofício (alquimia).</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ferreiro</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa uma arma corpo a corpo feita por você mesmo, o dano dela aumenta em um passo.
                        <Text style={estilo.requisito}> Pré-requisitos: Armeiro, 5º nível de inventor.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Granadeiro</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode arremessar itens alquímicos e poções em alcance médio. Você pode usar seu modificador de Inteligência
                            em vez de Destreza para calcular a CD do teste de resistência desses itens.
                            <Text style={estilo.requisito}> Pré-requisito: Alquimista de Batalha.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Homúnculo</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você possui um homúnculo, uma criatura Minúscula feita de alquimia. Vocês podem se comunicar telepaticamente em
                            alcance médio e ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de seu tamanho e forma
                            pode fazer. Um homúnculo funciona como um aliado que fornece +2 em testes de uma perícia a sua escolha. Você
                            pode sofrer 1d6 pontos de dano para seu homúnculo assumir uma forma capaz de protegê-lo. Se fizer isso, ele
                            fornece +2 de Defesa até o fim da cena.<Text style={estilo.requisito}> Pré-requisito: Alquimista Iniciado.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Invenção Potente</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa um item fabricado por você mesmo, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ele.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Maestria em Perícia</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Escolha um número de perícias treinadas igual ao seu bônus de Inteligência. Com essas perícias, você pode
                            gastar 1 PM para escolher 10 em qualquer situação, exceto testes de ataque.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Manutenção Eficiente</Text>
                    <Text style={estilo.paragrafo}>
                        A quantidade de engenhocas que você pode manter aumenta em +3.<Text style={estilo.requisito}> Pré-requisitos:
                            Engenhoqueiro, 5º nível de inventor.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Mestre Alquimista</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode fabricar poções com fórmulas que conheça de qualquer círculo.<Text style={estilo.requisito}>
                            Pré-requisitos: Int 17, Sab 17, Alquimista Iniciado, 10º nível de inventor</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Mestre Cuca</Text>
                    <Text style={estilo.paragrafo}>
                        Todas as comidas que você cozinha têm seu bônus numérico aumentado em +1.<Text style={estilo.requisito}>
                            Pré-requisito: treinado em Ofício (culinária)</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Mistura Fervilhante</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa um item alquímico ou poção, você pode gastar 2 PM para dobrar a área de efeito dele.
                        <Text style={estilo.requisito}> Pré-requisitos: Alquimista Iniciado, 5º nível de inventor.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Oficina de Campo</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma hora e 2 PM para fazer a manutenção do equipamento de seu grupo. Cada membro do grupo
                            escolhe uma arma, armadura ou escudo para manutenção. Armas recebem +1 em testes de ataque, armaduras e escudos
                            têm sua penalidade de armadura reduzida em 1. Os benefícios duram um dia.
                            <Text style={estilo.requisito}> Pré-requisito: treinado em Ofício (armeiro).</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Pedra de Amolar</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitado pelo seu bônus de
                            Inteligência) para aprimorar uma arma corpo a corpo que esteja usando. Para cada PM que gastar, você recebe +1
                            em rolagens de dano com a arma até o final da cena.<Text style={estilo.requisito}> Pré-requisito: Armeiro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Síntese Rápida</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você fabrica itens alquímicos e poções em uma categoria de tempo menor. Três meses viram um mês, um mês vira uma
                            semana, uma semana vira um dia e um dia vira uma hora (o tempo mínimo).
                            <Text style={estilo.requisito}> Pré-requisito: Alquimista Iniciado.</Text>
                        </Text>
                    </ScrollView>
                </View>

                {/*LIVRO DE FORMULAS*/}
                <Text style={estilo.categoria}>Livro de Fórmulas</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando adquire o poder Alquimista Iniciado, você recebe um livro de fórmulas. Uma “fórmula” é uma magia divina ou
                            arcana (atributo-chave Inteligência) que serve para cumprir os pré-requisitos de fabricação de poções. Você começa
                            com três fórmulas de 1º círculo. A cada nível, aprende uma fórmula adicional. A partir do 6º nível, pode aprender
                            fórmulas de 2º círculo e, se possuir o poder Mestre Alquimista, a cada quatro níveis (10º, 14º e 18º) pode aprender
                            fórmulas de um círculo maior. Se não tiver seu livro de fórmulas, você não pode fabricar poções. Se perder seu livro,
                            você pode preparar outro com uma semana de trabalho e o gasto de T$ 100.
                        </Text>
                    </ScrollView>
                </View>

                {/*ENGENHOCAS*/}
                <Text style={estilo.categoria}>Engenhocas</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Uma engenhoca é uma invenção que simula o efeito de uma magia. Exemplos incluem um canhão (simula o efeito da magia
                            Bola de Fogo), uma arma de raios (Relâmpago), um casaco blindado (Armadura Arcana), um emplastro curativo (Curar
                            Ferimentos), um guarda-costas mecânico (Conjurar Monstro), um projetor de imagens (Criar Ilusão), um veículo a vapor
                            (Montaria Arcana) etc.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fabricação</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Para fabricar uma engenhoca, escolha uma magia arcana ou divina de 1º círculo. Essa será a magia que a engenhoca irá
                            simular. A partir do 6º nível, você pode criar engenhocas com magias de 2º círculo e, a cada quatro níveis, pode
                            criar engenhocas de um círculo maior. O custo da engenhoca é T$ 100 x o custo em PM da magia que ela simula. A CD
                            para fabricá-la é 20 + o custo em PM da magia. Assim, para fabricar uma engenhoca que simula o efeito de uma magia
                            de 2º círculo (3 PM) você precisa gastar T$ 300 e passar em um teste de Ofício (engenhoqueiro) contra CD 23. Limite
                            de Engenhocas. Engenhocas são itens complexos e delicados, que exigem manutenção constante. O máximo de engenhocas
                            que você pode ter ao mesmo tempo é igual a seu bônus de Inteligência.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ativação</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Ativar uma engenhoca exige uma mão livre, uma ação padrão (ou a execução da magia, o que for maior) e um teste de
                            Ofício (engenhoqueiro) contra CD 15 + custo em PM da magia. Se você passar, a engenhoca gera o efeito da magia
                            (atributo-chave Int). Se falhar, a engenhoca enguiça e não pode ser utilizada até ser consertada, o que exige uma
                            hora de trabalho. Cada nova ativação da engenhoca no mesmo dia aumenta a CD do teste de Ofício em +5. Quando ativa
                            uma engenhoca, você pode usar quaisquer aprimoramentos da magia que ela simula, até um custo máximo igual ao seu
                            bônus de Inteligência. A CD para ativar a engenhoca aumenta em +1 por PM e você paga o custo em PM dos
                            aprimoramentos. Se a engenhoca simula o efeito de uma magia com custos especiais, esse custo deve ser pago a cada
                            ativação. Para outros custos e limitações, o efeito gerado pela engenhoca funciona exatamente como uma magia. Por
                            exemplo, para manter um efeito com duração sustentada que tenha sido gerado por uma engenhoca, o inventor deve
                            pagar 1 PM no início de cada um de seus turnos. Da mesma forma, só pode manter um efeito sustentado por vez,
                            independentemente de os efeitos terem sido gerados por engenhocas ou magias. Um efeito que especificamente impeça
                            um personagem de lançar magias (como a Fúria de um bárbaro ou a magia Transformação de Guerra) também impede um
                            inventor de ativar engenhocas. Engenhocas que geram magias arcanas não são afetadas pelo uso de armaduras. Em outras
                            palavras, o inventor pode ativar engenhocas que geram magias arcanas enquanto usa uma armadura sem precisar fazer um
                            teste de Misticismo. Porém, a ativação de uma engenhoca exige movimentos rápidos e precisos. Por isso, o teste de
                            Ofício (engenhoqueiro) para ativar engenhocas sofre penalidade de armadura. Essa penalidade se aplica a todas as
                            engenhocas, não apenas aquelas que geram magias arcanas. O efeito de uma engenhoca não é mágico e não está sujeito
                            às limitações de magias (não pode ser dissipado, funciona em áreas de antimagia etc.).
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}