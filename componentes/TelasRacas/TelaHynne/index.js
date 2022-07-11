import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import Hynne from '../../../assets/imagensRacas/Hynnes.png';

import estilo from '../estilo';

export default function TelaHynne() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE OS HYNNES*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Hynnes:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Também conhecidos como halflings ou “pequeninos”, os hynne são apreciadores de boa comida e casas aconchegantes,
                            raras vezes escolhendo sair pelo mundo em aventuras perigosas. Quando decidem fazê-lo, contudo, recorrem à agilidade
                            e encanto naturais para ludibriar os inimigos — mais de um taverneiro ou miliciano deixou-se enganar por suas mãos
                            ligeiras e sorrisos inocentes. Foram recentemente forçados a fugir de seu antigo reino natal, sendo então acolhidos
                            pelas Repúblicas Livres de Sambúrdia, onde cultivam ervas e especiarias valiosas. Para espanto de todos, também se
                            tornaram astutos mercadores, muitos ascendendo a príncipes mercantes
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM HYNNE*/}
                <Image style={estilo.img} source={Hynne} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Destreza +4, Carisma +2, Força –2</Text>

                        <Text style={estilo.topico}>Arremessador</Text>
                        <Text style={estilo.paragrafo}>
                            Quando faz um ataque à distância com uma funda ou uma arma de arremesso, seu dano aumenta em um passo.
                        </Text>

                        <Text style={estilo.topico}>Pequeno e Rechonchudo</Text>
                        <Text style={estilo.paragrafo}>
                            Seu tamanho é Pequeno (veja a página 106) e seu deslocamento é 6m. Você recebe +2 em Enganação e usa o modificador
                            de Destreza para Atletismo (em vez de Força).
                        </Text>

                        <Text style={estilo.topico}>Sorte Salvadora</Text>
                        <Text style={estilo.paragrafo}>
                            Quando faz um teste de resistência, você pode gastar 1 PM para rolar este teste novamente.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}