import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Ladino from '../../../assets/imagensClasses/Ladino.png';
import Tabela from '../../../assets/imagensClasses/TabelaLadino.png';

import estilo from '../estilo';

export default function TelaLadino() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS LADINO*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Ladinos:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            O ladino é o mais esperto, discreto, silencioso e malandro de todos os heróis. Um aventureiro que usa táticas que
                            muitos consideram desleais, mas que para ele são apenas pragmáticas e lógicas. Ladinos se especializam em arrombar
                            portas, esgueirar-se pelas sombras, desarmar armadilhas, roubar itens valiosos... Enfim, fazer tudo que “heróis de
                            bem” nunca fariam.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Ladinos Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            Andrus o Aranha, Ashlen Ironsmith, o Camaleão, Drikka, Leon Galtran.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO LADINO*/}
                <Image style={estilo.img} source={Ladino} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um ladino começa com 12 pontos de vida (+ modificador de Constituição) e ganha 3 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            4 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Ladinagem (Des) e Reflexos (Des), mais 8 a sua escolha entre Acrobacia (Des), Atletismo (For), Atuação (Car),
                            Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Furtividade (Des), Iniciativa (Des),
                            Intimidação (Car), Intuição (Sab), Investigação (Int), Jogatina (Car), Luta (For), Ofício (Int), Percepção (Sab),
                            Pilotagem (Des) e Pontaria (Des).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Nenhuma.
                        </Text>
                    </ScrollView>
                </View>

                {/*TABELA O LADINO*/}
                <Text style={estilo.categoria}>Tabela O Ladino</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque furtivo +1d6, especialista</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Evasão, poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque furtivo +2d6, poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Esquiva sobrenatural, poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque furtivo +3d6, poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque furtivo +4d6, poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Olhos nas costas, poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque furtivo +5d6, poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Evasão aprimorada, poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque furtivo +6d6, poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque furtivo +7d6, poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque furtivo +8d6, poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque furtivo +9d6, poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque furtivo +10d6, poder de ladino</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>A pessoa certa para o trabalho, poder de ladino</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ataque Furtivo</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você sabe atingir os pontos vitais de um inimigo distraído. Uma vez por rodada, quando atinge um alvo
                            desprevenido com um ataque corpo a corpo ou em alcance curto, ou um alvo que esteja flanqueando, você causa 1d6
                            pontos de dano adicional. A cada dois níveis, esse dano adicional aumenta em +1d6. Uma criatura imune a acertos
                            críticos também é imune a ataques furtivos.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Especialista</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Escolha um número de perícias treinadas igual ao seu bônus de Inteligência (mínimo 1). Ao fazer um teste de uma
                            dessas perícias, você pode gastar 1 PM para dobrar seu bônus de treinamento. Você não pode usar esta habilidade
                            em testes de ataque.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Evasão</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            A partir do 2º nível, quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade, você
                            não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade
                            exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Esquiva Sobrenatural</Text>
                    <Text style={estilo.paragrafo}>
                        No 4º nível, seus instintos ficam tão apurados que você consegue reagir ao perigo antes que seus sentidos
                        percebam. Você nunca fica surpreendido.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Olhos nas Costas</Text>
                    <Text style={estilo.paragrafo}>
                        A partir do 8º nível, você consegue lutar contra diversos inimigos como se fossem apenas um. Você não pode ser
                        flanqueado.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Evasão Aprimorada</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 10º nível, quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade, você não
                            sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de
                            movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>A Pessoa Certa para o Trabalho</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 20º nível, você se torna um verdadeiro mestre da ladinagem. Ao fazer um ataque furtivo ou usar uma perícia da
                            lista de ladino, você pode gastar 5 PM para receber +10 no teste.
                        </Text>
                    </ScrollView>
                </View>

                {/*PODERES DE LADINO*/}
                <Text style={estilo.categoria}>Poderes de Ladino</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Assassinar</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação de movimento e 3 PM para analisar uma criatura em alcance curto. Até o fim de seu
                            próximo turno, seu primeiro Ataque Furtivo que causar dano a ela tem seus dados de dano extras dessa habilidade
                            dobrados.<Text style={estilo.requisito}> Pré-requisito: 5º nível de ladino.</Text>
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
                    <Text style={estilo.titulo}>Emboscar</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar 2 PM para realizar uma ação padrão adicional em seu turno. Você só pode usar este poder na
                            primeira rodada de um combate.<Text style={estilo.requisito}> Pré-requisito: treinado em Furtividade.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Escapista</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe +5 em testes de Acrobacia para escapar e em testes para resistir a efeitos que restrinjam seu
                        movimento, como a manobra agarrar e a magia Amarras Etéreas.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fuga Formidável</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação completa e 1 PM para analisar o lugar no qual está (um castelo, um porto, a praça de
                            uma cidade...). Até o fim da cena, você recebe +3m em seu deslocamento, +5 em testes de Acrobacia e Atletismo e
                            ignora penalidades em movimento por terreno difícil. Porém, para receber esses bônus, todas as suas ações na
                            rodada devem estar diretamente ligadas a fugir. Por exemplo, você só pode atacar um inimigo se ele estiver
                            bloqueando seu caminho, agarrando-o etc. Você pode fazer ações para ajudar seus aliados, mas apenas se eles
                            estiverem tentando escapar.<Text style={estilo.requisito}> Pré-requisito: Int 13.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Gatuno</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe +2 em Atletismo. Quando escala, avança seu deslocamento normal, em vez de metade dele.
                        <Text style={estilo.requisito}> Pré-requisito: treinado em Atletismo.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Integrante de Guilda</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você é membro de uma organização criminosa, desde uma pequena guilda de ladrões a uma irmandade de Valkaria. Os
                            efeitos deste poder variam de acordo com a organização e ficam a cargo do mestre. Como regra geral, você
                            recebe +5 em testes de Diplomacia com pessoas ligadas ao submundo e +5 em testes de Intimidação com pessoas
                            comuns que temeriam sua organização. Além disso, tem acesso a itens e serviços roubados ou proibidos (como
                            armas de pólvora e venenos).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ladrão Arcano</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando causa dano com um ataque furtivo em uma criatura capaz de lançar magias, você pode “roubar” uma magia que
                            já a tenha visto lançar. Você precisa pagar 1 PM por círculo da magia e pode roubar magias de até 4º círculo.
                            Até o final da cena, você pode lançar a magia roubada (atributo-chave Inteligência).
                            <Text style={estilo.requisito}> Pré-requisito: Roubo de Mana, 13º nível de ladino.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Mão na Boca</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe +2 em testes de agarrar. Quando faz um ataque furtivo contra uma criatura desprevenida, você pode
                            fazer um teste de agarrar como uma ação livre. Se agarrar a criatura, ela não poderá falar enquanto estiver
                            agarrada.<Text style={estilo.requisito}> Pré-requisito: treinado em Luta.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Mãos Rápidas</Text>
                    <Text style={estilo.paragrafo}>
                        Ao fazer um teste de Ladinagem para abrir fechaduras, ocultar item, punga ou sabotar, você pode pagar 1 PM para
                        fazê-lo como uma ação livre.<Text style={estilo.requisito}> Pré-requisito: Des 15, treinado em Ladinagem.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Mente Criminosa</Text>
                    <Text style={estilo.paragrafo}>
                        Você soma seu bônus de Inteligência em Ladinagem e Furtividade.<Text style={estilo.requisito}> Pré-requisito:
                            Int 13.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Oportunismo</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe +2 em testes de ataque contra inimigos que já sofreram dano desde seu último turno.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Rolamento Defensivo</Text>
                    <Text style={estilo.paragrafo}>
                        Sempre que sofre dano, você pode gastar 2 PM para reduzir esse dano à metade. Após usar este poder, você fica
                        caído.<Text style={estilo.requisito}> Pré-requisito: treinado em Reflexos</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Roubo de Mana</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando você causa dano com um ataque furtivo em uma criatura, a criatura perde 1 ponto de mana para cada 1d6 de
                            dano de seu ataque furtivo. Você recebe PM temporários iguais aos PM que a criatura perder. Você só pode usar
                            este poder uma vez por cena contra cada criatura específica.<Text style={estilo.requisito}> Pré-requisito:
                                Truque Mágico, 7º nível de ladino.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Saqueador de Tumbas</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe +5 em testes de Investigação para encontrar armadilhas e em testes de Reflexos para evitá-las. Além
                            disso, gasta uma ação padrão para desabilitar mecanismos, em vez de 1d4 rodadas (veja a perícia Ladinagem).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sombra</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe +2 em Furtividade. Além disso, pode se mover com seu deslocamento normal enquanto usa Furtividade sem
                            sofrer penalidades no teste de perícia.<Text style={estilo.requisito}> Pré-requisito: treinado em Furtividade.
                            </Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Truque Mágico</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você aprende e pode lançar uma magia arcana de 1º círculo a sua escolha, pagando seu custo normal em PM. Seu
                            atributo-chave para esta magia é Inteligência. Você pode escolher este poder quantas vezes quiser.
                            <Text style={estilo.requisito}> Pré-requisito: Int 13.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Velocidade Ladina</Text>
                    <Text style={estilo.paragrafo}>
                        Uma vez por rodada, você pode gastar 2 PM para realizar uma ação de movimento adicional em seu turno.
                        <Text style={estilo.requisito}> Pré-requisito: Des 15, treinado em Iniciativa.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Veneno Persistente</Text>
                    <Text style={estilo.paragrafo}>
                        Quando aplica uma dose de veneno a uma arma, este veneno dura por três ataques (em vez de apenas um).
                        <Text style={estilo.requisito}> Pré-requisito: Veneno Potente, 8º nível de ladino</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Veneno Potente</Text>
                    <Text style={estilo.paragrafo}>
                        A CD para resistir aos venenos que você usa aumenta em +2 e esses venenos causam +1 ponto de dano por dado de
                        dano.<Text style={estilo.requisito}> Pré-requisito: treinado em Ofício (alquimia).</Text>
                    </Text>
                </View>

            </View>
        </ScrollView>
    )
}