import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Cavaleiro from '../../../assets/imagensClasses/Cavaleiro.png';
import Tabela from '../../../assets/imagensClasses/TabelaCavaleiro.png';

import estilo from '../estilo';

export default function TelaCavaleiro() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS CAVALEIRO*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Cavaleiros:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            O cavaleiro é parte de uma longa história de heroísmo. Às vezes considerados antiquados ou até anacrônicos, estes
                            combatentes têm os mesmos ideais e usam as mesmas táticas que seus predecessores desenvolveram séculos atrás. Muitas
                            vezes são formais e grandiosos, até mesmo arrogantes, pois carregam a responsabilidade de honrar muitas gerações de
                            cavalaria.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Cavaleiro Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            Alenn Toren Greenfeld, Bernard Branalon, Brigandine, Orion Drake, Pelvas.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO CAVALEIRO*/}
                <Image style={estilo.img} source={Cavaleiro} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um cavaleiro começa com 20 pontos de vida (+ modificador de Constituição) e ganha 5 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            3 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Fortitude (Con) e Luta (For), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des),
                            Diplomacia (Car), Guerra (Int), Iniciativa (Des), Intimidação (Car), Nobreza (Int), Percepção (Sab) e Vontade (Sab).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Armas marciais, armaduras pesadas e escudos.
                        </Text>
                    </ScrollView>
                </View>

                {/*TABELA O CAVALEIRO*/}
                <Text style={estilo.categoria}>Tabela O Cavaleiro</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Baluarte +2, código de honra</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Duelo, poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Caminho do cavaleiro, baluarte +4, poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Baluarte +6, poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de cavaleiro, resoluto</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Baluarte +8, poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Baluarte (aliados em alcance curto), poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Baluarte +10, poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de cavaleiro</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>Bravura final, poder de cavaleiro</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Código de Honra</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Cavaleiros distinguem-se de meros combatentes por seguir um código de conduta. Fazem isto para mostrar que estão
                            acima dos mercenários e bandoleiros que infestam os campos de batalha. Você não pode atacar um oponente pelas
                            costas (em termos de jogo, não pode se beneficiar do bônus de flanquear), caído, desprevenido ou incapaz de lutar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Rebaixar-se ao nível dos covardes e desesperados abala a autoconfiança que eleva o cavaleiro.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Rastreador</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe +2 em Sobrevivência. Além disso, pode se mover com seu deslocamento normal enquanto rastreia sem sofrer
                        penalidades no teste de Sobrevivência.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Baluarte</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar 1 PM para receber +2 na Defesa e nos testes de resistência até o início do seu próximo turno. A
                            cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +2. A partir do 7º nível, quando usa esta
                            habilidade, você pode gastar 2 PM adicionais para fornecer o mesmo bônus a todos os aliados adjacentes. Por
                            exemplo, pode gastar 4 PM ao todo para receber +4 na Defesa e nos testes de resistência e fornecer este mesmo
                            bônus aos outros. A partir do 15º nível, você pode gastar 5 PM adicionais para fornecer o mesmo bônus a todos os
                            aliados em alcance curto.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Duelo</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            A partir do 2º nível, você pode gastar 2 PM para escolher um inimigo em alcance curto e receber +1 em testes de
                            ataque e rolagens de dano contra ele até o fim da cena. Se atacar outro inimigo, o bônus termina. Para cada 2 PM
                            extras que você gastar, o bônus aumenta em +1.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Caminho do Cavaleiro</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 5º nível, escolha entre Bastião ou Montaria.
                        </Text>

                        <Text style={estilo.topico}>Bastião</Text>
                        <Text style={estilo.paragrafo}>
                            Se estiver usando armadura pesada, você recebe resistência a dano 5 (cumulativa com a RD fornecida por
                            Especialização em Armadura).
                        </Text>

                        <Text style={estilo.topico}>Montaria</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe um cavalo de guerra com o qual possui +5 em testes de Adestramento e Cavalgar. Ele fornece os
                            benefícios de um aliado iniciante de seu tipo. No 11º nível, passa a fornecer os benefícios de um aliado
                            veterano e, no 17º nível, de um aliado mestre. De acordo com o mestre, você pode receber outro tipo de
                            montaria. Veja a lista de aliados no Capítulo 6: O Mestre. Caso a montaria morra, você pode comprar outra
                            pelo preço normal e treiná-la para receber os benefícios deste poder com uma semana de trabalho.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Resoluto</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            A partir do 11º nível, você pode gastar 1 PM para refazer um teste de resistência contra uma condição (como
                            abalado, paralisado etc.) que esteja o afetando. O segundo teste recebe um bônus de +5 e, se você passar,
                            cancela o efeito. Você só pode usar esta habilidade uma vez por efeito.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Bravura Final</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 20º nível, sua virtude vence a morte. Se for reduzido a 0 ou menos PV, você pode continuar consciente e agindo
                            normalmente. Se fizer isso, deve gastar 5 PM no início de cada um de seus turnos. Caso contrário, cai
                            inconsciente ou morto, conforme seus PV atuais.
                        </Text>
                    </ScrollView>
                </View>

                {/*PODERES DE CAVALEIRO*/}
                <Text style={estilo.categoria}>Poderes de Cavaleiro</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Armadura da Honra</Text>
                    <Text style={estilo.paragrafo}>
                        No início de cada cena, você recebe uma quantidade de pontos de vida temporários igual a 5 + seu bônus de
                        Carisma. Os PV temporários duram até o final da cena.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aumento de Atributo</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda
                            vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Autoridade Feudal</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você possui autoridade sobre pessoas comuns (qualquer pessoa sem um título de nobreza ou uma posição numa igreja
                            reconhecida pelo Reinado). Você pode gastar 2 PM para conclamar o povo a realizar uma tarefa para você. Em termos de
                            jogo, passa automaticamente em um teste de perícia com CD máxima igual ao seu nível +5. O tempo necessário para
                            conclamar o povo é o tempo do uso da perícia em questão. Esta habilidade só pode ser usada em locais onde sua posição
                            carregue alguma influência (a critério do mestre).<Text style={estilo.requisito}> Pré-requisito: 6º nível de
                                cavaleiro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Desprezar os Covardes</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe resistência a dano 5 se estiver caído, desprevenido ou flanqueado.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Escudeiro</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe os serviços de um escudeiro, um aliado especial que cuida de seu equipamento. Suas armas recebem um
                            bônus de +1 em rolagens de dano e sua armadura concede +1 em Defesa. Além disso, você pode pagar 1 PM para
                            receber ajuda do escudeiro em combate. Você recebe uma ação de movimento que pode usar para se levantar, sacar
                            um item ou trazer sua montaria. O escudeiro não conta em seu limite de aliados. Caso ele morra, você pode treinar
                            outro com um mês de trabalho.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Especialização em Armadura</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Se estiver usando armadura pesada, você recebe resistência a dano 5 (cumulativa com a RD fornecida por Bastião).
                            <Text style={estilo.requisito}> Pré-requisito: 12º nível de cavaleiro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Estandarte</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Sua flâmula torna-se célebre, um símbolo de inspiração para seus aliados. No início de cada cena, você e todos os
                            aliados que possam ver seu estandarte recebem um número de PM temporários igual ao seu bônus de Carisma
                            (mínimo 1). PM temporários desaparecem no final da cena.<Text style={estilo.requisito}> Pré-requisito: Título,
                                14º nível de cavaleiro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Etiqueta</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode gastar 1 PM para rolar novamente um teste recém realizado de Diplomacia ou Nobreza.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Investida Destruidora</Text>
                    <Text style={estilo.paragrafo}>
                        Quando faz a ação investida, você pode gastar 2 PM. Se fizer isso, causa +2d8 pontos de dano. Você deve usar esta
                        habilidade antes de rolar o ataque.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Montaria Corajosa</Text>
                    <Text style={estilo.paragrafo}>
                        Sua montaria concede +1d6 em rolagens de dano corpo a corpo (cumulativo com qualquer bônus que ela já forneça
                        como aliado).<Text style={estilo.requisito}> Pré-requisito: Montaria.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Pajem</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe os serviços de um pajem, um aliado especial que o auxilia em pequenos afazeres. Você recebe +2 em
                            Diplomacia, por estar sempre aprumado, e sua recuperação de PV e PM aumenta em +1 por nível, por estar sempre
                            confortável. O pajem pode executar pequenas tarefas, como entregar mensagens e comprar itens, e não conta em seu
                            limite de aliados. Caso ele morra, você pode treinar outro com uma semana de trabalho.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Postura de Combate: Aríete Implacável</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Ao assumir esta postura, você aumenta o bônus de ataque em investidas em +2. Para cada 2 PM adicionais que gastar
                            quando assumir a postura, aumenta o bônus de ataque em +1. Além disso, se fizer uma investida contra um objeto,
                            causa +2d8 de dano. Você precisa se deslocar todos os turnos para manter esta postura ativa.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Postura de Combate: Castigo de Ferro</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Sempre que um aliado adjacente sofrer um ataque corpo a corpo, você pode gastar 1 PM para fazer um ataque na
                            criatura que o atacou como uma reação.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Postura de Combate: Foco de Batalha</Text>
                    <Text style={estilo.paragrafo}>
                        Sempre que um inimigo atacá-lo, você recebe 1 PM temporário. Pontos de mana temporários desaparecem no final da
                        cena.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Postura de Combate: Muralha Intransponível</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Para assumir esta postura você precisa estar empunhando um escudo. Você recebe +1 na Defesa e em Reflexos. Além
                            disso, quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade, não sofre nenhum
                            dano se passar. Para cada 2 PM adicionais que gastar quando assumir a postura, aumenta esse bônus em +1. Por fim,
                            enquanto mantiver esta postura, seu deslocamento é reduzido para 3m.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Postura de Combate: Provocação Petulante</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Enquanto esta postura estiver ativa, todos os inimigos que iniciarem seus turnos dentro de seu alcance curto devem
                            fazer um teste de Vontade (CD Car). Se falharem, devem atacar você nessa rodada.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Postura de Combate: Torre Inabalável</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você assume uma postura defensiva que o torna imune a qualquer tentativa de tirá-lo do lugar, de forma mundana ou
                            mágica. Enquanto mantiver a postura, você não pode se deslocar, mas recebe um bônus na Defesa igual a seu bônus
                            de Constituição e pode substituir testes de Reflexos e Vontade por testes de Fortitude.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Solidez</Text>
                    <Text style={estilo.paragrafo}>
                        Se estiver usando um escudo, você aplica o bônus na Defesa recebido pelo escudo em testes de resistência.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Título</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você adquire um título de nobreza. Converse com o mestre para definir os benefícios exatos de seu título. Como
                            regra geral, você recebe 10 TO por nível de cavaleiro no início de cada aventura (rendimentos dos impostos) ou
                            a ajuda de um aliado veterano (um membro de sua corte).<Text style={estilo.requisito}> Pré-requisito: Autoridade
                                Feudal, 10º nível de cavaleiro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Torre Armada</Text>
                    <Text style={estilo.paragrafo}>
                        Quando um inimigo erra um ataque contra você, você pode gastar 1 PM. Se fizer isso, recebe +5 em rolagens de dano
                        contra esse inimigo até o fim de seu próximo turno.
                    </Text>
                </View>

                {/*POSTURAS DE COMBATE*/}
                <Text style={estilo.categoria}>Posturas de Combate</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Alguns poderes do cavaleiro são Posturas de Combate. Esses poderes compartilham as seguintes regras.
                        </Text>

                        <Text style={estilo.requisito}>
                            Assumir uma postura gasta uma ação de movimento e 2 PM.
                        </Text>
                        <Text style={estilo.requisito}>
                            Os efeitos de uma postura duram até o final da cena, a menos que sua descrição diga o contrário.
                        </Text>
                        <Text style={estilo.requisito}>
                            Você não pode assumir mais de uma postura ao mesmo tempo.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}