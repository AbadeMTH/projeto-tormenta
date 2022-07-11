import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaMinerador() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>
                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre os Mineradores:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Ser aventureiro é a profissão mais perigosa de todas; ser mineiro, talvez a segunda mais perigosa. Você mergulhou nas
                            profundezas da terra atrás de metais necessários à civilização ou riquezas em gemas preciosas. Enquanto humanos e
                            outras raças consideram essa vida um pesadelo, quase todos os anões acreditam ser a mais feliz das carreiras. A
                            escuridão e o sufocamento dos subterrâneos talvez tenham sido assustadores, mas trouxeram a você bens materiais
                            valiosos, bem como informação profunda (sem trocadilhos) sobre túneis e masmorras.
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Itens</Text>
                    <Text style={estilo.paragrafo}>
                        Gemas preciosas no valor de T$ 100, picareta.
                    </Text>
                </View>

                {/*CARD BENEFICIOS*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Benefícios</Text>
                    <Text style={estilo.paragrafo}>
                        Atletismo, Fortitude, Ofício (minerador) (perícias); Ataque Poderoso, Escavador, Sentidos Aguçados (poderes).
                    </Text>
                </View>

                {/*CARD PODER*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Escavador (Poder)</Text>
                    <Text style={estilo.paragrafo}>
                        Você se torna proficiente em picareta e não sofre penalidade em deslocamento por terreno difícil em masmorras e
                        subterrâneos.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}