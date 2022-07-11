import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Bucaneiro from '../../../assets/imagensClasses/Bucaneiro.png';
import Tabela from '../../../assets/imagensClasses/TabelaBucaneiro.png';

import estilo from '../estilo';

export default function TelaBucaneiro() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS BUCANEIRO*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Bucaneiros:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Bucaneiros são aventureiros que singram as águas deste mundo, sempre metidos em missões, batalhas, buscas, patrulhas
                            ou a simples luta pela sobrevivência. Muitos são verdadeiros piratas, fora da lei vivendo numa sociedade com suas
                            próprias regras, em desafio aos reinos do continente. Essa irmandade é brutal, mas também pode parecer utópica:
                            capitães piratas são eleitos por sua tripulação e podem ser removidos caso sejam tiranos. Piratas aceitam todo tipo
                            de pessoas rejeitadas pelo “mundo seco” e podem ser a única família que resta a alguns párias. O preço dessa
                            aceitação é uma vida de crime, perseguindo e roubando navios mercantes.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Bucaneiros Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            Nargom, James K., Izzy Tarante, John-de-Sangue.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO BUCANEIRO*/}
                <Image style={estilo.img} source={Bucaneiro} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um bucaneiro começa com 16 pontos de vida (+ modificador de Constituição) e ganha 4 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            3 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Luta (For) ou Pontaria (Des), Reflexos (Des), mais 4 a sua escolha entre Acrobacia (Des), Atletismo (For), Atuação
                            (Car), Enganação (Car), Fortitude (Con), Furtividade (Des), Iniciativa (Des), Intimidação (Car), Jogatina (Car),
                            Luta (For), Ofício (Int), Percepção (Sab), Pilotagem (Des) e Pontaria (Des).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Armas marciais.
                        </Text>
                    </ScrollView>
                </View>

                {/*TABELA O BUCANEIRO*/}
                <Text style={estilo.categoria}>Tabela O Bucaneiro</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Audácia, insolência</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Evasão, poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Esquiva sagaz +1, poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Panache, poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Esquiva sagaz +2, poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Evasão aprimorada, poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Esquiva sagaz +3, poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Esquiva sagaz +4, poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de Bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Esquiva sagaz +5, poder de bucaneiro</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bucaneiro, sorte de Nimb</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Audácia</Text>
                    <Text style={estilo.paragrafo}>
                        Quando faz um teste de perícia, você pode gastar 2 PM para receber um bônus igual ao seu modificador de Carisma no
                        teste. Você não pode usar esta habilidade em testes de ataque.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Insolência</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você soma seu bônus de Carisma na Defesa, limitado pelo seu nível. Esta habilidade exige liberdade de movimentos;
                            você não pode usá-la se estiver de armadura pesada ou na condição imóvel.
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
                    <Text style={estilo.titulo}>Esquiva Sagaz</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 3º nível, você recebe +1 na Defesa. Esse bônus aumenta em +1 a cada quatro níveis. Esta habilidade exige
                            liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Panache</Text>
                    <Text style={estilo.paragrafo}>
                        A partir do 5º nível, sempre que faz um acerto crítico em combate ou reduz um inimigo a 0 PV, você recupera 1 PM.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Evasão Aprimorada</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            A partir do 10º nível, quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade,
                            você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade
                            de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sorte de Nimb</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 20º nível, o bucaneiro está acostumado a encarar os piores desafios e rir na cara deles — pois sabe que tem a
                            sorte ao seu lado. Você pode gastar 5 PM para rolar novamente um teste recém realizado. Qualquer resultado 11 ou
                            mais na segunda rolagem será considerado um 20 natural.
                        </Text>
                    </ScrollView>
                </View>


                {/*PODERES DE BUCANEIRO*/}
                <Text style={estilo.categoria}>Poderes de Bucaneiro</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Abusar dos Fracos</Text>
                    <Text style={estilo.paragrafo}>
                        Quando ataca uma criatura sob efeito de uma condição de medo, seu dano aumenta em um passo.
                        <Text style={estilo.requisito}> Pré-requisito: Flagelo dos Mares.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Amigos no Porto</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando chega em uma comunidade portuária, você pode gastar 2 PM para fazer um teste de Carisma (CD 10). Se
                            passar, encontra um amigo para o qual pode pedir um favor (veja a perícia Diplomacia) ou que pode ajudá-lo c
                            omo um aliado por uma cena.<Text style={estilo.requisito}> Pré-requisito: Car 13, 6º nível de bucaneiro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aparar</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Uma vez por rodada, quando é atingido por um ataque corpo a corpo, você pode gastar 1 PM para apará-lo. Faça um teste
                            de ataque. Se o resultado do seu teste for maior que o do oponente, você evita o ataque. Você só pode usar este poder
                            se estiver usando uma arma leve ou ágil.<Text style={estilo.requisito}> Pré-requisito: Esgrimista.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Apostador</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar um dia para encontrar e participar de uma mesa de wyrt ou outro jogo de azar. Escolha um valor e
                            faça um teste de Jogatina contra a CD correspondente: T$ 100 (CD 15), T$ 250 (CD 20), T$ 500 (CD 25), T$ 1.000
                            (CD 30), T$ 2.500 (CD 35) e assim por diante. Se passar, você ganha o valor escolhido (ou um item ou favor
                            equivalente, a critério do mestre). Se falhar, você perde esse mesmo valor. A critério do mestre, o lugar onde você
                            está pode impossibilitar o uso deste poder ou limitá-lo a uma vez por semana ou mês.<Text style={estilo.requisito}>
                                Pré-requisito: treinado em Jogatina.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ataque Acrobático</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando se aproxima de um inimigo com uma pirueta ou pulo (em termos de jogo, usando Acrobacia ou Atletismo para se
                            mover) e o ataca no mesmo turno, você recebe +2 em seu teste de ataque e na rolagem de dano.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aumento de Atributo</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que
                            escolhê-lo para o mesmo atributo, o aumento diminui para +1.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aventureiro Ávido</Text>
                    <Text style={estilo.paragrafo}>
                        Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional. Se possuir o
                        poder Surto Heroico, em vez disso seu custo diminui em –2 PM.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Bravata Audaz</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você jura fazer uma façanha específica, como roubar o tesouro de Sckhar ou ganhar um beijo do príncipe e da
                            princesa até o fim do baile. Se cumprir a bravata, seu limite máximo de PM aumenta em +2d6 até o fim da aventura.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Bravata Imprudente</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Na primeira rodada de um combate, você pode jurar derrotar seus inimigos com uma restrição a sua escolha, como
                            lutar com uma mão nas costas, de guarda aberta (em termos de jogo, desprevenido), de olhos vendados (cego) etc.
                            Uma restrição só é válida se prejudicá-lo (por exemplo, lutar com uma mão nas costas só vale como restrição se
                            você luta com duas armas). O mestre tem a palavra final sobre a validade de uma restrição. Você sofre a
                            penalidade durante todo o combate, mas, se vencer, recebe +2 nos testes de ataque e na margem de ameaça até o
                            fim da aventura.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>En Garde</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação de movimento e 1 PM para assumir postura de luta. Até o fim da cena, se estiver usando
                            uma arma leve ou ágil, você recebe +2 na Defesa e na margem de ameaça.<Text style={estilo.requisito}>
                                Pré-requisito: Esgrimista.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Esgrimista</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa uma arma leve ou ágil, você soma seu bônus de Inteligência nas rolagens de dano (limitado pelo seu nível).
                        <Text style={estilo.requisito}> Pré-requisito: Int 13.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Flagelo dos Mares</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você aprende e pode lançar Amedrontar (atributo-chave Carisma). Esta não é uma habilidade mágica e provém de sua
                            capacidade de incutir medo em seus inimigos.<Text style={estilo.requisito}> Pré-requisito: treinado em
                                Intimidação.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Folião</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você tem facilidade em criar amizades durante festas, de noitadas em tavernas a bailes na corte. O mestre define
                            exatamente o que você pode fazer com este poder. Como regra geral, a atitude de todas as pessoas em relação a
                            você durante uma festa melhora em uma categoria.<Text style={estilo.requisito}> Pré-requisito: Car 13.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Grudar o Cano</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando faz um ataque à distância com uma arma de fogo contra um oponente adjacente, você não sofre a penalidade
                            de –5 no teste de ataque e aumenta seu dano em um passo.<Text style={estilo.requisito}> Pré-requisito: treinado
                                em Luta, Pistoleiro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Pernas do Mar</Text>
                    <Text style={estilo.paragrafo}>
                        Você está acostumado à superfície oscilante do convés. Você recebe +2 em Acrobacia e Atletismo e não fica
                        desprevenido quando está se equilibrando ou escalando.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Pistoleiro</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe proficiência com armas de fogo e +2 nas rolagens de dano com essas armas.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Presença Paralisante</Text>
                    <Text style={estilo.paragrafo}>
                        Você soma seu bônus de Carisma em Iniciativa.<Text style={estilo.requisito}> Pré-requisito: Car 13.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ripostar</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando usa a habilidade aparar e evita o ataque, você pode gastar 1 PM. Se fizer isso, pode fazer um ataque corpo
                            a corpo imediato contra o inimigo que o atacou (se ele estiver em alcance).
                            <Text style={estilo.requisito}> Pré-requisito: Aparar, 12º nível de bucaneiro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Touché</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando se aproxima de um inimigo e o ataca com uma arma leve ou ágil no mesmo turno, você pode gastar 2 PM para
                            aumentar seu dano em um passo e receber +5 na margem de ameaça.<Text style={estilo.requisito}> Pré-requisito:
                                Esgrimista, 10º nível de bucaneiro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                {/*BRAVATAS*/}
                <Text style={estilo.categoria}>Bravatas</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Audazes e imprudentes, bucaneiros têm o costume da bravata — a promessa pública de realizar uma façanha, às vezes
                            atrelada a uma restrição, como “Navegarei até Galrasia com um barco furado!”. Todas as Bravatas compartilham as
                            seguintes regras.
                        </Text>
                        <Text style={estilo.requisito}>
                            Uma Bravata deve envolver um desafio real. Em termos de jogos, deve ser uma ação com ND igual ou maior que o nível do
                            bucaneiro.
                        </Text>
                        <Text style={estilo.requisito}>
                            Você só pode ter uma Bravata de cada tipo ativa por vez. Caso falhe em uma Bravata ou desista dela, você perde todos
                            os seus PM e só pode recuperá-los a partir do próximo dia.
                        </Text>
                        <Text style={estilo.requisito}>
                            Quando você cumpre uma Bravata, recebe um benefício que dura até o fim da aventura. De acordo com o mestre, caso isso
                            aconteça perto do fim da aventura, o benefício pode se estender até a próxima.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}