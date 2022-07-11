import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaForasteiro() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Forasteiros:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Você veio de longe. Sua cultura nativa é quase ou totalmente desconhecida no Reinado, tornando-o uma figura exótica,
                            de hábitos estranhos. Você pertence a uma tribo perdida nas Montanhas Sanguinárias? Nasceu em uma bela cidade de
                            cúpulas douradas no Deserto da Perdição? Navegou em navios audazes desde os Reinos de Moreania? Talvez você até tenha
                            chegado de outro mundo, através de algum portal mágico. Será que conseguiu ajustar-se a este Reinado, agora
                            chamando-o de lar? Ou procura até hoje o caminho de volta para casa?
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Um diário de viagens, um traje de viagem estrangeiro, um instrumento musical exótico.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Cavalgar, Pilotagem, Sobrevivência (perícias); Cultura Exótica, Lobo Solitário (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Cultura Exótica (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Por sua diferente visão de mundo, você encontra soluções inesperadas. Você pode gastar 1 PM para fazer um teste de
                        perícia somente treinada, mesmo sem ser treinado na perícia.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}