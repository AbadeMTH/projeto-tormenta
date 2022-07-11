import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Paladino from '../../../assets/imagensClasses/Paladino.png';

import estilo from '../estilo';

export default function TelaPaladino() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS PALADINO*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Paladinos:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            O paladino é um soldado a serviço do bem e da justiça. Não há meio-termo, não há desculpas: paladinos são falhos
                            como todos os mortais, mas devem defender os inocentes, cumprir as leis, obedecer a seus superiores, servir de
                            exemplo e resistir a todas as tentações. É um caminho de muito sacrifício e poucas recompensas, mas alguém deve
                            trilhá-lo.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Paladinos Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            Gregor Vahn, Lothar Algherulff, o Paladino de Jallar, Titus Lomatubarius..
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO PALADINO*/}
                <Image style={estilo.img} source={Paladino} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um paladino começa com 20 pontos de vida (+ modificador de Constituição) e ganha 5 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            3 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Luta (For) e Vontade (Sab) mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Cura
                            (Sab), Diplomacia (Car), Fortitude (Con), Guerra (Int), Iniciativa (Des), Intuição (Sab), Nobreza (Int), Percepção
                            (Sab) e Religião (Sab).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Armas marciais, armaduras pesadas e escudos.
                        </Text>
                    </ScrollView>
                </View>

                {/*TABELA O PALADINO*/}
                <Text style={estilo.categoria}>Tabela O Paladino</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Abençoado, código do herói, golpe divino (+1d8)</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Cura pelas mãos (1d8+1 PV), poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Aura sagrada, poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Benção da justiça, golpe divino (+2d8), poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Cura pelas mãos (2d8+2 PV), poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Golpe divino (+3d8), poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Cura pelas mãos (3d8+3 PV), poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Golpe divino (+4d8), poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Cura pela mãos (4d8+4 PV), poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Golpe divino (+5d8), poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Cura pelas mãos (5d8+5 PV), poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de paladino</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de paladino, vingador sagrado</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Abençoado</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você soma seu bônus de Carisma no seu total de pontos de mana no 1º nível. Além disso, torna-se devoto de uma
                            divindade disponível para paladinos (Azgher, Khalmyr, Lena, Lin-Wu, Marah, Tanna-Toh, Thyatis, Valkaria).
                            Você deve obedecer às Obrigações & Restrições de seu deus, mas, em troca, ganha os Poderes Concedidos dele.
                            Como alternativa, você pode ser um paladino do bem, lutando em prol da bondade e da justiça como um todo.
                            Não recebe nenhum Poder Concedido, mas não precisa seguir nenhuma Obrigação & Restrição (além do Código do
                            Herói, abaixo).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Código do Herói</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você deve sempre manter sua palavra e nunca pode recusar um pedido de ajuda de alguém inocente. Além disso,
                            nunca pode mentir, trapacear ou roubar. Se violar o código, você perde todos os seus PM e só pode recuperá-los
                            a partir do próximo dia
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Golpe Divino</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando faz um ataque corpo a corpo, você pode gastar 2 PM para desferir um golpe destruidor. Você soma seu bônus
                            de Carisma no teste de ataque e +1d8 na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o
                            dano em +1d8.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Cura Pelas Mãos</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            A partir do 2º nível, você pode gastar uma ação de movimento e 1 PM para curar 1d8+1 pontos de vida de um alvo
                            em alcance corpo a corpo (incluindo você). A cada quatro níveis, você pode gastar +1 PM para aumentar os PV
                            curados em +1d8+1. A partir do 6º nível, você pode gastar +1 PM quando usa Cura pelas Mãos para anular uma
                            condição afetando o alvo, entre abalado, apavorado, atordoado, cego, doente, exausto, fatigado ou surdo. Esta
                            habilidade também pode causar dano de luz a mortos-vivos, exigindo um ataque desarmado
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aura Sagrada</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 3º nível, você pode gastar 1 PM para gerar uma aura com alcance curto a partir de você. A aura emite uma
                            luz dourada e agradável, que ilumina como uma tocha. Além disso, você e os aliados dentro da aura recebem
                            um bônus igual ao seu bônus de Carisma nos testes de resistência. Manter a aura custa 1 PM por turno.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benção da Justiça</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 5º nível, escolha entre égide sagrada e montaria sagrada. Uma vez feita, esta escolha não pode ser mudada.
                        </Text>

                        <Text style={estilo.topico}>Égide Sagrada</Text>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação de movimento e 2 PM para recobrir de energia seu escudo ou símbolo sagrado. Até o
                            fim da cena, você e todos os aliados adjacentes recebem um bônus na Defesa igual ao seu bônus de Carisma. A
                            partir do 11º nível, você pode gastar 5 PM para receber o mesmo bônus num teste de resistência contra uma
                            magia recém lançada contra você. Se você passar no teste de resistência e a magia tiver você como único alvo,
                            ela é revertida de volta ao conjurador (que se torna o novo alvo da magia; todas as demais características da
                            magia, incluindo CD do teste de resistência, se mantêm).
                        </Text>

                        <Text style={estilo.topico}>Montaria Sagrada</Text>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação de movimento e 2 PM para invocar uma montaria sagrada. Veja o quadro para mais detalhes.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Vingador Sagrado</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 20º nível, você pode gastar uma ação completa e 10 PM para se cobrir de energia divina, assumindo a forma
                            de um vingador sagrado até o fim da cena. Nesta forma, você recebe deslocamento de voo 18m, resistência a
                            dano 20 e soma seu modificador de Carisma em seus testes de ataque e rolagens de dano corpo a corpo.
                        </Text>
                    </ScrollView>
                </View>

                {/*PODERES DE PALADINO*/}
                <Text style={estilo.categoria}>Poderes de Paladino</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Arma Sagrada</Text>
                    <Text style={estilo.paragrafo}>
                        Se estiver empunhando a arma preferida de seu deus, o dado de dano que você rola por Golpe Divino aumenta para
                        d12.<Text style={estilo.requisito}> Pré-requisito: devoto de uma divindade (exceto Lena e Marah).</Text>
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
                    <Text style={estilo.titulo}>Aura Antimagia</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Enquanto sua aura estiver ativa, você e os aliados dentro da aura podem rolar novamente qualquer teste de
                            resistência contra magia recém realizado.<Text style={estilo.requisito}> Pré-requisito: 14° nível de
                                paladino.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aura Ardente</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Enquanto sua aura estiver ativa, no início de cada um de seus turnos, espíritos e mortos-vivos a sua escolha
                            dentro dela sofrem dano de luz igual a 5 + seu bônus de Carisma.<Text style={estilo.requisito}>
                                Pré-requisito: 10° nível de paladino.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aura de Cura</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Enquanto sua aura estiver ativa, no início de seus turnos, você e os aliados a sua escolha dentro dela curam um
                            número de PV igual a 5 + seu bônus de Carisma.<Text style={estilo.requisito}> Pré-requisito: 6° nível de
                                paladino.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aura de Invencibilidade</Text>
                    <Text style={estilo.paragrafo}>
                        Enquanto sua aura estiver ativa, você ignora o primeiro dano que sofrer na cena. O mesmo se aplica a seus
                        aliados dentro da aura.<Text style={estilo.requisito}> Pré-requisito: 18° nível de paladino.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aura Poderosa</Text>
                    <Text style={estilo.paragrafo}>
                        O alcance da sua aura aumenta para médio.<Text style={estilo.requisito}> Pré-requisito: 6° nível de paladino.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fulgor Divino</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa Golpe Divino, todos os inimigos em alcance curto ficam ofuscados até o início do seu próximo turno.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Julgamento Divino: Arrependimento</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar 2 PM para marcar um inimigo em alcance curto. Na próxima vez que esse inimigo acertar um
                            ataque em você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, fica atordoado
                            no próximo turno dele. Você só pode proferir este julgamento uma vez por cena contra cada criatura.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Julgamento Divino: Autoridade</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar 1 PM para comandar uma criatura em alcance curto. Faça um teste de Diplomacia oposto pelo
                            teste de Vontade da criatura. Se você passar, ela obedece a um comando simples como “pare” ou “largue a arma”.
                            Se a criatura passar, fica imune a esse efeito por um dia.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Julgamento Divino: Coragem</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar 2 PM para inspirar coragem em uma criatura em alcance curto, incluindo você mesmo. A criatura
                            fica imune a efeitos de medo e recebe +2 em testes de ataque contra alvos de ND maior que o nível dela.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Julgamento Divino: Iluminação</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode marcar um inimigo em alcance curto. Quando acerta um ataque corpo a corpo nesse inimigo, você
                            recebe 2 PM temporários. Você só pode proferir este julgamento uma vez por cena.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Julgamento Divino: Justiça</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar 2 PM para marcar um inimigo em alcance curto. A próxima vez que esse inimigo causar dano em
                            você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, sofre dano de luz igual à
                            metade do dano que causou.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Julgamento Divino: Libertação</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar 5 PM para cancelar uma condição negativa qualquer (como abalado, paralisado etc.) que esteja
                            afetando uma criatura em alcance curto.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Julgamento Divino: Salvação</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar 2 PM para marcar um inimigo em alcance curto. Até o fim da cena, quando você acerta um ataque
                            corpo a corpo nesse inimigo, recupera 5 pontos de vida.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Julgamento Divino: Vindicação</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar 2 PM para marcar um inimigo que tenha causado dano a você ou a seus aliados na cena. Você
                            recebe +1 em testes de ataque e +1d8 em rolagens de dano contra o inimigo escolhido, mas sofre –5 em testes
                            de ataque contra quaisquer outros alvos. No 5º nível, e a cada cinco níveis seguintes, você pode pagar +1 PM
                            para aumentar o bônus de ataque em +1 e o bônus de dano em +1d8. O efeito termina caso o alvo fique inconsciente.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Julgamento Divino: Zelo</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode gastar 1 PM para marcar um alvo em alcance longo. Pelo restante da cena, sempre que se mover na
                        direção desse alvo, você se move com o dobro de seu deslocamento.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Orar</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você aprende e pode lançar uma magia divina de 1º círculo a sua escolha. Seu atributo-chave para esta magia é
                            Sabedoria. Você pode escolher este poder quantas vezes quiser.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Virtude Paladinesca: Caridade</Text>
                    <Text style={estilo.paragrafo}>
                        O custo de suas habilidades de paladino que tenham um aliado como alvo é reduzido em 1 PM.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Virtude Paladinesca: Castidade</Text>
                    <Text style={estilo.paragrafo}>
                        Você se torna imune a efeitos de encantamento e recebe +5 em testes de Intuição para perceber blefes.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Virtude Paladinesca: Compaixão</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode usar Cura pelas Mãos em alcance curto e, para cada PM que gastar, cura 2d6+1 (em vez de 1d8+1).
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Virtude Paladinesca: Humildade</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Na primeira rodada de um combate, você pode gastar uma ação completa para rezar e pedir orientação. Você recebe
                            uma quantidade de PM temporários igual ao seu bônus de Carisma.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Virtude Paladinesca: Temperança</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando ingere um alimento, item alquímico ou poção, você consome apenas metade do item. Na prática, cada item
                            desses rende duas “doses” para você.
                        </Text>
                    </ScrollView>
                </View>

                {/*VIRTUDES PALADINESCAS*/}
                <Text style={estilo.categoria}>Virtudes Paladinescas</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Este conjunto de poderes representa obediência veemente a um comportamento específico. Você recebe um bônus
                            progressivo em seu total de pontos de mana de acordo com a quantidade de poderes desse tipo que possui: +1 PM
                            para uma Virtude, +3 PM para duas, +6 PM para três, +10 PM para quatro e +15 PM para cinco Virtudes. Virtudes
                            Paladinescas são poderosas, mas possuem uma contrapartida — você deve se comportar de acordo com quaisquer
                            Virtudes que possuir. Um paladino caridoso, por exemplo, deve sempre ajudar os necessitados, enquanto um casto
                            nunca pode cair em tentação. Não seguir uma Virtude Paladinesca que você possua conta como uma violação do
                            Código do Herói. O mestre tem a palavra final sobre o que exatamente constitui uma violação.
                        </Text>
                    </ScrollView>
                </View>

                {/*JULGAMENTOS DIVINOS*/}
                <Text style={estilo.categoria}>Julgamentos Divinos</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Alguns poderes do paladino são Julgamentos Divinos. Esses poderes compartilham as seguintes regras.
                        </Text>

                        <Text style={estilo.requisito}>
                            Proferir um julgamento gasta uma ação de movimento, a menos que a descrição diga o contrário.
                        </Text>

                        <Text style={estilo.requisito}>
                            Julgamentos que não têm um efeito instantâneo duram até o fim da cena.
                        </Text>

                        <Text style={estilo.requisito}>
                            Uma mesma criatura pode ser alvo de vários julgamentos diferentes, mas efeitos do mesmo julgamento não se
                            acumulam.
                        </Text>
                    </ScrollView>
                </View>

                {/*MONTARIA SAGRADA*/}
                <Text style={estilo.categoria}>Montaria Sagrada</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Um paladino de 5º nível pode receber uma montaria sagrada, designada pelos deuses. Este animal vai atuar como um
                            fiel companheiro de batalhas. Normalmente será um cavalo de guerra para paladinos de tamanho Médio ou um pônei
                            para paladinos Pequenos, mas suplementos futuros trarão outras opções de montarias sagradas. Para invocar sua
                            montaria você gasta uma ação de movimento e 2 PM. Ela aparece com um brilho de luz dourada ao seu lado e fica
                            até o fim da cena, quando desaparece de volta para o mundo divino de onde veio. Como opção para campanhas mais
                            realistas, a montaria sagrada pode ser um animal mundano, em vez de invocado. Neste caso, você nunca precisará
                            gastar uma ação ou PM para ter a montaria — que já estará com você. Por outro lado, o animal pode não ser capaz
                            de acompanhá-lo em todos os lugares (um cavalo, por exemplo, não conseguirá entrar num túnel apertado ou escalar
                            uma montanha). Você e sua montaria têm um vínculo mental, sendo sempre capazes de entender um ao outro (não é
                            preciso fazer testes de Adestramento). Ela fornece os benefícios de um aliado iniciante de seu tipo. No 11º
                            nível, passa a fornecer os benefícios de um aliado veterano e, no 17º nível, de um aliado mestre. Veja a lista
                            de aliados na página 246. Uma montaria cumpre qualquer ordem sua, mesmo que signifique arriscar a vida. Se a
                            montaria sagrada morrer, você fica atordoado por uma rodada. Você pode invocar uma nova montaria após um dia
                            inteiro de prece e meditação.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}