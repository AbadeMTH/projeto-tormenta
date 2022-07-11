import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Druida from '../../../assets/imagensClasses/Druida.png';
import Tabela from '../../../assets/imagensClasses/TabelaDruida.png';

import estilo from '../estilo';

export default function TelaDruida() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS DRUIDA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Druida:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            O druida é um tipo específico de sacerdote. Devotado a Allihanna, a Deusa da Natureza; Megalokk, o Deus dos Monstros,
                            ou Oceano, o Deus dos Mares, o druida é mais do que um líder religioso. É um guardião de tudo que é selvagem, vivo e
                            puro, um devoto ligado a uma forma primordial de culto divino. Não tem uma congregação ou um templo: vive com os
                            animais e as plantas, realiza suas cerimônias a céu aberto. Sua devoção tem menos a ver com palavras e ritos do que
                            com sangue, seiva, terra, carne. O contato do druida com os deuses e o mundo natural é primitivo, bruto, incorrupto.
                            Muitas vezes um druida nem mesmo reconhece seu deus padroeiro, conectando-se com as forças naturais cruas, sem rosto
                            e sem nome.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Druidas Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            Lisandra, Oihana, Shantall, Trebane.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO DRUIDA*/}
                <Image style={estilo.img} source={Druida} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um druida começa com 16 pontos de vida (+ modificador de Constituição) e ganha 4 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            4 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Sobrevivência (Sab) e Vontade (Sab), mais 4 a sua escolha entre Adestramento (Car) Atletismo (For), Cavalgar (Des),
                            Conhecimento (Int), Cura (Sab), Fortitude (Con), Iniciativa (Des), Intuição (Sab), Luta (For), Misticismo (Int),
                            Ofício (Int), Percepção (Sab) e Religião (Sab).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Escudos.
                        </Text>
                    </ScrollView>
                </View>

                {/*TABELA O DRUIDA*/}
                <Text style={estilo.categoria}>Tabela O Druida</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Devoto, empatia selvagem, magias (1° círculo)</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Caminho dos ermos, poder de druida</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (2° círculo), poder de druida</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (3° círculo), poder de druida</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (4° círculo), poder de druida</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de druida</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>Força da natureza, poder de druida</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Devoto</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você se torna devoto de uma divindade disponível para druidas (Allihanna, Megalokk ou Oceano). Você deve obedecer
                            às Obrigações & Restrições de seu deus, mas, em troca, ganha os Poderes Concedidos dele. O nome desta habilidade
                            muda de acordo com a divindade escolhida: Devoto de Allihanna, Devoto de Megalokk ou Devoto de Oceano.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Empatia Selvagem</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento
                        com animais para mudar atitude e pedir favores.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Magias</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode lançar magias divinas
                            de 1º círculo que pertençam a essas escolas. À medida que sobe de nível, pode lançar magias de círculos maiores
                            (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º
                            círculo. A cada nível par (2º, 4º etc.), aprende uma magia de qualquer círculo e escola que possa lançar. Seu
                            atributo-chave para lançar magias é Sabedoria e você soma seu bônus de Sabedoria no seu total de PM.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Caminho dos Ermos</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 2º nível, você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastreá-lo
                            aumenta em +10. Esta habilidade só funciona em terrenos naturais.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Força da Natureza</Text>
                    <Text style={estilo.paragrafo}>
                        No 20º nível, você diminui o custo de todas as suas magias em –2 PM e aumenta a CD delas em +2. Os bônus dobram
                        (–4 PM e +4 na CD) se você estiver em terrenos naturais.
                    </Text>
                </View>

                {/*PODERES DE DRUIDA*/}
                <Text style={estilo.categoria}>Poderes de Druida</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aspecto do Inverno</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe resistência a frio 5 e suas magias que causam dano de frio causam +1 ponto de dano por dado. Durante
                        o inverno, suas magias de druida custam −1 PM.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aspecto do Outono</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você aprende uma magia de necromancia, arcana ou divina, de qualquer círculo que possa lançar. Você pode gastar 1
                            PM para impor uma penalidade de –2 nos testes de resistência de todos os inimigos em alcance médio até o início
                            do seu próximo turno. Durante o outono, suas magias de druida custam −1 PM.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aspecto da Primavera</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe +1 em Carisma e suas magias de cura curam +1 PV por dado. Durante a primavera, suas magias de druida
                        custam −1 PM.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aspecto do Verão</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe +2 em Iniciativa e pode gastar 1 PM para cobrir suas armas ou armas naturais com chamas, causando
                            +1d6 pontos de dano de fogo até o fim da cena. Durante o verão, suas magias de druida custam −1 PM.
                        </Text>
                    </ScrollView>
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
                    <Text style={estilo.titulo}>Companheiro Animal</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe um companheiro animal. Veja o quadro a seguir para detalhes.<Text style={estilo.requisito}>
                            Pré-requisito: treinado em Adestramento.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Companheiro Animal Adicional</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe um companheiro animal adicional, de um tipo diferente dos que já tenha. Você pode escolher este
                            poder quantas vezes quiser, mas ainda está sujeito ao limite de aliados que pode ter (veja a página 246).
                            <Text style={estilo.requisito}> Pré-requisitos: Car 15, Companheiro Animal, 7º nível de druida.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Companheiro Animal Aprimorado</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Escolha um de seus companheiros animais. Esse animal recebe um segundo tipo diferente, ganhando os bônus
                            equivalentes. Por exemplo, se você tiver um companheiro guardião, pode adicionar o tipo fortão a ele,
                            tornando-o um guardião fortão que concede +2 na Defesa e +1d8 nas rolagens de dano corpo a corpo.
                            <Text style={estilo.requisito}> Pré-requisitos: Companheiro Animal, 8º nível de druida.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Companheiro Animal Lendário</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Escolha um de seus companheiros animais. Esse animal passa a dobrar seus bônus concedidos. No caso de
                            companheiros que concedem dados de bônus, o número de dados aumenta em 1.
                            <Text style={estilo.requisito}> Pré-requisitos: Companheiro Animal, 18º nível de druida.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Companheiro Animal Mágico</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Escolha um de seus companheiros animais. Esse animal recebe um segundo tipo diferente, entre destruidor ou
                            médico, ganhando os bônus equivalentes.<Text style={estilo.requisito}> Pré-requisitos: Companheiro Animal,
                                8º nível de druida.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Coração da Selva</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe +2 em Fortitude e se torna imune a venenos.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Espírito dos Equinócios</Text>
                    <Text style={estilo.paragrafo}>
                        Sua alma e corpo estão em equilíbrio. Você pode gastar 1 PM para escolher 10 em um teste de resistência.
                        <Text style={estilo.requisito}> Pré-requisitos: Aspecto da Primavera, Aspecto do Outono, 10º nível de druida.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Espírito dos Solstícios</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você transita entre os extremos do mundo natural. Quando lança uma magia, pode gastar +4 PM para maximizar os
                            efeitos numéricos variáveis dela. Por exemplo, uma magia Curar Ferimentos aprimorada para curar 5d8+5 PV irá
                            curar automaticamente 45 PV, sem a necessidade de rolar dados. Uma magia sem efeitos variáveis não pode ser
                            afetada por este poder.<Text style={estilo.requisito}> Pré-requisitos: Aspecto do Inverno, Aspecto do Verão,
                                10º nível de druida.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Força dos Penhascos</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe +2 em Fortitude. Se estiver pisando em rocha sólida, pode gastar 1 PM e uma reação para receber RD
                        10 contra um ataque.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Forma Primal</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando usa Forma Selvagem, você pode se transformar em uma fera primal. Você recebe os benefícios de dois tipos
                            de animais (bônus iguais não se acumulam; use o que você quiser de cada tipo).
                            <Text style={estilo.requisito}> Pré-requisitos: Forma Selvagem duas vezes, 18º nível de druida.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Forma Selvagem</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode se transformar em um tipo de animal. Veja a seguir. Você pode escolher este poder diversas vezes. A
                        cada vez, aprende uma forma selvagem diferente.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Liberdade da Pradaria</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe +2 em Reflexos. Se estiver ao ar livre, você pode gastar 1 PM sempre que lançar uma magia para
                            aumentar o alcance dela em um passo (de toque para curto, de curto para médio etc.).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Magia Natural</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode lançar magias em forma selvagem.<Text style={estilo.requisito}> Pré-requisitos: Forma Selvagem,
                            8º nível de druida.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Presas Afiadas</Text>
                    <Text style={estilo.paragrafo}>
                        A margem de ameaça de suas armas naturais em forma selvagem aumenta em +2.<Text style={estilo.requisito}>
                            Pré-requisito: Forma Selvagem.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Segredos da Natureza</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você aprende duas magias de qualquer círculo que possa lançar. Elas devem pertencer às escolas que você sabe
                            usar, mas podem ser arcanas ou divinas. Você pode escolher este poder quantas vezes quiser
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Tranquilidade dos Lagos</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe +2 em Vontade. Se estiver em alcance médio de um lago, rio ou equivalente, pode gastar 1 PM uma vez
                        por rodada para repetir um teste de resistência recém realizado.
                    </Text>
                </View>

                {/*FORMA SELVAGEM*/}
                <Text style={estilo.categoria}>Formas Selvagens</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação completa e 3 PM para adquirir a forma de uma criatura selvagem. Em termos de jogo, quando
                            usa esta habilidade você adquire os modificadores de uma forma que conheça. Características não mencionadas não
                            mudam. Na forma selvagem você não pode falar, atacar com armas ou lançar magias. Qualquer equipamento que esteja
                            usando desaparece (e você perde seus benefícios), mas ressurge quando você volta ao normal. Outras criaturas podem
                            fazer um teste de Percepção oposto pelo seu teste de Enganação (você recebe +10 neste teste) para perceber que você
                            não é um animal comum. Cada transformação dura pelo tempo que você quiser, mas você reverte à forma normal se ficar
                            inconsciente ou morrer. A partir do 6º nível, você pode usar a versão Aprimorada das formas que conhece, com custo
                            de 6 PM. A partir do 12º nível, pode usar a forma Superior, pagando 10 PM.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Forma Ágil</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe Destreza +6 e duas armas naturais que causam 1d6 pontos de dano e possuem margem de ameaça 19. Se atacar
                            com ambas, sofre –2 em todos os testes de ataque até o seu próximo turno.
                        </Text>

                        <Text style={estilo.topico}>Aprimorada</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe Destreza +10, deslocamento +3m e duas armas naturais (como acima, mas com dano de 1d8). Seu tamanho muda
                            para Grande (–2 em Furtividade, +2 em testes de manobra).
                        </Text>

                        <Text style={estilo.topico}>Superior</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe Destreza +20, deslocamento +6m e duas armas naturais (como acima, mas com dano de 1d10). Seu tamanho muda
                            para Grande (–2 em Furtividade, +2 em testes de manobra).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Forma Feroz</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe Força +6, +2 na Defesa e uma arma natural que causa 1d8 pontos de dano.
                        </Text>

                        <Text style={estilo.topico}>Aprimorada</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe Força +10, +5 na Defesa e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Grande
                            (–2 em Furtividade, +2 em testes de manobra).
                        </Text>

                        <Text style={estilo.topico}>Superior</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe Força +20, +10 na Defesa e uma arma natural que causa 4d6 pontos de dano. Seu tamanho muda para Enorme
                            (–5 em Furtividade, +5 em testes de manobra).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Forma Resistente</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe +5 na Defesa, resistência a dano 5 e uma arma natural que causa 1d6 pontos de dano.
                        </Text>

                        <Text style={estilo.topico}>Aprimorada</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe Força +6, +10 na Defesa, resistência a dano 10 e uma arma natural que causa 1d8 pontos de dano. Seu
                            tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).
                        </Text>

                        <Text style={estilo.topico}>Superior</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe Força +10, +15 na Defesa, resistência a dano 15 e uma arma natural que causa 2d6 pontos de dano. Seu
                            tamanho muda para Enorme (–5 em Furtividade, +5 em testes de manobra).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Forma Sorrateira</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe Destreza +6 e uma arma natural que causa 1d4 pontos de dano. Seu tamanho muda para Pequeno (+2 em
                            Furtividade, –2 em testes de manobra).
                        </Text>

                        <Text style={estilo.topico}>Aprimorada</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe Destreza +10. Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes de manobra).
                        </Text>

                        <Text style={estilo.topico}>Superior</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe Destreza +20 e deslocamento de voo 18m. Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes
                            de manobra).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Forma Veloz</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe Destreza +6, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento
                            15m, deslocamento de escalada 9m ou deslocamento de natação 9m.
                        </Text>

                        <Text style={estilo.topico}>Aprimorada</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe Destreza +10, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento
                            18m, deslocamento de escalada 12m ou deslocamento de natação 12m.
                        </Text>

                        <Text style={estilo.topico}>Superior</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe Destreza +20, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento de
                            natação 18m ou deslocamento de voo 24m.
                        </Text>
                    </ScrollView>
                </View>

                {/*COMPANHEIRO ANIMAL*/}
                <Text style={estilo.categoria}>Companheiro Animal</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Um companheiro animal é um aliado valoroso e fiel. Você decide de qual espécie é seu companheiro. Vocês têm um
                            vínculo mental, sendo capazes de entender um ao outro. Seu companheiro animal obedece a você, mesmo que isso
                            arrisque a vida dele. Em termos de jogo, seu companheiro animal é um aliado dos tipos ajudante, assassino, atirador,
                            fortão, guardião, montaria ou perseguidor, do nível Iniciante. No 7º nível ele muda para Veterano e, no 15º nível,
                            para Mestre. Se o companheiro animal morrer, você fica atordoado por uma rodada. Você pode invocar um novo
                            companheiro após um dia inteiro de prece e meditação. A seguir, alguns exemplos de animais (mas você é livre para
                            escolher outros). Veja a página 246 para as montarias disponíveis, além de regras completas e os benefícios
                            fornecidos por aliados.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ajudante</Text>
                    <Text style={estilo.paragrafo}>
                        Corvo, macaco, raposa, serpente ou outro animal ágil ou esperto.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Assassino</Text>
                    <Text style={estilo.paragrafo}>
                        Lince, onça ou outro animal treinado para abater presas.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Atirador</Text>
                    <Text style={estilo.paragrafo}>
                        Águia, falcão ou outro animal capaz de mergulhar rapidamente nos alvos de seus ataques à distância.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fortão</Text>
                    <Text style={estilo.paragrafo}>
                        Crocodilo, javali, leão, lobo ou outro animal capaz de lutar ao seu lado.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Guardião</Text>
                    <Text style={estilo.paragrafo}>
                        Alce, cão, coruja, tartaruga gigante, urso ou outro animal pesado ou atento.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Perseguidor</Text>
                    <Text style={estilo.paragrafo}>
                        Gambá, sabujo ou outro animal farejador.
                    </Text>
                </View>

            </View>
        </ScrollView>
    )
}