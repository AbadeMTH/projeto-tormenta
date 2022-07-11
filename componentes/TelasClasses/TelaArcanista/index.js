import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Arcanista from '../../../assets/imagensClasses/Arcanista.png';
import Tabela from '../../../assets/imagensClasses/TabelaArcanista.png';

import estilo from '../estilo';

export default function TelaArcanista() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS ARCANISTAS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Arcanistas:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            O arcanista é o grande mestre da magia. Muitos aventureiros aprendem algum rudimento das artes místicas, mas não têm
                            noção de seu verdadeiro potencial e do perigo inerente a usá-las sem aprofundamento. Apenas um arcanista dedicado é
                            capaz de dobrar a própria realidade.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Arcanistas Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            Gradda, Ichabod, Raven Blackmoon, Reynard, Ripp, Rufus Domat, Salini Alan, Talude, Vladislav Tpish, Vectorius,
                            Yadallina.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO ARCANISTA*/}
                <Image style={estilo.img} source={Arcanista} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um arcanista começa com 8 pontos de vida (+ modificador de Constituição) e ganha 2 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            6 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Misticismo (Int) e Vontade (Sab), mais 1 a sua escolha entre Conhecimento (Int), Iniciativa (Des), Ofício (Int) e
                            Percepção (Sab).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Nenhuma.
                        </Text>
                    </ScrollView>
                </View>

                {/*TABELA O ARCANISTA*/}
                <Text style={estilo.categoria}>Tabela O Arcanista</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Caminho do arcanista, magias (1° círculo)</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (2° círculo), poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (3° círculo), poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (4° círculo), poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (5° círculo), poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de arcanista</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>Alta arcana, poder de arcanista</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Caminho do Arcanista</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            A magia é um poder incrível, capaz de alterar a realidade. Esse poder tem fontes distintas e cada uma opera conforme
                            suas próprias regras. Escolha uma das opções a seguir. Uma vez feita, essa escolha não pode ser mudada.
                        </Text>

                        <Text style={estilo.topico}>Bruxo</Text>
                        <Text style={estilo.paragrafo}>
                            Você lança magias através de um foco — uma varinha, cajado, chapéu... Para lançar uma magia, você precisa segurar o
                            foco com uma mão (e gesticular com a outra) ou fazer um teste de Misticismo (CD 20 + o custo em PM da magia; se
                            falhar, a magia não funciona, mas você gasta os PM mesmo assim). O foco tem resistência a dano 10 e PV iguais à
                            metade dos seus, independentemente de seu material ou forma. Se for danificado, é totalmente restaurado na próxima
                            vez que você recuperar seus PM. Se for destruído (reduzido a 0 PV), você fica atordoado por uma rodada. Você pode
                            recuperar um foco destruído ou perdido com uma semana de trabalho e T$ 100. Seu atributo-chave para magias é
                            Inteligência.
                        </Text>

                        <Text style={estilo.topico}>Feiticeiro</Text>
                        <Text style={estilo.paragrafo}>
                            Você lança magias através de um poder inato que corre em seu sangue. Escolha uma linhagem como origem de seus poderes
                            (veja a página 39). Você recebe a herança básica da linhagem escolhida. Você não depende de nenhum item ou estudo,
                            mas sua capacidade de aprender magias é limitada — você aprende uma magia nova a cada nível ímpar (3º, 5º, 7º etc.),
                            em vez de a cada nível. Seu atributo-chave para magias é Carisma.
                        </Text>

                        <Text style={estilo.topico}>Mago</Text>
                        <Text style={estilo.paragrafo}>
                            Você lança magias através de estudo e memorização de fórmulas arcanas. Você só pode lançar magias memorizadas; suas
                            outras magias não podem ser lançadas, mesmo que você tenha pontos de mana para tal. Para memorizar magias, você
                            precisa estudar seu grimório por uma hora. Quando faz isso, escolhe metade das magias que conhece (por exemplo, se
                            conhece 7 magias, escolhe 3). Essas serão suas magias memorizadas. Você pode memorizar magias uma vez por dia. Caso
                            não possa estudar (por não ter tempo, por ter perdido o grimório...), não poderá trocar suas magias memorizadas. Um
                            grimório tem as mesmas estatísticas de um foco (veja acima) e pode ser recuperado da mesma forma. Você começa com uma
                            magia adicional (para um total de 4) e, sempre que ganha acesso a um novo círculo de magias, aprende uma magia
                            adicional daquele círculo. Seu atributo-chave para magias é Inteligência.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Magias</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode lançar magias arcanas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º
                            círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo. A cada
                            nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é definido pelo
                            seu Caminho (veja acima) e você soma o bônus do atributo-chave no seu total de PM. Veja o Capítulo 4 para as regras
                            de magia.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Alta Arcana</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 20º nível, seu domínio das artes arcanas é total. O custo em PM de suas magias arcanas é reduzido à metade (após
                            aplicar aprimoramentos e quaisquer outros efeitos que reduzam custo).
                        </Text>
                    </ScrollView>
                </View>

                {/*PODERES DE ARCANISTA*/}
                <Text style={estilo.categoria}>Poderes de Arcanista</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Arcano de Batalha</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você soma o bônus de seu atributo-chave nas rolagens de dano para magias e para seu Raio Arcano (caso possua).
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
                    <Text style={estilo.titulo}>Caldeirão de Bruxo</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode criar poções, como se tivesse o poder geral Preparar Poção. Se tiver ambos, você pode criar poções de 3º
                            círculo.<Text style={estilo.requisito}> Pré-requisitos: Bruxo, treinado em Ofício (alquimia).</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Conhecimento Mágico</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você aprende duas magias de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Contramágica Aprimorada</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Uma vez por rodada, você pode fazer uma contramágica como uma reação (veja a página 164).
                            <Text style={estilo.requisito}> Pré-requisito: Dissipar Magia</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Envolto em Mistério</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Sua aparência e postura assombrosas o permitem manipular e assustar pessoas ignorantes ou supersticiosas. O mestre
                            define o que exatamente você pode fazer e quem se encaixa nessa descrição. Como regra geral, você recebe +5 em
                            Enganação e Intimidação contra pessoas não treinadas em Conhecimento ou Misticismo.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Escriba Arcano</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode aprender magias copiando os textos de pergaminhos e grimórios de outros magos. Aprender uma magia dessa
                            forma exige um dia de trabalho e T$ 250 em matérias-primas por PM necessário para lançar a magia. Assim, aprender
                            uma magia de 3º círculo (6 PM) exige 6 dias de trabalho e o gasto de T$ 1.500.
                            <Text style={estilo.requisito}> Pré-requisitos: Mago, treinado em Conhecimento.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Especialista em Escola</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Escolha uma escola de magia. A CD para resistir a suas magias dessa escola aumenta em +2.
                            <Text style={estilo.requisito}> Pré-requisitos: Bruxo ou Mago.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Familiar</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você possui um animal de estimação mágico. Veja o quadro no final da tela para detalhes.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fluxo de Mana</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode manter dois efeitos sustentados ativos simultaneamente com apenas uma ação livre, pagando o custo de cada
                            efeito separadamente.<Text style={estilo.requisito}> Pré-requisito: 10º nível de arcanista.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Foco Vital</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Se você estiver segurando seu foco e sofrer dano que o levaria a 0 PV ou menos, você fica com 1 PV e o foco perde
                            pontos de vida igual ao valor excedente, até ser destruído.<Text style={estilo.requisito}> Pré-requisito: Bruxo.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fortalecimento Arcano</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            A CD para resistir a suas magia aumenta em +1. Se você puder lançar magias de 4º círculo, em vez disso ela aumenta
                            em +2.<Text style={estilo.requisito}> Pré-requisito: 5º nível de arcanista.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Herança Aprimorada</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe a herança aprimorada de sua linhagem sobrenatural.<Text style={estilo.requisito}> Pré-requisitos:
                                Feiticeiro, 6º nível de arcanista.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Herança Superior</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe a herança superior de sua linhagem sobrenatural.<Text style={estilo.requisito}> Pré-requisitos: Herança
                                Aprimorada, 11º nível de arcanista.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Magia Pungente</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando lança uma magia, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ela.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Mestre em Escola</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Escolha uma escola de magia. O custo para lançar magias dessa escola diminui em –1 PM.<Text style={estilo.requisito}>
                                Pré-requisitos: Especialista em Escola com a escola escolhida, 8º nível de arcanista.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Poder Mágico</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você recebe +1 ponto de mana por nível de arcanista. Quando sobe de nível, os PM que recebe por este poder aumentam
                            de acordo. Por exemplo, se escolher este poder no 4º nível, recebe 4 PM. Quando subir para o 5º nível, recebe +1 PM
                            e assim por diante. Você pode escolher este poder uma segunda vez, para um total de +2 PM por nível.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Raio Arcano</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação padrão para disparar um raio num alvo em alcance curto que causa 1d6 pontos de dano de
                            essência. Esse dano aumenta em +1d6 para cada círculo de magia acima do 1º que você puder lançar. O alvo pode fazer
                            um teste de Reflexos (CD atributo-chave) para reduzir o dano à metade.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Raio Elemental</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando usa Raio Arcano, você pode pagar 1 PM para que ele cause dano de um tipo de energia a sua escolha, entre
                            ácido, eletricidade, fogo, frio ou trevas. Se o alvo falhar no teste de Reflexos, sofre uma condição, de acordo
                            com o tipo de energia. Veja a descrição das condições no Apêndice. Ácido: vulnerável por uma rodada. Eletricidade:
                            ofuscado por uma rodada. Fogo: fica em chamas. Frio: lento por uma rodada. Trevas: não pode ser curado por uma
                            rodada.<Text style={estilo.requisito}> Pré-requisito: Raio Arcano.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Raio Poderoso</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Os dados de dano do seu Raio Arcano aumentam para d8 e o alcance dele aumenta para médio.
                            <Text style={estilo.requisito}> Pré-requisito: Raio Arcano.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Tinta do Mago</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode criar pergaminhos, como se tivesse o poder Escrever Pergaminho. Se tiver ambos, seu custo para criar
                            pergaminhos é reduzido à metade.<Text style={estilo.requisito}> Pré-requisitos: Mago, treinado em Conhecimento.</Text>
                        </Text>
                    </ScrollView>
                </View>

                {/*LINHAGENS SOBRENATURAIS*/}
                <Text style={estilo.categoria}>Linhagens Sobrenaturais</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre as Linhagens:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            O poder de um feiticeiro vem de seu sangue — mais precisamente, do sangue de um antepassado sobrenatural, como um
                            dragão ou uma fada. Além da capacidade de lançar magias, o feiticeiro herda desse antepassado uma fração de seu poder
                            natural, que ele pode desenvolver ao longo de sua vida. Ao escolher o caminho do feiticeiro, escolha uma linhagem da
                            lista a seguir. Você recebe a herança básica de sua linhagem e pode desenvolver as demais através de poderes de
                            arcanista.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Linhagem Dracônica</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Seu sangue vem de um dragão. Escolha um tipo de dano entre ácido, eletricidade, fogo ou frio.
                        </Text>

                        <Text style={estilo.topico}>Básica</Text>
                        <Text style={estilo.paragrafo}>
                            Você soma seu modificador de Carisma em seus pontos de vida iniciais e recebe resistência ao tipo de dano escolhido 5.
                        </Text>

                        <Text style={estilo.topico}>Aprimorada</Text>
                        <Text style={estilo.paragrafo}>
                            Suas magias do tipo escolhido custam –1 PM e causam +1 ponto de dano por dado.
                        </Text>

                        <Text style={estilo.topico}>Superior</Text>
                        <Text style={estilo.paragrafo}>
                            Você passa a somar o dobro do seu modificador de Carisma em seus pontos de vida iniciais e se torna imune a dano do
                            tipo escolhido. Além disso, sempre que reduz um ou mais inimigos a 0 PV ou menos com uma magia do tipo escolhido,
                            você recebe uma quantidade de PM temporários igual ao círculo da magia.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Linhagem Feérica</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Seu sangue foi tocado pelas fadas.
                        </Text>

                        <Text style={estilo.topico}>Básica</Text>
                        <Text style={estilo.paragrafo}>
                            Você se torna treinado em Enganação e aprende uma magia de 1º círculo de encantamento ou ilusão, arcana ou divina,
                            a sua escolha.
                        </Text>

                        <Text style={estilo.topico}>Aprimorada</Text>
                        <Text style={estilo.paragrafo}>
                            A CD para resistir a suas magias de encantamento e ilusão aumenta em +2 e suas magias dessas escolas custam –1 PM.
                        </Text>

                        <Text style={estilo.topico}>Superior</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe +4 em Carisma. Se uma criatura passar no teste de resistência contra uma magia de encantamento ou ilusão
                            lançada por você, você fica alquebrado até o final da cena.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Linhagem Rubra</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Seu sangue foi corrompido pela Tormenta.
                        </Text>

                        <Text style={estilo.topico}>Básica</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe um poder da Tormenta. Quando adquire um poder da Tormenta, você pode aplicar a penalidade em Carisma a
                            outro atributo. Sua relação com a invasão aberrante lhe permite sacrificar partes específicas de seu ser.
                        </Text>

                        <Text style={estilo.topico}>Aprimorada</Text>
                        <Text style={estilo.paragrafo}>
                            Escolha uma magia para cada poder da Tormenta que você possui. Essas magias custam –2 PM. Sempre que recebe um novo
                            poder da Tormenta, você pode escolher uma nova magia. Esta herança conta como um poder da Tormenta.
                        </Text>

                        <Text style={estilo.topico}>Superior</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe +4 PM para cada poder da Tormenta que tiver. Esta herança conta como um poder da Tormenta.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}