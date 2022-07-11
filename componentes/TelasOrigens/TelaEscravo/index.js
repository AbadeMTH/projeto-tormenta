import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaEscravo() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Escravos:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Ainda que escravidão seja ilegal no Reinado, em Arton a liberdade não é para todos. De minotauros odiosos no Império
                            de Tauron aos cruéis mestres subterrâneos de Trollkyrka, várias culturas praticam a escravidão. Você já nasceu
                            escravo, ou fez parte de um povo derrotado na guerra, ou apenas foi capturado em alguma rua escura para depois
                            despertar na jaula, em algum mercado clandestino? Encontrou uma chance de escapar, tornando-se agora um escravo
                            foragido? Recebeu a liberdade como recompensa por realizar um grande favor a seu dono? Foi resgatado por aventureiros
                            que agora se tornaram sua nova família?
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Algemas, uma ferramenta pesada (mesmas estatísticas de uma maça).
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Atletismo, Fortitude, Furtividade (perícias); Desejo de Liberdade, Vitalidade (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Desejo de Liberdade (Poder)</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Ninguém voltará a torná-lo um escravo! Você recebe +5 em testes contra efeitos que possam aprisioná-lo, como a
                            manobra agarrar ou a magia Imobilizar.
                        </Text>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}