import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';

import Cacador from '../../../assets/imagensClasses/Cacador.png';
import Tabela from '../../../assets/imagensClasses/TabelaCacador.png';

import estilo from '../estilo';

export default function TelaCacador() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE OS CAÇADOR*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Caçadores:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            O caçador é mais que um mateiro ou rastreador. É um especialista em sobrevivência nos terrenos mais selvagens e
                            inóspitos, capaz de obter alimento e achar abrigo em qualquer lugar. É alguém que estuda, persegue e mata sua presa
                            com paciência e astúcia. Mesmo que não pareça um sábio tradicional, o caçador é uma verdadeira enciclopédia de
                            conhecimentos sobre os ermos. Sabe diferenciar veneno de comida, sabe evitar o território de animais mortíferos ou
                            emboscá-los, sabe manter um grupo inteiro vivo longe da civilização.
                        </Text>

                        <Text style={estilo.topico}>Nomes de Caçadores Famosos</Text>
                        <Text style={estilo.paragrafo}>
                            Crânio Negro, Ellisa Thorn, Enver, Fren, Matteo, Maryx Corta-Sangue.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM DO CAÇADOR*/}
                <Image style={estilo.img} source={Cacador} />

                {/*CARD CARACTERISTICAS DE CLASSE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Características de Classe:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Pontos de Vida</Text>
                        <Text style={estilo.paragrafo}>
                            Um caçador começa com 16 pontos de vida (+ modificador de Constituição) e ganha 4 PV (+ mod. Con) por nível.
                        </Text>

                        <Text style={estilo.topico}>Pontos de Mana</Text>
                        <Text style={estilo.paragrafo}>
                            4 PM por nível.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Luta (For) ou Pontaria (Des), Sobrevivência (Sab), mais 6 a sua escolha entre Adestramento (Car), Atletismo (For),
                            Cavalgar (Des), Cura (Sab), Fortitude (Con), Furtividade (Des), Iniciativa (Des), Investigação (Int), Luta (For),
                            Ofício (Int), Percepção (Sab), Pontaria (Des) e Reflexos (Des).
                        </Text>

                        <Text style={estilo.topico}>Proficiências</Text>
                        <Text style={estilo.paragrafo}>
                            Armas marciais e escudos.
                        </Text>
                    </ScrollView>
                </View>

                {/*TABELA O CAÇADOR*/}
                <Text style={estilo.categoria}>Tabela O Caçador</Text>
                <View style={estilo.cardtabela}>
                    <View style={estilo.linhaCinzaTopo}>
                        <Text style={estilo.paragrafoPretoNivelTitulo}>Nível</Text>
                        <Text style={estilo.paragrafoPretoHabilidadeTitulo}>Habilidades de classe</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>1°</Text>
                        <Text style={estilo.paragrafoPreto}>Marca da presa +1d4, rastreador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>2°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>3°</Text>
                        <Text style={estilo.paragrafoPreto}>Explorador, poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>4°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>5°</Text>
                        <Text style={estilo.paragrafoPreto}>Caminho do explorador, marca da presa +1d8, poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>6°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>7°</Text>
                        <Text style={estilo.paragrafoPreto}>Explorador, poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>8°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>9°</Text>
                        <Text style={estilo.paragrafoPreto}>Marca da presa +1d12, poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>10°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>11°</Text>
                        <Text style={estilo.paragrafoPreto}>Explorador, poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>12°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>13°</Text>
                        <Text style={estilo.paragrafoPreto}>Marca da presa +2d8, poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>14°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>15°</Text>
                        <Text style={estilo.paragrafoPreto}>Explorador, poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>16°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>17°</Text>
                        <Text style={estilo.paragrafoPreto}>Marca da presa +2d10, poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaCinza}>
                        <Text style={estilo.paragrafoPretoNivel}>18°</Text>
                        <Text style={estilo.paragrafoPreto}>Poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaBranca}>
                        <Text style={estilo.paragrafoPretoNivel}>19°</Text>
                        <Text style={estilo.paragrafoPreto}>Explorador, poder de caçador</Text>
                    </View>
                    <View style={estilo.linhaCinzaFinal}>
                        <Text style={estilo.paragrafoPretoNivel}>20°</Text>
                        <Text style={estilo.paragrafoPreto}>Mestre caçador, poder de caçador</Text>
                    </View>
                </View>

                {/*HABILIDADES DE CLASSE*/}
                <Text style={estilo.categoria}>Habilidades de Classe</Text>
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Marca da Presa</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação de movimento e 1 PM para analisar uma criatura em alcance curto. Até o fim da cena, você
                            recebe +1d4 nas rolagens de dano contra essa criatura. A cada quatro níveis, você pode gastar +1 PM para aumentar o
                            bônus de dano (veja a tabela da classe).
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
                    <Text style={estilo.titulo}>Explorador</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 3º nível, escolha um tipo de terreno entre aquático, ártico, colina, deserto, floresta, montanha, pântano,
                            planície, subterrâneo ou urbano. A partir do 11º nível, você também pode escolher área de Tormenta. Quando
                            estiver no tipo de terreno escolhido, você soma seu bônus de Sabedoria (mínimo +1) na Defesa e nos testes de
                            Acrobacia, Atletismo, Furtividade, Percepção e Sobrevivência. A cada quatro níveis, escolha outro tipo de terreno
                            para receber o bônus ou aumente o bônus em um tipo de terreno já escolhido em +2.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Caminho do Explorador</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 5º nível, você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastrear
                            você aumenta em +10. Esta habilidade só funciona em terrenos nos quais você tenha a habilidade Explorador.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Mestre Caçador</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            No 20º nível, você pode usar a habilidade Marca da Presa como uma ação livre. Além disso, quando usa a
                            habilidade, pode gastar +5 PM para aumentar sua margem de ameaça contra a criatura em +2. Se você reduz uma
                            criatura contra a qual usou Marca da Presa a 0 pontos de vida, recupera 5 PM.
                        </Text>
                    </ScrollView>
                </View>

                {/*PODERES DE CAÇADOR*/}
                <Text style={estilo.categoria}>Poderes de Caçador</Text>
                <Text style={estilo.descricao}>No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir.</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ambidestria</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Se estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação atacar, você pode fazer dois ataques,
                            um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.
                            <Text style={estilo.requisito}> Pré-requisito: Des 15.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Armadilha: Arataca</Text>
                    <Text style={estilo.paragrafo}>
                        A vítima sofre 2d6 pontos de dano de perfuração e fica agarrada. Uma criatura agarrada pode escapar com uma ação
                        padrão e um teste de Acrobacia ou Atletismo (CD Sab).
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Armadilha: Espinhos</Text>
                    <Text style={estilo.paragrafo}>
                        A vítima sofre 6d6 pontos de dano de perfuração. Um teste de Reflexos (CD Sab) reduz o dano à metade.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Armadilha: Laço</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            A vítima deve fazer um teste de Reflexos (CD Sab). Se passar, fica caída. Se falhar, fica agarrada. Uma criatura
                            agarrada pode se soltar com uma ação padrão e um teste de Força ou Acrobacia (CD Sab).
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Armadilha: Rede</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Todas as criaturas na área devem fazer um teste de Reflexos (CD Sab) para não ficarem enredadas. Uma vítima pode
                            se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo (CD 25). Além disso, a área ocupada pela
                            rede é considerada terreno difícil.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Arqueiro</Text>
                    <Text style={estilo.paragrafo}>
                        Se estiver usando uma arma de ataque à distância, você soma seu bônus de Sabedoria nas rolagens de dano (limitado
                        pelo seu nível).<Text style={estilo.requisito}> Pré-requisito: Sab 13.</Text>
                    </Text>
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
                    <Text style={estilo.titulo}>Bote</Text>
                    <Text style={estilo.paragrafo}>
                        Se estiver empunhando duas armas e fizer uma investida, você pode pagar 1 PM para fazer um ataque adicional com
                        sua arma secundária.<Text style={estilo.requisito}> Pré-requisito: Ambidestria, 6º nível de caçador.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Camuflagem</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode gastar 2 PM para usar a perícia Furtividade para se esconder mesmo sem cobertura disponível.
                        <Text style={estilo.requisito}> Pré-requisito: 6º nível de caçador.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Chuva de Lâminas</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa Ambidestria, você pode pagar 2 PM para fazer um ataque adicional com sua arma primária.
                        <Text style={estilo.requisito}> Pré-requisito: Des 19, Ambidestria, 12º nível de caçador.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Companheiro Animal</Text>
                    <Text style={estilo.paragrafo}>
                        Você recebe um companheiro animal para andar ao seu lado e o ajudar.<Text style={estilo.requisito}> Pré-requisito: treinado em
                            Adestramento.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Elo com Natureza</Text>
                    <Text style={estilo.paragrafo}>
                        Você soma seu bônus de Sabedoria em seu total de pontos de mana e aprende e pode lançar Caminhos da Natureza
                        (atributo-chave Sabedoria).<Text style={estilo.requisito}> Pré-requisito: Sab 13, 3º nível de caçador.</Text>
                    </Text>
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
                    <Text style={estilo.titulo}>Empatia Selvagem</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento
                        com animais para mudar atitude e pedir favores.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Escaramuça</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando se move 6m ou mais, você recebe +2 em Defesa e Reflexos e +1d8 nas rolagens de dano de ataques corpo a corpo e
                            à distância em alcance curto até o início de seu próximo turno. Você não pode usar esta habilidade se estiver
                            vestindo armadura pesada.<Text style={estilo.requisito}> Pré-requisito: Des 15, 6º nível de caçador.</Text>
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Escaramuça Superior</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa Escaramuça, seus bônus aumentam para +5 em Defesa e Reflexos e +1d12 em rolagens de dano.
                        <Text style={estilo.requisito}> Pré-requisito: Escaramuça, 12º nível de caçador.</Text>
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Espreitar</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando usa a habilidade Marca da Presa, você recebe um bônus de +1 em testes de perícia contra a criatura
                            marcada. Esse bônus aumenta em +1 para cada PM adicional gasto na habilidade e também dobra com a habilidade
                            Inimigo.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ervas Curativas</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação completa e uma quantidade de PM a sua escolha (limitado pelo seu bônus de Sabedoria)
                            para aplicar ervas que curam ou desintoxicam em você ou num aliado adjacente. Para cada PM que gastar, cura 2d6
                            PV ou remove uma condição envenenado afetando o alvo
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
                    <Text style={estilo.titulo}>Inimigo de (Criatura)</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Escolha um tipo de criatura entre animal, construto, espírito, monstro ou morto-vivo, ou duas raças humanoides
                            (por exemplo, orcs e gnolls, ou elfos e qareen). Quando você usa a habilidade Marca da Presa contra uma criatura
                            do tipo ou da raça escolhida, dobra os dados de bônus no dano. O nome desta habilidade varia de acordo com o tipo
                            de criatura escolhida (Inimigo de Monstros, Inimigo de Mortos-Vivos etc.). Você pode escolher este poder outras
                            vezes para inimigos diferentes.
                        </Text>
                    </ScrollView>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Olho do Falcão</Text>
                    <Text style={estilo.paragrafo}>
                        Você pode usar a habilidade Marca da Presa em criaturas em alcance longo.
                    </Text>
                </View>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Ponto Fraco</Text>
                    <Text style={estilo.paragrafo}>
                        Quando usa a habilidade Marca da Presa, seus ataques contra a criatura marcada recebem +2 na margem de ameaça. Esse
                        bônus dobra com a habilidade Inimigo.
                    </Text>
                </View>

                {/*ARMADILHAS*/}
                <Text style={estilo.categoria}>Armadilhas</Text>

                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Alguns poderes do caçador são Armadilhas. Esses poderes compartilham as seguintes regras.
                        </Text>

                        <Text style={estilo.requisito}>
                            Preparar uma armadilha gasta uma ação completa e 3 PM.
                        </Text>
                        <Text style={estilo.requisito}>
                            Uma armadilha afeta uma área de 3m de lado adjacente a você e é acionada pela primeira criatura que entrar na área.
                        </Text>
                        <Text style={estilo.requisito}>
                            Uma criatura que o veja preparando a armadilha saberá que ela está lá. Uma criatura que não o veja preparando a
                            armadilha pode encontrá-la se gastar uma ação padrão procurando e passar em um teste de Investigação (CD Sab).
                        </Text>

                        <Text style={estilo.paragrafo}>
                            Você não precisa de nenhum item para criar a armadilha, pois usa materiais naturais, como galhos e cipós. Porém,
                            precisa estar em um ambiente propício, como uma floresta, um beco repleto de entulhos etc.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}