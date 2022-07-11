import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Lutador from '../../../assets/imagensClasses/Lutador.png';
import Tabela from '../../../assets/imagensClasses/TabelaLutador.png';

import estilo from '../estilo';

export default function TelaLutador() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS LUTADOR*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Lutadores:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Lutadores são especialistas em todas as formas de combate desarmado, desde simples socos e chutes até complexas
                            chaves e técnicas de chão. Alguns estudam com mestres, seguindo disciplinas codificadas ao longo de muitas gerações.
                            Outros são apenas desesperados que precisaram aprender a brigar para ficar vivos nos becos escuros ou nos ermos
                            selvagens. Algumas culturas artonianas têm tradições de combate desarmado: Tamu-ra é a mais famosa, mas os minotauros
                            de Tapista também desenvolveram seus próprios métodos de luta esportiva.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Lutadores Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            Maquius, Syrion.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO LUTADOR*/}
                <Image style={estilo.img} source={Lutador} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um lutador começa com 20 pontos de vida (+ modificador de Constituição) e ganha 5 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            3 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Fortitude (Con) e Luta (For), mais 4 a sua escolha entre Acrobacia (Des), Adestramento (Car), Atletismo (For),
                            Enganação (Car), Furtividade (Des), Iniciativa (Des), Intimidação (Car), Ofício (Int), Percepção (Sab), Pontaria
                            (Des) e Reflexos (Des).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Nenhuma.
                        </Text>
                    </ScrollView>
                </View>

                {/*TABELA O LUTADOR*/}
                <Text style={estilo.categoria}>Tabela O Lutador</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Briga (1d6), golpe relâmpago</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Casca grossa (Con), poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Briga (1d8), golpe cruel, poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Casca grossa (Con+1), poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Briga (1d10), golpe violento, poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Casca grossa (Con+2), poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Briga (2d6), poder de lutadoor</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Casca grossa (Con+3), poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Briga (2d8), poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Casca grossa (Con+4), poder de lutador</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>Dono da rua (2d10), poder de lutador</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Briga</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades). A
                            cada quatro níveis, seu dano desarmado aumenta, conforme a tabela. O dano na tabela é para criaturas Pequenas e
                            Médias. Criaturas Minúsculas diminuem esse dano em um passo, Grandes e Enormes aumentam em um passo e Colossais
                            aumentam em dois passos.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Golpe Relâmpago</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa a ação atacar para fazer um ataque desarmado, você pode gastar 1 PM para realizar um ataque desarmado
                        adicional.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Casca Grossa</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 3º nível, você soma seu bônus de Constituição na Defesa, limitado pelo seu nível e apenas se não estiver
                            usando armadura pesada. Além disso, no 7º nível, e a cada quatro níveis, você recebe +1 na Defesa
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Golpe Cruel</Text>
                    <Text style={estilo.paragrafo}>
                        No 5º nível, você acerta onde dói. Sua margem de ameaça com ataques desarmados aumenta em +1.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Golpe Violento</Text>
                    <Text style={estilo.paragrafo}>
                        No 9º nível, você bate com muita força. Seu multiplicador de crítico com ataques desarmados aumenta em +1.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Dono da Rua</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 20º nível, seu dano desarmado aumenta para 2d10 (para criaturas Médias). Além disso, quando usa a ação atacar
                            para fazer um ataque desarmado, você pode fazer dois ataques, em vez de um (podendo usar Golpe Relâmpago para
                            fazer um terceiro).
                        </Text>
                    </ScrollView>
                </View>

                {/*PODERES DE LUTADOR*/}
                <Text style={estilo.categoria}>Poderes de Lutador</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Arma Improvisada</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Ao usar armas improvisadas, você usa as estatísticas de seu ataque desarmado — bônus de ataque, margem de ameaça
                            etc. — mas seu dano aumenta em um passo. Você pode gastar uma ação de movimento para procurar uma pedra,
                            cadeira, garrafa ou qualquer coisa que possa usar como arma. Faça um teste de Percepção (CD 20). Se você passar,
                            encontra uma arma improvisada. Armas improvisadas são frágeis; se você errar um ataque e o resultado do d20 for
                            um número ímpar, a arma quebra.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Até Acertar</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Se você errar um ataque desarmado, recebe um bônus cumulativo de +2 em testes de ataque e rolagens de dano
                            desarmado contra o mesmo oponente. Os bônus terminam quando você acertar um ataque ou no fim da cena, o que
                            acontecer primeiro.
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
                    <Text style={estilo.titulo}>Braços Calejados</Text>
                    <Text style={estilo.paragrafo}>
                        Se você não estiver usando armadura, soma seu bônus de Força na Defesa, limitado pelo seu nível.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Cabeçada</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando faz um ataque desarmado, você pode gastar 2 PM. Se fizer isso, o oponente fica desprevenido contra este
                            ataque. Você só pode usar este poder uma vez por cena contra uma mesma criatura.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Chave</Text>
                    <Text style={estilo.paragrafo}>
                        Se estiver agarrando uma criatura e fizer um teste de manobra contra ela para causar dano, o dano desarmado
                        aumenta em um passo.<Text style={estilo.requisito}> Pré-requisitos: Int 13, Lutador de Chão, 4º nível de
                            lutador.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Confiança dos Ringues</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando um oponente erra um ataque corpo a corpo contra você, você recebe 1 PM temporário. PM temporários
                            desaparecem no final da cena.<Text style={estilo.requisito}> Pré-requisito: 10º nível de lutador.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Convencido</Text>
                    <Text style={estilo.paragrafo}>
                        Acostumado a contar apenas com seus músculos, você adquiriu certo desdém por artes mais sofisticadas. Você
                        recebe +5 em testes de resistência contra efeitos de Encantamento.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Golpe Baixo</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando faz um ataque desarmado, você pode gastar 2 PM. Se fizer isso e acertar o ataque, o oponente deve fazer um
                            teste de Fortitude (CD For). Se ele falhar, fica atordoado por uma rodada. Você só pode usar este poder uma vez
                            por cena contra uma mesma criatura.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Golpe Imprudente</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando usa Golpe Relâmpago, você pode atacar de forma impulsiva. Se fizer isso, você aumenta seu dano desarmado
                            em mais um dado do mesmo tipo (por exemplo, se o seu dano é 2d6, você causa 3d6), mas sofre –5 em sua Defesa,
                            até o início de seu próximo turno.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Imobilização</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Se estiver agarrando uma criatura, você pode gastar uma ação completa para imobilizá-la. Faça um teste de manobra
                            contra ela. Se você passar, imobiliza a criatura — ela fica indefesa e não pode realizar nenhuma ação, exceto
                            tentar se soltar (o que exige um teste de manobra). Se a criatura se soltar da imobilização, ainda fica agarrada.
                            Enquanto estiver imobilizando uma criatura, você sofre as penalidades de agarrar.
                            <Text style={estilo.requisito}> Pré-requisitos: Chave, 8º nível de lutador</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Língua dos Becos</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode pagar 1 PM para usar seu bônus de Força no lugar de Carisma em um teste de perícia baseada em Carisma.
                        <Text style={estilo.requisito}> Pré-requisitos: For 13, treinado em Intimidação.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Lutador de Chão</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe +2 em testes de ataque para agarrar e derrubar. Quando agarra uma criatura, pode gastar 1 PM para
                        fazer uma manobra derrubar contra ela como uma ação livre.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Nome na Arena</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você construiu uma reputação no circuito de lutas de Arton. Escolha uma perícia que represente a característica
                            pela qual você é conhecido, como Atletismo para uma fama de musculoso ou Intimidação para uma fama de “malvado”.
                            Uma vez por cena, você pode gastar uma ação de movimento para fazer um teste dessa perícia (CD 10) e impressionar
                            os presentes. Se passar, você recebe +1 em todos os seus testes de perícias baseadas em Carisma até o fim da
                            cena. Esse bônus aumenta em +1 para cada 5 pontos pelos quais o resultado do teste exceder a CD (+2 para um
                            resultado 15, +3 para 20 e assim por diante). Como alternativa, você pode aplicar esse bônus em seu próximo
                            teste de ataque.<Text tyle={estilo.requisito}> Pré-requisito: 12º nível de lutador.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Punhos de Adamante</Text>
                    <Text style={estilo.paragrafo}>
                        Seus ataques desarmados ignoram 10 pontos de resistência a dano do alvo, se houver.
                        <Text style={estilo.requisito}> Pré-requisito: 8º nível de lutador.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Rasteira</Text>
                    <Text style={estilo.paragrafo}>
                        Quando faz um ataque desarmado, você pode gastar 2 PM. Se fizer isso e acertar o ataque, o oponente fica caído.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sarado</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você soma seu bônus de Força no seu total de pontos de vida e em testes de Fortitude. A critério do mestre, você
                            pode chamar a atenção de pessoas que se atraiam por físicos bem definidos.<Text style={estilo.requisito}>
                                Pré-requisito: For 17.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sequência Destruidora</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No início do seu turno, você pode gastar 2 PM para dizer um número (no mínimo 2). Se fizer e acertar uma
                            quantidade de ataques igual ao número dito, o último tem seu dano aumentado um número de passos igual à
                            quantidade de ataques feitos. Por exemplo, se você falar “três” e fizer e acertar três ataques, o último ataque
                            (o terceiro) terá seu dano aumentado em três passos.<Text style={estilo.requisito}> Pré-requisito: Trocação, 12º
                                nível de lutador.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Trincado</Text>
                    <Text style={estilo.paragrafo}>
                        Esculpido à exaustão, seu corpo se tornou uma máquina. Você soma seu modificador de Constituição nas suas
                        rolagens de dano desarmado.<Text style={estilo.requisito}> Pré-requisitos: Con 17, Sarado, 10º nível de
                            lutador.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Trocação</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando você começa a bater, não para mais. Ao acertar um ataque desarmado, pode fazer outro ataque desarmado
                            contra o mesmo alvo, pagando uma quantidade de PM igual à quantidade de ataques já realizados no turno. Ou seja,
                            pode fazer o primeiro ataque extra gastando 1 PM, um segundo ataque extra gastando mais 2 PM e assim por diante,
                            até errar um ataque ou não ter mais pontos de mana.<Text style={estilo.requisito}> Pré-requisito: 6º nível de
                                lutador.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Trocação Tumultuosa</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando usa a ação atacar para fazer um ataque desarmado, você pode gastar 2 PM para atingir todas as criaturas
                            adjacentes — incluindo aliados! Você deve usar este poder antes de rolar o ataque e compara o resultado de seu
                            teste contra a Defesa de cada criatura.<Text style={estilo.requisito}> Pré-requisitos: Trocação, 8º nível de
                                lutador.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Valentão</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe +2 em testes de ataque e rolagens de dano contra oponentes caídos, desprevenidos, flanqueados ou
                        indefesos.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Voadora</Text>
                    <Text style={estilo.paragrafo}>
                        Quando faz uma investida desarmada, você pode gastar 2 PM. Se fizer isso, recebe +1d6 no dano para cada 3m que se
                        deslocar até chegar ao oponente, limitado pelo seu nível.
                    </Text>
                </View>

            </View>
        </ScrollView>
    )
}