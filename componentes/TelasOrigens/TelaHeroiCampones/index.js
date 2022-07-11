import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaHeroiCampones() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Heróis Camponeses:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Quando o povoado foi atacado por goblins, você empunhou o forcado para expulsá-los. Quando o estábulo pegou fogo,
                            você se arriscou para salvar todos os animais. Quando todos temiam a mansão assombrada na colina, você encontrou a
                            carta de amor perdida que trouxe descanso à alma torturada. Você era o campeão local, amado pelo povo, mas também
                            destinado a feitos maiores. Houve comoção quando você partiu para uma vida de aventuras, mas ninguém deixou de orar
                            por seu sucesso. Talvez você até tenha sido presenteado com alguma arma ou item há tempos guardado no povoado.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Kit de ofício ou uma arma simples, traje de plebeu.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Adestramento, Ofício (perícias); Amigo dos Plebeus, Sortudo, Surto Heroico, Torcida (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Amigo dos Plebeus (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Você consegue hospedagem gratuita, para você e seus aliados, em famílias ou comunidades plebeias.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}