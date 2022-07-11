import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Bardo from '../../../assets/imagensClasses/Bardo.png';
import Tabela from '../../../assets/imagensClasses/TabelaBardo.png';

import estilo from '../estilo';

export default function TelaBardo() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS BARDO*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Bardos:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Bardos são contadores de histórias e músicos errantes que acompanham grupos de aventureiros em missões para depois
                            narrar suas façanhas. Contudo, seu papel vai muito além disso. Enquanto muitos heróis se especializam em uma só área,
                            os bardos são versáteis, pessoas do mundo, confortáveis ao lado de reis e de mendigos. Muitas vezes são a “face” do
                            grupo, tomando a frente em negociações e sabendo usar palavras doces quando outros prefeririam apelar para as armas.
                            Bardos têm amigos, inimigos, conhecidos, amantes e rivais em cada cidade e aldeia. Conhecem um fato importante sobre
                            cada artefato misterioso. Tocam a música certa para inflamar as almas de seus companheiros a cada combate.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Bardos Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            Luigi Sortudo, Kadeen, Niele, Senomar.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO BARDO*/}
                <Image style={estilo.img} source={Bardo} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um bardo começa com 12 pontos de vida (+ modificador de Constituição) e ganha 3 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            4 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Atuação (Car) e Reflexos (Des) mais 6 a sua escolha entre Acrobacia (Des), Cavalgar (Des), Conhecimento (Int),
                            Diplomacia (Car), Enganação (Car), Furtividade (Des), Iniciativa (Des), Intuição (Sab), Investigação (Int), Jogatina
                            (Car), Ladinagem (Des), Luta (For), Misticismo (Int), Nobreza (Int), Percepção (Sab), Pontaria (Des), Religião (Sab)
                            e Vontade (Sab).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Armas marciais.
                        </Text>
                    </ScrollView>
                </View>

                {/*TABELA O BARDO*/}
                <Text style={estilo.categoria}>Tabela O Bardo</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Inspiração +1, magias (1° círculo)</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bardo, eclético</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Inspiração +2, poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (2° círculo), poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Inspiração +3, poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (3° círculo), poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Inspiração +4, poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Magias (4° círculo), poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Inspiração +5, poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bardo</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>Artista completo, poder de bardo</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Inspiração</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação padrão e 2 PM para inspirar as pessoas com sua música (ou outro tipo de arte, como dança).
                            Você e todos os seus aliados em alcance curto ganham +1 em testes de perícia até o fim da cena. A cada quatro níveis,
                            pode gastar +2 PM para aumentar o bônus em +1.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Magias</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode lançar magias arcanas de 1º
                            círculo que pertençam a essas escolas. À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo
                            no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada
                            nível par (2º, 4º etc.), aprende uma magia de qualquer círculo e escola que possa lançar. Você pode lançar essas
                            magias vestindo armaduras leves sem precisar de testes de Misticismo. Seu atributo-chave para lançar magias é Carisma
                            e você soma seu bônus de Carisma no seu total de PM.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Eclético</Text>
                    <Text style={estilo.paragrafo}>
                        A partir do 2º nível, você pode gastar 1 PM para receber todos os benefícios de ser treinado em uma perícia por um
                        teste.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Artista Completo</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 20º nível, você pode usar Inspiração como uma ação livre. Enquanto estiver sob efeito de sua Inspiração, qualquer
                            habilidade de bardo (incluindo magias) que você usar tem seu custo em PM reduzido pela metade (após aplicar quaisquer
                            outras habilidades que reduzam o custo).
                        </Text>
                    </ScrollView>
                </View>

                {/*PODERES DE BARDO*/}
                <Text style={estilo.categoria}>Poderes de Bardo</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Arte Mágica</Text>
                    <Text style={estilo.paragrafo}>
                        Enquanto você estiver sob efeito de sua habilidade Inspiração, a CD para resistir a suas magias de bardo aumenta em
                        +2.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Aumentar Repertório</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você aprende duas magias de qualquer círculo que possa lançar. Elas devem pertencer às escolas que você sabe usar,
                            mas podem ser arcanas ou divinas. Você pode escolher este poder quantas vezes quiser.
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
                    <Text style={estilo.titulo}>Canção Assustadora</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação padrão e 1 PM para forçar todas as criaturas a sua escolha em alcance curto a fazer um
                            teste de Vontade (CD Car). Uma criatura que falhe fica abalada até o fim da cena. Uma criatura que passe se torna
                            imune a esta habilidade até o fim do dia.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Dança das Lâminas</Text>
                    <Text style={estilo.paragrafo}>
                        Quando você lança uma magia com execução de uma ação padrão, pode gastar 1 PM para fazer um ataque corpo a corpo como
                        uma ação livre.<Text style={estilo.requisito}> Pré-requisitos: Esgrima Mágica, 10º nível de bardo.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Esgrima Mágica</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Sua arte mescla esgrima e magia, transformando dança em golpes. Enquanto estiver sob efeito de Inspiração, você pode
                            substituir testes de Luta por testes de Atuação, mas apenas se estiver empunhando armas leves ou de uma mão.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Estrelato</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Suas apresentações o tornaram famoso, fazendo com que você seja reconhecido e bem tratado por aqueles que apreciam a
                            arte. Por outro lado, pode ser difícil passar despercebido, especialmente em grandes cidades. Quando usa Atuação para
                            impressionar uma plateia, o bônus recebido em perícias baseadas em Carisma aumenta para +5.
                            <Text style={estilo.requisito}> Pré-requisito: 6º nível de bardo.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fascinar</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação padrão e 1 PM para fascinar uma criatura a sua escolha em alcance curto. Faça um teste de
                            Atuação oposto pelo teste de Vontade da criatura. Se você passar, ela fica fascinada enquanto você se concentrar
                            (uma ação padrão por rodada). Se a criatura passar, fica imune a este efeito por um dia.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fascinar em Massa</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando usa Fascinar, você pode gastar 2 PM extras. Se fizer isso, afeta todas as criaturas a sua escolha em alcance
                            curto (você faz um único teste de Atuação, oposto pelo teste de Vontade de cada criatura).
                            <Text style={estilo.requisito}> Pré-requisito: Fascinar.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Golpe Elemental</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo, pode gastar 1 PM para
                            causar 1d6 de dano adicional de ácido, eletricidade, fogo ou frio, a sua escolha. Para cada quatro níveis que
                            possuir, pode gastar +1 PM para aumentar o dano em +1d6.<Text style={estilo.requisito}> Pré-requisito: Golpe
                                Mágico.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Golpe Mágico</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo em um inimigo, recebe 2 PM
                            temporários. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível. PM temporários desaparecem no
                            final da cena.<Text style={estilo.requisito}> Pré-requisito: Esgrima Mágica.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Inspiração Marcial</Text>
                    <Text style={estilo.paragrafo}>
                        Quando você usa Inspiração, você e seus aliados aplicam o bônus recebido em rolagens de dano (além de testes de
                        perícia).
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Lendas e Histórias</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você possui um acervo mental de relatos, canções e folclore, sendo um arquivo vivo de assuntos gerais. Além de
                            outros benefícios a critério do mestre, você pode gastar 1 PM para rolar novamente um teste recém realizado de
                            Conhecimento, Misticismo, Nobreza ou Religião para informação, identificar criaturas ou identificar itens
                            mágicos.<Text style={estilo.requisito}> Pré-requisito: Int 13.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Manipular</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar 1 PM para forçar uma criatura que esteja fascinada a fazer um teste de Vontade (CD Car). Se a
                            criatura falhar, sofre o efeito da magia Enfeitiçar até o fim da cena. Se passar, fica imune a esta habilidade
                            por um dia. Usar esta habilidade não conta como uma ameaça à criatura fascinada.
                            <Text style={estilo.requisito}> Pré-requisito: Fascinar.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Manipular em Massa</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa Manipular, você pode gastar 2 PM extras. Se fizer isso, afeta todas as criaturas a sua escolha em alcance
                        curto.<Text style={estilo.requisito}> Pré-requisitos: Fascinar em Massa, Manipular, 10º nível de bardo.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Melodia Curativa</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação padrão e 1 PM para gerar um efeito curativo. Você e todos os seus aliados em alcance curto
                            recuperam 1d6 PV. Para cada 2 PM extras que você gastar, cura +1d6 PV (ou seja, pode gastar 3 PM para recuperar 2d6
                            PV, 5 PM para recuperar 3d6 PV e assim por diante).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Melodia Restauradora</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando você usa Melodia Curativa, pode gastar 2 PM extras. Se fizer isso, escolha uma das condições a seguir:
                            abalado, apavorado, alquebrado, atordoado, cego, confuso, esmorecido, exausto, fatigado, frustrado ou surdo.
                            Você remove a condição escolhida de quaisquer aliados a sua escolha afetados pela Melodia Curativa.
                            <Text style={estilo.requisito}> Pré-requisito: Melodia Curativa.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Mestre de Sussurros</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você é dissimulado, atento para rumores e ótimo em espalhar fofocas. Quando faz um teste de Investigação para obter
                            informação ou um teste de Enganação para intriga, você rola dois dados e usa o melhor resultado. Além disso, pode
                            fazer esses testes em ambientes sociais (taverna, festival, corte...) sem custo e em apenas uma hora (em vez de um
                            dia).<Text style={estilo.requisito}> Pré-requisitos: Car 13, treinado em Enganação e Investigação.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Paródia</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Uma vez por rodada, quando vê alguém lançando uma magia em alcance médio, você pode pagar 1 PM e fazer um teste de
                            Atuação (CD 15 + custo em PM da magia). Se passar, até o final de seu próximo turno você pode lançar essa magia.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Prestidigitação</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando faz uma ação padrão qualquer, você pode aproveitar seus gestos para lançar uma magia de ilusão. Faça um teste
                            de Atuação (CD 15 + custo em PM da magia). Se passar, você lança a magia como uma ação livre. Outros personagens só
                            percebem que você lançou uma magia se passarem num teste de Misticismo (CD 20). Se falhar, a magia não funciona, mas
                            você gasta os PM mesmo assim.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}