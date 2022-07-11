import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Clerigo from '../../../assets/imagensClasses/Clerigo.png';
import Tabela from '../../../assets/imagensClasses/TabelaClerigo.png';

import estilo from '../estilo';

export default function TelaClerigo() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS CLERIGO*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Clérigos:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Clérigos são sacerdotes cuja devoção é tão poderosa que os torna capazes de realizar milagres. De início são pequenas
                            bênçãos, curas e pragas. Mas, à medida que um clérigo se torna mais experiente e digno, seus poderes se tornam assunto
                            de lendas. Clérigos veteranos podem invocar anjos e demônios, comandar os elementos e até mesmo erguer os mortos.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Clérigos Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            Artorius, Aurora, Gwen, Khorr’benn An-ug’atz, Mestre Arsenal, Nichaela, Vanessa Drake.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO CLERIGO*/}
                <Image style={estilo.img} source={Clerigo} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um clérigo começa com 16 pontos de vida (+ modificador de Constituição) e ganha 4 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            5 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Religião (Sab) e Vontade (Sab), mais 2 a sua escolha entre Conhecimento (Int), Cura (Sab), Diplomacia (Car),
                            Fortitude (Con), Iniciativa (Des), Intuição (Sab), Luta (For), Misticismo (Int), Nobreza (Int), Ofício (Int) e
                            Percepção (Sab).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Armaduras pesadas e escudos.
                        </Text>
                    </ScrollView>
                </View>

                {/*TABELA O CLERIGO*/}
                <Text style={estilo.categoria}>Tabela O Clérigo</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Devoto, magias (1° círculo)</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (2° círculo), poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (3° círculo), poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (4° círculo), poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (5° círculo), poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de clérigo</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>Mão da divindade, poder de clérigo</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Devoto</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você se torna devoto de um deus maior. Você deve obedecer às Obrigações & Restrições de seu deus, mas, em troca,
                            ganha os Poderes Concedidos dele. Veja a lista de deuses na página 97. Como alternativa, você pode cultuar o
                            Panteão como um todo. Não recebe nenhum Poder Concedido, mas sua única Obrigação & Restrição é não usar armas
                            cortantes ou perfurantes (porque derramam sangue, algo que clérigos do Panteão consideram proibido). O nome desta
                            habilidade varia de acordo com a divindade escolhida: Devoto de Azgher, Devoto de Thyatis... ou Devoto  Se violar
                            o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Rebaixar-se ao nível dos
                            covardes e desesperados abala a autoconfiança que eleva o cavaleiro.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Magias</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode lançar magias divinas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º
                            círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo. A cada
                            nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é Sabedoria e
                            você soma seu bônus de Sabedoria no seu total de PM. Veja o Capítulo 4 para as regras de magia.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Mão da Divindade</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 20º nível, você pode gastar uma ação completa e 15 PM para canalizar a energia de seu deus. Ao fazer isso,
                            você lança três magias divinas quaisquer (de qualquer círculo, incluindo magias que você não conhece), como uma
                            ação livre e sem gastar PM (mas ainda precisa pagar outros custos). Você pode aplicar aprimoramentos, mas precisa
                            pagar por eles. Após usar esta habilidade, você fica atordoado por 1d4 rodadas. Corpos mortais não foram feitos
                            para lidar com tanto poder.
                        </Text>
                    </ScrollView>
                </View>

                {/*PODERES DE CLERIGO*/}
                <Text style={estilo.categoria}>Poderes de Clérigo</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Abençoar Arma</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você se torna proficiente na arma preferida de sua divindade. Se estiver empunhando essa arma, pode gastar uma
                            ação de movimento e 3 PM para infundi-la com poder divino. Até o final da cena, a arma emite luz dourada ou
                            púrpura (como uma tocha) e você pode usar seu modificador de Sabedoria em testes de ataque e rolagens de dano
                            com ela (em vez do modificador padrão). Além disso, o dano da arma aumenta em um passo e ela é considerada mágica
                            para propósitos de resistência a dano.
                        </Text>
                    </ScrollView>
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
                    <Text style={estilo.titulo}>Autoridade Eclesiástica</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você possui uma posição formal em uma igreja reconhecida pelos outros membros de sua fé. Os efeitos deste poder
                            variam de acordo com a igreja e o deus — clérigos de Khalmyr, por exemplo, possuem autoridade como juízes no
                            Reinado — e ficam a cargo do mestre. Como regra geral, você recebe +5 em testes de Diplomacia ou Intimidação ao
                            lidar com devotos de sua divindade e paga metade do preço de itens alquímicos, poções e serviços em templos de
                            sua divindade.<Text style={estilo.requisito}> Pré-requisitos: 5º nível de clérigo, devoto de um deus maior.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Canalizar Energia Positiva/Negativa</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação padrão e 1 PM para liberar uma onda de energia positiva ou negativa (de acordo com sua
                            divindade) que afeta todas as criaturas em alcance curto. Energia positiva cura 1d6 pontos de dano em criaturas
                            vivas a sua escolha e causa 1d6 pontos de dano de luz em mortos-vivos. Energia negativa tem o efeito inverso —
                            causa dano de trevas em criaturas vivas a sua escolha e cura mortos-vivos. Uma criatura que sofra dano tem direito
                            a um teste de Vontade (CD Car) para reduzi-lo à metade. Para cada 2 PM extras que você gastar, a cura ou dano aumenta
                            em +1d6 PV (ou seja, pode gastar 3 PM para curar 2d6 PV, 5 PM para curar 3d6 PV e assim por diante).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Canalizar Amplo</Text>
                    <Text style={estilo.paragrafo}>
                        Quando você usa a habilidade Canalizar Energia, pode gastar +2 PM para aumentar o alcance dela para médio.
                        <Text style={estilo.requisito}> Pré-requisito: Canalizar Energia Positiva ou Negativa</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Comunhão Vital</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando lança uma magia que cure uma criatura, você pode pagar +2 PM para que outra criatura em alcance curto
                            (incluindo você mesmo) recupere uma quantidade de pontos de vida igual à metade dos PV da cura original.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Conhecimento Mágico</Text>
                    <Text style={estilo.paragrafo}>
                        Você aprende duas magias divinas de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes
                        quiser.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Expulsar/Comandar Mortos Vivos</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode usar uma ação padrão e 3 PM para expulsar (se sua divindade canaliza energia positiva) ou comandar
                            (se canaliza energia negativa) todos os mortos-vivos em alcance curto. Mortos-vivos expulsos ficam apavorados
                            por 1d6 rodadas. Mortos-vivos comandados ficam sob suas ordens; entretanto, o nível somado de mortos-vivos
                            sob seu comando ao mesmo tempo não pode exceder o seu próprio nível +3. Dar uma ordem a mortos-vivos é uma
                            ação de movimento. Mortos-vivos têm direito a um teste de Vontade (CD Car) para evitar qualquer destes efeitos.
                            <Text style={estilo.requisito}> Pré-requisito: Canalizar Energia Positiva ou Negativa</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Liturgia Mágica</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação de movimento para executar uma breve liturgia de sua fé. Se fizer isso, a CD para
                            resistir à sua próxima magia divina (desde que lançada até o final de seu próximo turno) aumenta em +2.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Magia Sagrada/Profana</Text>
                    <Text style={estilo.paragrafo}>
                        Quando lança uma magia divina que causa dano, você pode gastar +1 PM. Se fizer isso, muda o tipo de dano da
                        magia para luz ou trevas (de acordo com a sua divindade).
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Mestre Celebrante</Text>
                    <Text style={estilo.paragrafo}>
                        O número de pessoas que você afeta com uma missa aumenta em dez vezes e os benefícios que elas recebem dobram.
                        <Text style={estilo.requisito}> Pré-requisito: qualquer poder de Missa, 12º nível de clérigo.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Missa: Benção da Vida</Text>
                    <Text style={estilo.paragrafo}>
                        Você abençoa os presentes com energia positiva. Os participantes recebem pontos de vida temporários em um valor
                        igual ao seu nível + seu bônus de Sabedoria.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Missa: Chamado às Armas</Text>
                    <Text style={estilo.paragrafo}>
                        Sua prece fortalece o espírito de luta. Os participantes recebem +1 em testes de ataque e rolagens de dano.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Missa: Elevação do Espírito</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você inflama a determinação dos ouvintes. Os participantes recebem pontos de mana temporários em um valor igual
                            ao seu bônus de Sabedoria.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Missa: Escudo Divino</Text>
                    <Text style={estilo.paragrafo}>
                        Sua fé protege os ouvintes. Os participantes recebem +1 em Defesa e testes de resistência.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Missa: Superar as Limitações</Text>
                    <Text style={estilo.paragrafo}>
                        Você encoraja os ouvintes a superar suas próprias habilidades. Cada participante recebe +1d6 num único teste a sua
                        escolha.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Prece de Combate</Text>
                    <Text style={estilo.paragrafo}>
                        Quando lança uma magia divina com tempo de conjuração de uma ação padrão em si mesmo, você pode gastar +2 PM para
                        lançá-la como uma ação de movimento.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Símbolo Sagrado Abençoado</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação de movimento e 1 PM para fazer uma prece e energizar seu símbolo sagrado até o fim da
                            cena. Um símbolo sagrado energizado emite uma luz dourada ou prateada (se sua divindade canaliza energia
                            positiva) ou púrpura ou avermelhada (se canaliza energia negativa) que ilumina como uma tocha. Enquanto você
                            estiver empunhando um símbolo sagrado energizado, o custo em PM para lançar suas magias divinas diminui em 1.
                        </Text>
                    </ScrollView>
                </View>

                {/*MISSAS*/}
                <Text style={estilo.categoria}>Missas</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Alguns poderes do clérigo são Missas. Esses poderes compartilham as seguintes regras.
                        </Text>

                        <Text style={estilo.requisito}>
                            Rezar uma Missa exige uma hora e o gasto de materiais especiais (como velas, incensos, água benta...) no valor de T$
                            25.
                        </Text>
                        <Text style={estilo.requisito}>
                            Uma Missa afeta um número máximo de pessoas igual a 1 + seu bônus de Sabedoria. Todas as pessoas precisam estar
                            presentes durante toda a Missa.
                        </Text>
                        <Text style={estilo.requisito}>
                            Os efeitos de uma Missa duram um dia. Uma mesma criatura só pode receber os benefícios de uma Missa por vez.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}