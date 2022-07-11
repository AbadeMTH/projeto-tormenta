import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Guerreiro from '../../../assets/imagensClasses/Guerreiro.png';
import Tabela from '../../../assets/imagensClasses/TabelaGuerreiro.png';

import estilo from '../estilo';

export default function TelaGuerreiro() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS GUERREIRO*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Guerreiros:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            O guerreiro é o mais simples, direto e comum dos aventureiros. Em muitos aspectos, também é o mais importante.
                            Nenhum grupo está completo sem alguém especializado em combate, nenhum reino está seguro sem soldados. Nem mesmo uma
                            aldeia tem chance de sobreviver sem alguns tipos corajosos dispostos a empunhar uma arma para defender seus
                            conterrâneos. Mais cedo ou mais tarde, todos os conflitos acabarão em combate. Então não haverá esperteza, palavras
                            bonitas ou mesmo truques mágicos que possam funcionar sem o bom e velho aço.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Guerreiros Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            Christian Pryde, Katabrok, Ledd, Loriane, Vallen Allond, Sandro Galtran, Val, Verônica.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO GUERREIRO*/}
                <Image style={estilo.img} source={Guerreiro} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um guerreiro começa com 20 pontos de vida (+ modificador de Constituição) e ganha 5 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            3 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Luta (For) ou Pontaria (Des), Fortitude (Con), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For),
                            Cavalgar (Des), Guerra (Int), Iniciativa (Des), Intimidação (Car), Luta (For), Ofício (Int), Percepção (Sab),
                            Pontaria (Des) e Reflexos (Des).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Armas marciais, armaduras pesadas e escudos.
                        </Text>

                    </ScrollView>
                </View>

                {/*TABELA O GUERREIRO*/}
                <Text style={estilo.categoria}>Tabela O Guerreiro</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque especial +4</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Durão, poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque especial +8, poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque extra, poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque especial +12, poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque especial +16, poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Ataque especial +20, poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de guerreiro</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>Campeão, poder de guerreiro</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ataque Especial</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolagem de dano. A cada
                            quatro níveis, pode gastar +1 PM para aumentar o bônus em +4. Você pode dividir os bônus igualmente. Por
                            exemplo, no 17º nível, pode gastar 5 PM para receber +20 no ataque, +20 no dano ou +10 no ataque e +10 no dano.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Durão</Text>
                    <Text style={estilo.paragrafo}>
                        A partir do 3ª nível, sua rijeza muscular permite que você absorva ferimentos. Sempre que sofre dano, você pode
                        gastar 2 PM para reduzir esse dano à metade.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ataque Extra</Text>
                    <Text style={estilo.paragrafo}>
                        A partir do 6º nível, quando usa a ação atacar, você pode gastar 2 PM para realizar um ataque adicional com a
                        mesma arma.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Campeão</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 20º nível, o dano de todos os seus ataques aumenta em um passo. Além disso, sempre que você faz um Ataque
                            Especial ou um Golpe Pessoal e acerta o ataque, recupera metade dos PM gastos nele. Por exemplo, se fizer um
                            Ataque Especial gastando 5 PM para ganhar +20 nas rolagens de dano e acertar o ataque, recupera 2 PM.
                        </Text>
                    </ScrollView>
                </View>

                {/*PODERES DE GUERREIRO*/}
                <Text style={estilo.categoria}>Poderes de Guerreiro</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ambidestria</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Se estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação atacar, você pode fazer dois
                            ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.
                            <Text style={estilo.requisito}> Pré-requisito: Des 15.</Text>
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
                    <Text style={estilo.titulo}>Arqueiro</Text>
                    <Text style={estilo.paragrafo}>
                        Se estiver usando uma arma de ataque à distância, você soma seu bônus de Sabedoria em rolagens de dano (limitado
                        pelo seu nível).<Text style={estilo.requisito}> Pré-requisito: Sab 13.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ataque Reflexo</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Se um alvo em alcance de seus ataques corpo a corpo ficar desprevenido ou se mover voluntariamente para fora do
                            seu alcance, você pode gastar 1 PM para fazer um ataque corpo a corpo contra esse alvo como uma reação.
                            <Text style={estilo.requisito}> Pré-requisito: Des 13.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Bater e Correr</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando faz uma investida, você pode continuar se movendo após o ataque, até o limite de seu deslocamento. Se
                            gastar 2 PM, pode fazer uma investida sobre terreno difícil e sem sofrer a penalidade de Defesa.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Destruidor</Text>
                    <Text style={estilo.paragrafo}>
                        Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2
                        das rolagens de dano da arma.<Text style={estilo.requisito}> Pré-requisito: For 13.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Esgrimista</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa uma arma leve ou ágil, você soma seu bônus de Inteligência nas rolagens de dano (limitado pelo seu
                        nível).<Text style={estilo.requisito}> Pré-requisito: Int 13.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Especialização em Arma</Text>
                    <Text style={estilo.paragrafo}>
                        Escolha uma arma. Você recebe +2 em rolagens de dano com a arma escolhida. Você pode escolher este poder outras
                        vezes para armas diferentes.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Especialização em Armadura</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe resistência a dano 5 se estiver usando uma armadura pesada.<Text style={estilo.requisito}>
                            Pré-requisito: 12º nível de guerreiro.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Golpe de Raspão</Text>
                    <Text style={estilo.paragrafo}>
                        Quando erra um ataque, você pode gastar 1 PM. Se fizer isso, causa 1d8 pontos de dano (do tipo da arma) no alvo
                        do ataque.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Golpe Demolidor</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa a manobra quebrar ou ataca um objeto, você pode gastar 2 PM para ignorar a RD dele.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Golpe Pessoal</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando faz um ataque, você pode desferir seu Golpe Pessoal, uma manobra única, com efeitos determinados por você.
                            Você constrói o seu Golpe Pessoal escolhendo efeitos da lista a seguir. Cada efeito possui um custo; a soma deles
                            será o custo do Golpe Pessoal (mínimo 1 PM e máximo igual ao seu nível). O Golpe Pessoal só pode ser usado com um
                            tipo de arma específico (por exemplo, apenas espadas longas). Quando sobe de nível, você pode reconstruir seu
                            Golpe Pessoal e alterar a arma que ele usa. Você pode escolher este poder outras vezes para golpes diferentes.
                            <Text style={estilo.requisito}> Pré-requisito: 5º nível de guerreiro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ímpeto</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Mestre em Arma</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Escolha uma arma. Com esta arma, seu dano aumenta em um passo e você pode gastar 2 PM para rolar novamente um
                            teste de ataque recém realizado.<Text style={estilo.requisito}> Pré-requisito: Especialização em Arma com a arma
                                escolhida, 12º nível de guerreiro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Planejamento Marcial</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Uma vez por dia, você pode gastar uma hora e 3 PM para escolher um poder de guerreiro ou de combate cujos
                            pré-requisitos cumpra. Você recebe os benefícios desse poder até o próximo dia.
                            <Text style={estilo.requisito}> Pré-requisitos: treinado em Guerra, 10º nível de guerreiro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Romper Resistências</Text>
                    <Text style={estilo.paragrafo}>
                        Quando faz um Ataque Especial, você pode gastar 2 PM adicionais para ignorar qualquer resistência a dano de uma
                        criatura.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Solidez</Text>
                    <Text style={estilo.paragrafo}>
                        Se estiver usando um escudo, você aplica o bônus na Defesa recebido pelo escudo em testes de resistência.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Tornado de Dor</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação padrão e 2 PM para desferir uma série de golpes giratórios. Faça um ataque corpo a
                            corpo e compare-o com a Defesa de cada inimigo adjacente. Então faça uma rolagem de dano com um bônus cumulativo
                            de +2 para cada acerto e aplique-a em cada inimigo atingido.<Text style={estilo.requisito}> Pré-requisito: 6º
                                nível de guerreiro.</Text>
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

                {/*EFEITOS DO GOLPE PESSOAL*/}
                <Text style={estilo.categoria}>Efeitos do Golpe Pessoal</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>A Distância (+1 PM)</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Aumenta o alcance em um passo (de corpo a corpo para curto, médio e longo). Outras características não mudam (um
                            ataque corpo a corpo com alcance curto continua usando Luta e modificador de Força no dano).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Amplo (+3 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Seu ataque atinge todas as criaturas em alcance curto (incluindo aliados, mas não você mesmo). Faça um único teste de
                        ataque e compare com a Defesa de cada criatura.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Atordoante (+2 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Uma criatura que sofra dano do ataque fica atordoada por uma rodada (Fortitude CD For anula).
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Brutal (+1 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Aumenta o dano em mais um dado do mesmo tipo.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Conjurador (Custo da Magia +1 PM)</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Escolha uma magia de 1º ou 2º círculos que tenha como alvo uma criatura ou que afete uma área. Se acertar seu golpe,
                            você lança a magia como uma ação livre, tendo como alvo a criatura atingida ou como centro de sua área o ponto
                            atingido pelo ataque (atributo-chave é um mental a sua escolha).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Destruidor (+2 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Aumenta o multiplicador de crítico em +1.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Elemental (+2 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Causa +2d6 pontos de dano de ácido, eletricidade, fogo ou frio. Você pode escolher este efeito várias vezes,
                        aumentando o dano em +2d6 e o custo em +2 PM a cada vez.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Impactante (+1 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Empurra o alvo 1,5m para cada 5 pontos de dano causado (arredondado para baixo). Por exemplo, um ataque que cause
                        22 pontos de dano empurra o alvo 6m.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Letal (+2 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Aumenta a margem de ameaça em +2. Você pode escolher este efeito duas vezes para aumentar a margem de ameaça
                        em +5.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Penetrante (+1 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Ignora 5 pontos de resistência a dano. Você pode escolher este efeito duas vezes, para ignorar 10 pontos de RD.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Preciso (+1 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Quando faz o teste de ataque, você rola dois dados e usa o melhor resultado.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Qualquer Arma (+1 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode usar seu Golpe Pessoal com qualquer tipo de arma.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Teleguiado (+1 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Ignora penalidades por camuflagem ou cobertura (mas não cobertura total).
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Lento (-1 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Seu ataque exige uma ação completa para ser usado.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Perto da Morte (-2 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Seu ataque só pode ser usado se você estiver com um quarto de seus pontos de vida ou menos.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sacrifício (-2 PM)</Text>
                    <Text style={estilo.paragrafo}>
                        Você perde PV igual à metade do dano causado pelo seu ataque.
                    </Text>
                </View>

            </View>
        </ScrollView>
    )
}