import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import Medusa from '../../../assets/imagensRacas/Medusas.png';

import estilo from '../estilo';

export default function TelaMedusa() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE AS MEDUSAS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre as Medusas:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Ainda que estas criaturas reclusas sejam famosas por transformar suas vítimas em pedra com um simples olhar,
                            apenas as mais antigas e poderosas o fazem. Jovens medusas por vezes rejeitam a solidão e crueldade racial,
                            aventurando-se no Reinado, até mesmo fazendo amigos ou integrando equipes de heróis. Conseguem se fazer passar por
                            mulheres humanas, quando escondem o cabelo feito de serpentes. O único povo que não teme medusas são os anões, que
                            as consideram belas musas.
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM MEDUSA*/}
                <Image style={estilo.img} source={Medusa} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Destreza +4, Carisma +2</Text>

                        <Text style={estilo.topico}>Cria de Megalokk</Text>
                        <Text style={estilo.paragrafo}>
                            Você é uma criatura do tipo monstro e recebe visão no escuro.
                        </Text>

                        <Text style={estilo.topico}>Natureza Venenosa</Text>
                        <Text style={estilo.paragrafo}>
                            Você recebe resistência a veneno 5 e pode gastar uma ação de movimento e 1 PM para envenenar uma arma que esteja
                            empunhando. A arma causa +1d12 pontos de dano de veneno. O veneno dura até você acertar um ataque ou até o fim da
                            cena (o que acontecer primeiro).
                        </Text>

                        <Text style={estilo.topico}>Olhar Atordoante</Text>
                        <Text style={estilo.paragrafo}>
                            Você pode gastar uma ação de movimento e 1 PM para forçar uma criatura em alcance curto a fazer um teste de Fortitude
                            (CD Car). Se a criatura falhar, fica atordoada por 1 rodada. Se passar, fica imune a esta habilidade por um dia.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}