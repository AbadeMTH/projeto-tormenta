import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Nobre from '../../../assets/imagensClasses/Nobre.png';
import Tabela from '../../../assets/imagensClasses/TabelaNobre.png';

import estilo from '../estilo';

export default function TelaNobre() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS NOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Nobres:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            O aventureiro nobre é mais do que alguém que nasceu nas circunstâncias certas. É um herói que reconhece o valor de um
                            bom líder e se considera ligado à terra, ao povo, a seus aliados. Um burguês, um aventureiro ou mesmo um plebeu comum
                            podem todos mudar de casa e de vida, ir atrás de suas próprias ambições. Mas o nobre não tem escolha. Se ele
                            abandonar seu posto, toda uma sociedade pode ruir, pessoas vão ficar sem trabalho e sem destino, conquistadores
                            inescrupulosos podem invadir. O nobre é rico, mas não é livre.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Nobres Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            General Supremo Hermann Von Krauser, Lady Ayleth Karst, Rainha-Imperatriz Shivara.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO NOBRE*/}
                <Image style={estilo.img} source={Nobre} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um nobre começa com 16 pontos de vida (+ modificador de Constituição) e ganha 4 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            4 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Diplomacia (Car) ou Intimidação (Car), Vontade (Sab), mais 4 a sua escolha entre Adestramento (Car), Atuação (Car),
                            Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Fortitude (Con), Guerra (Int), Iniciativa
                            (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Jogatina (Car), Luta (For), Nobreza (Int), Ofício
                            (Int), Percepção (Sab) e Pontaria (Des).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Armas marciais, armaduras pesadas e escudos.
                        </Text>
                    </ScrollView>
                </View>

                {/*TABELA O NOBRE*/}
                <Text style={estilo.categoria}>Tabela O Nobre</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Autoconfiança, espólio, orgulho</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre, riqueza</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Gritar ordens, poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de nobre</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>Realeza, poder de nobre</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Autoconfiança</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode somar seu bônus de Carisma em vez de Destreza na Defesa (mas continua não podendo somar um bônus de
                        atributo na Defesa quando usa armadura pesada).
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Espólio</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe um item a sua escolha com preço de até T$ 2.000.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Orgulho</Text>
                    <Text style={estilo.paragrafo}>
                        Quando faz um teste de perícia, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu
                        modificador de Carisma). Para cada PM que gastar, recebe +2 no teste.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Riqueza</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 2º nível, você passa a receber dinheiro de sua família, patrono ou negócios. Uma vez por aventura, você pode
                            fazer um teste de Carisma com um bônus igual ao seu nível de nobre. Você recebe um número de Tibares de ouro
                            igual ao resultado do teste. Por exemplo, um nobre de 5º nível com Carisma 18 (+4) que role um 13 no dado recebe
                            22 TO. O uso desta habilidade é condicionado a onde e quando você faz o teste, assim como a relação com sua
                            família, patrono ou negócios. Por exemplo, um nobre viajando pelos ermos, isolado da civilização, dificilmente
                            teria como receber dinheiro.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Gritar Ordens</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            A partir do 3º nível, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu bônus de Carisma).
                            Até o início de seu próximo turno, todos os seus aliados em alcance curto recebem um bônus nos testes de perícia
                            igual à quantidade de PM que você gastou.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Realeza</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 20º nível, sua presença impõe mais do que respeito — impõe veneração. Uma criatura que seja alvo de sua
                            Presença Aristocrática e falhe no teste de Vontade por 10 ou mais se arrepende tanto de ter tentado machucá-lo
                            que passa a lutar ao seu lado (e seguir suas ordens, se puder entendê-lo) pelo resto da cena. Uma criatura que
                            seja reduzida a 0 PV por Palavras Afiadas não sofre este dano; em vez disso, passa a lutar ao seu lado pelo resto
                            da cena.
                        </Text>
                    </ScrollView>
                </View>

                {/*PODERES DE NOBRE*/}
                <Text style={estilo.categoria}>Poderes de Nobre</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Armadura Brilhante</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode somar o modificador de Carisma na Defesa quando usa armadura pesada. Se fizer isso, não pode somar o
                            modificador de Destreza, mesmo que outras habilidades ou efeitos permitam isso.
                            <Text style={estilo.requisito}> Pré-requisito: 8º nível de nobre.</Text>
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
                    <Text style={estilo.titulo}>Autoridade Feudal</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar 2 PM para conclamar o povo a realizar uma tarefa para você. Em termos de jogo, passa
                            automaticamente em um teste de perícia com CD máxima igual ao seu nível +5. O tempo necessário para conclamar o
                            povo é o tempo do uso da perícia em questão. Esta habilidade só pode ser usada em locais onde sua posição
                            carregue alguma influência (a critério do mestre).<Text style={estilo.requisito}> Pré-requisito: 6º nível de
                                nobre.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Educação Privilegiada</Text>
                    <Text style={estilo.paragrafo}>
                        Você se torna treinado em duas perícias de nobre a sua escolha.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Estrategista</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode direcionar aliados em alcance curto. Gaste uma ação padrão e 1 PM por aliado que quiser direcionar
                            (limitado pelo seu modificador de Carisma). No próximo turno do aliado, ele ganha uma ação de movimento.
                            <Text style={estilo.requisito}> Pré-requisitos: Int 13, treinado em Guerra, 6º nível de nobre.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Favor</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode usar sua influência para pedir favores a pessoas poderosas. Pedir favores gasta 5 PM e exige pelo menos
                            uma hora de conversa e bajulação — ou mais, de acordo com o mestre. Faça um teste de Diplomacia. A CD do teste
                            depende do que você está pedindo: 10 para algo simples (como um convite para uma festa particular), 20 para algo
                            caro ou complicado (como uma carona de barco até Galrasia) e 30 para algo perigoso ou ilegal (como acesso aos
                            planos militares do reino).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>General</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando você usa o poder Estrategista, os aliados direcionados recebem 1d4 pontos de mana temporários. Esses PM
                            duram até o fim do turno do aliado e não podem ser usados em efeitos que concedam PM.
                            <Text style={estilo.requisito}> Pré-requisitos: Estrategista, 12º nível de nobre.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Grito Tirânico</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando usa a habilidade Palavras Afiadas, você pode gastar +2 PM. Se fizer isso, seus dados de dano aumentam para
                            d8 e você atinge todos os inimigos em alcance curto.<Text style={estilo.requisito}> Pré-requisitos: Palavras
                                Afiadas, 8º nível de nobre.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Inspirar Confiança</Text>
                    <Text style={estilo.paragrafo}>
                        Sua presença faz as pessoas darem o melhor de si. Você pode gastar 2 PM para fazer um aliado em alcance curto
                        rolar novamente um teste recém realizado.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Inspirar Glória</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            A presença de um nobre motiva as pessoas a realizarem façanhas impressionantes. Você pode gastar 5 PM para fazer
                            um aliado em alcance curto ganhar uma ação padrão adicional no próximo turno dele. Você só pode usar esta
                            habilidade uma vez por cena em cada aliado.<Text style={estilo.requisito}> Pré-requisitos: Inspirar Confiança,
                                8º nível de nobre.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Jogo da Corte</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode gastar 1 PM para rolar novamente um teste recém realizado de Diplomacia, Intuição ou Nobreza.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Liderar pelo Exemplo</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode pagar 2 PM para servir de inspiração. Até o início de seu próximo turno, sempre que você passar em um
                            teste de perícia, aliados em alcance curto que fizerem um teste da mesma perícia podem usar o resultado total do
                            seu teste em vez de rolar o dado.<Text style={estilo.requisito}> Pré-requisito: 6º nível de nobre.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Língua de Ouro</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação padrão e 6 PM para gerar o efeito da magia Enfeitiçar com os aprimoramentos de sugerir
                            ação e afetar todas as criaturas dentro do alcance (CD Car). Esta não é uma habilidade mágica e provém de sua
                            capacidade de influenciar outras pessoas.<Text style={estilo.requisito}> Pré-requisitos: Língua de Prata, 8º
                                nível de nobre</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Língua de Prata</Text>
                    <Text style={estilo.paragrafo}>
                        Quando faz um teste de perícia baseada em Carisma, você pode gastar 2 PM para receber um bônus no teste igual a
                        metade do seu nível.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Língua Rápida</Text>
                    <Text style={estilo.paragrafo}>
                        Quando faz um teste de Diplomacia para mudar atitude como uma ação completa, você sofre uma penalidade de –5, em
                        vez de –10.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Palavras Afiadas</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação padrão e 1 PM para submeter a sua vontade uma criatura inteligente (Int 3 ou mais) em
                            alcance curto. Faça um teste de Diplomacia ou Intimidação (a sua escolha) oposto ao teste de Vontade da criatura.
                            Se vencer, você causa 2d6 pontos de dano mental não letal à criatura. Se perder, causa metade deste dano. Para
                            cada PM extra que você gastar quando ativar o poder, o dano aumenta em +1d6. Caso a criatura seja reduzida a 0
                            ou menos PV, rende-se (caso você tenha usado Diplomacia) ou fica apavorada (caso tenha usado Intimidação), em
                            vez de cair inconsciente.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Presença Aristocrática</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Sempre que uma criatura inteligente (Int 3 ou mais) tentar machucá-lo (causar dano com um ataque, magia ou
                            habilidade) você pode gastar 2 PM. Se fizer isso, a criatura deve fazer um teste de Vontade (CD Car). Se falhar,
                            não conseguirá machucá-lo e perderá a ação. Você só pode usar esta habilidade uma vez por cena contra cada
                            criatura.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Presença Majestosa</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você impõe respeito a todos. A habilidade Presença Aristocrática passa a funcionar contra criaturas com Int 1 ou
                            mais (passa a afetar até mesmo animais, embora continue não funcionando contra criaturas sem valor de
                            Inteligência). Além disso, você pode usá-la mais de uma vez contra uma mesma criatura na mesma cena.
                            <Text style={estilo.requisito}> Pré-requisitos: Presença Aristocrática, 16º nível de nobre.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Título</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você adquire um título de nobreza. Converse com o mestre para definir os benefícios exatos de seu título. Como
                            regra geral, você recebe 10 TO por nível de nobre no início de cada aventura (rendimentos dos impostos) ou a
                            ajuda de um aliado veterano (um membro de sua corte).
                            <Text style={estilo.requisito}> Pré-requisito: Autoridade Feudal, 10º nível de nobre.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Voz Poderosa</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe +2 em Diplomacia e Intimidação. Suas habilidades de nobre com alcance curto passam para alcance médio.
                    </Text>
                </View>

            </View>
        </ScrollView>
    )
}