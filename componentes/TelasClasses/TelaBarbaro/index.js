import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Barbaro from '../../../assets/imagensClasses/Barbaro.png';
import Tabela from '../../../assets/imagensClasses/TabelaBarbaro.png';

import estilo from '../estilo';

export default function TelaBarbaro() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS BARBARO*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Bárbaros:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            O bárbaro é um herói primitivo que ignora ou descarta as frivolidades da civilização. Um combatente terrível, o
                            bárbaro luta por instinto, confiando menos em técnica e mais em puro frenesi de batalha. Em momentos de grande
                            perigo, ou apenas frente a algo que desperte seu ódio, o bárbaro é tomado por uma fúria guerreira, ficando cego para
                            tudo que não seja o combate e sendo imbuído de força e resistência animalescas.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Bárbaros Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            Alenn Toren Greenfeld, Andilla Dente-de-Ferro, Klunc, Galo Louco.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO BARBARO*/}
                <Image style={estilo.img} source={Barbaro} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um bárbaro começa com 24 pontos de vida (+ modificador de Constituição) e ganha 6 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            3 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Fortitude (Con) e Luta (For), mais 4 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des),
                            Iniciativa (Des), Intimidação (Car), Ofício (Int), Percepção (Sab), Pontaria (Des), Sobrevivência (Sab) e Vontade
                            (Sab).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Armas marciais e escudos.
                        </Text>
                    </ScrollView>
                </View>

                {/*TABELA O BARBARO*/}
                <Text style={estilo.categoria}>Tabela O Bárbaro</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Fúria +2</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bárbaro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Instinto Selvagem +1, poder de bárbaro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bárbaro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bárbaro, resistência a dano 2</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Fúria +3, poder de bárbaro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bárbaro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bárbaro, resistência a dano 4</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Instinto selvagem +2, poder de bárbaro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bárbaro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Fúria +4, poder de bárbaro, resistência a dano 6</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bárbaro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bárbaro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bárbaro, resistência a dano 8</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Instinto selvagem +3, poder de bárbaro</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Fúria +5, poder de bárbaro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bárbaro, resistência a dano 10</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bárbaro</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de bárbaro</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>Fúria titânica, poder de bárbaro</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fúria</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar 2 PM para invocar uma fúria selvagem, tornando-se temível em combate. Você recebe +2 em testes de
                            ataque e rolagens de dano corpo a corpo, mas não pode fazer nenhuma ação que exija calma e concentração (como usar
                            a perícia Furtividade ou lançar magias). A cada cinco níveis, pode gastar +2 PM para aumentar os bônus em +1. A
                            Fúria termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um efeito (ataque, habilidade, magia...)
                            hostil.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Instinto Selvagem</Text>
                    <Text style={estilo.paragrafo}>
                        No 3º nível, você recebe +1 em Percepção e Reflexos. A cada seis níveis, esse bônus aumenta em +1.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Resistência a Dano</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            A partir do 5º nível, graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe
                            resistência a dano 2 (todo dano que sofre é reduzido em 2). A cada três níveis, sua RD aumenta em 2, até um máximo
                            de RD 10 no 17º nível.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fúria Titânica</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 20º nível, o bônus que você recebe nos testes de ataque e rolagens de dano quando usa Fúria é dobrado. Por
                            exemplo, se gastar 8 PM, em vez de um bônus de +5, recebe um bônus de +10.
                        </Text>
                    </ScrollView>
                </View>

                {/*PODERES DE BARBARO*/}
                <Text style={estilo.categoria}>Poderes de Bárbaro</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Alma de Bronze</Text>
                    <Text style={estilo.paragrafo}>
                        Quando entra em fúria, você recebe uma quantidade de pontos de vida temporários igual a metade do seu nível + mod.
                        Força.
                    </Text>
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
                    <Text style={estilo.titulo}>Brado Assustador</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação de movimento e 1 PM para soltar um berro feroz. Todos os inimigos em alcance curto devem
                            fazer um teste de Vontade (CD Car). Um inimigo que falhe fica abalado até o fim da cena. Um inimigo que passe se
                            torna imune a esta habilidade até o fim do dia.<Text style={estilo.requisito}> Pré-requisito: treinado em
                                Intimidação.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Crítico Brutal</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Seu multiplicador de crítico com ataques corpo a corpo aumenta em +1. Por exemplo, se fizer um crítico com um machado
                            de batalha, seu multiplicador será x4, em vez de x3.<Text style={estilo.requisito}> Pré-requisito: 6º nível de
                                bárbaro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Destruidor</Text>
                    <Text style={estilo.paragrafo}>
                        Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 das
                        rolagens de dano da arma.<Text style={estilo.requisito}> Pré-requisito: For 13.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Espírito Inquebrável</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Enquanto está em fúria, você não fica inconsciente por estar com 0 ou menos pontos de vida (você ainda morre se
                            chegar em um valor negativo igual à metade de seus PV máximos).<Text style={estilo.requisito}> Pré-requisito: Alma de
                                Bronze.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Esquiva Sobrenatural</Text>
                    <Text style={estilo.paragrafo}>
                        Seus instintos ficam tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca
                        fica surpreendido.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Força Indomável</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar 1 PM para somar seu nível em um teste de Força ou Atletismo. Você pode usar esta habilidade depois
                            de rolar o dado, mas deve usá-la antes de o mestre dizer se você passou ou não.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Frenesi</Text>
                    <Text style={estilo.paragrafo}>
                        Se estiver em fúria e usar a ação atacar para fazer um ataque corpo a corpo, você pode gastar 2 PM para fazer um
                        ataque adicional.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fúria da Savana</Text>
                    <Text style={estilo.paragrafo}>
                        Seu deslocamento aumenta em +3m. Quando usa Fúria, você aplica o bônus em ataque e dano também a armas de arremesso.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Fúria Raivosa</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Se sua Fúria for terminar por você não ter atacado nem sido alvo de um efeito hostil, você pode pagar 1 PM para
                            continuar em fúria nesta rodada. Se você atacar ou for atacado na rodada seguinte, sua fúria continua normalmente.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Golpe Poderoso</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Ao acertar um ataque corpo a corpo, você pode gastar 1 PM para causar um dado de dano extra do mesmo tipo (por
                            exemplo, com um montante, causa +1d6, para um dano total de 3d6; com um machado de guerra, causa +1d12).
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
                    <Text style={estilo.titulo}>Investida Imprudente</Text>
                    <Text style={estilo.paragrafo}>
                        Quando faz uma investida, você pode aumentar sua penalidade em Defesa pela investida para –5 para receber um bônus
                        de +1d8 na rolagem de dano deste ataque.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Pele de Aço</Text>
                    <Text style={estilo.paragrafo}>
                        O bônus de Pele de Ferro aumenta para +5.<Text style={estilo.requisito}> Pré-requisitos: Pele de Ferro, 8º nível de
                            bárbaro.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Pele de Ferro</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe +2 na Defesa, mas apenas se não estiver usando armadura pesada.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sangue dos Inimigos</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Enquanto está em fúria, quando faz um acerto crítico ou reduz um inimigo a 0 PV, você recebe um bônus cumulativo de
                            +1 em testes de ataque e rolagens de dano, limitado pelo seu nível, até o fim da cena.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Superstição</Text>
                    <Text style={estilo.paragrafo}>
                        Você odeia magia, o que faz com que seja mais resistente a ela. Você recebe resistência a magia +2.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Totem Espiritual</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você soma seu bônus de Sabedoria no seu total de pontos de mana. Escolha um animal totêmico (veja o quadro). Você
                            pode lançar uma magia definida pelo animal escolhido (atributo-chave Sabedoria).<Text style={estilo.requisito}>
                                Pré-requisitos: Sab 13, 4º nível de bárbaro.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Vigor Primal</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação de movimento e 1 PM para recuperar 1d12 pontos de vida. Para cada 2 PM extras que você
                            gastar, cura +1d12 PV (pode gastar 3 PM para recuperar 2d12 PV, 5 PM para recuperar 3d12 PV e assim por diante).
                        </Text>
                    </ScrollView>
                </View>

                {/*LINHAGENS SOBRENATURAIS*/}
                <Text style={estilo.categoria}>Animais Totêmicos</Text>

                <View style={estilo.card}>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.titulo}>Sobre:</Text>
                        <Text style={estilo.paragrafo}>
                            A seguir está uma lista de animais venerados por tribos bárbaras de Arton.
                        </Text>

                        <Text style={estilo.topico}>Coruja</Text>
                        <Text style={estilo.paragrafo}>
                            A sábia coruja guia seus discípulos. Você pode lançar Orientação.
                        </Text>

                        <Text style={estilo.topico}>Corvo</Text>
                        <Text style={estilo.paragrafo}>
                            Um seguidor do corvo enxerga além do véu. Você pode lançar Visão Mística.
                        </Text>

                        <Text style={estilo.topico}>Falcão</Text>
                        <Text style={estilo.paragrafo}>
                            Sempre atento, o falcão permite que você lance Detectar Ameaças.
                        </Text>

                        <Text style={estilo.topico}>Grifo</Text>
                        <Text style={estilo.paragrafo}>
                            O mais veloz dos animais, o grifo permite que você lance Primor Atlético.
                        </Text>

                        <Text style={estilo.topico}>Lobo</Text>
                        <Text style={estilo.paragrafo}>
                            O lobo é feroz e letal. Você pode lançar Concentração de Combate.
                        </Text>

                        <Text style={estilo.topico}>Raposa</Text>
                        <Text style={estilo.paragrafo}>
                            A sagaz raposa nunca está onde se espera. Você pode lançar Imagem Espelhada.
                        </Text>

                        <Text style={estilo.topico}>Tartaruga</Text>
                        <Text style={estilo.paragrafo}>
                            A tartaruga protege os seus. Você pode lançar Armadura Arcana.
                        </Text>

                        <Text style={estilo.topico}>Urso</Text>
                        <Text style={estilo.paragrafo}>
                            O vigoroso urso permite que você lance Vitalidade Fantasma.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}