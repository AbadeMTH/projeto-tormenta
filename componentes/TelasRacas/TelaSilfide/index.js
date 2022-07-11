import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import Silfide from '../../../assets/imagensRacas/Silfides.png';

import estilo from '../estilo';

export default function TelaSilfide() {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>

                {/*CARD SOBRE AS SILFIDES*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre as Sílfides:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            As mais numerosas fadas em Arton são estas criaturinhas (alguns diriam “pestes”) esvoaçantes, com suas delicadas asas
                            de inseto e grandes olhos escuros. Curiosas e brincalhonas, parecem sempre à procura de alguma diversão, levando todos
                            a subestimá-las quando o assunto exige seriedade. É verdade que seu entusiasmo e inocência podem causar problemas.
                            Também é verdade que gostam de usar magias e ilusões para pregar peças. Pensando bem, ninguém até hoje encontrou um
                            bom motivo para aceitar uma sílfide em um grupo de aventureiros...
                        </Text>
                    </ScrollView>
                </View>

                {/*IMAGEM SILFIDE*/}
                <Image style={estilo.img} source={Silfide} />

                {/*HABILIDADES DE RACA*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Habilidades da raça:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.topico}>Carisma +4, Destreza +2, Força –4</Text>

                        <Text style={estilo.topico}>Asas de Borboleta</Text>
                        <Text style={estilo.paragrafo}>
                            Seu tamanho é Minúsculo. Você pode pairar a 1,5m do chão com deslocamento 9m. Isso permite que você ignore terreno
                            difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Você pode gastar 1 PM por rodada para
                            voar com deslocamento de 12m.
                        </Text>

                        <Text style={estilo.topico}>Espírito da Natureza</Text>
                        <Text style={estilo.paragrafo}>
                            Você é uma criatura do tipo espírito, recebe visão na penumbra e pode falar com animais livremente.
                        </Text>

                        <Text style={estilo.topico}>Magias das Fadas</Text>
                        <Text style={estilo.paragrafo}>
                            Você pode lançar duas das magias a seguir (todas atributo-chave Carisma): Criar Ilusão, Enfeitiçar, Luz (como uma
                            magia arcana) e Sono. Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM.
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    )
}