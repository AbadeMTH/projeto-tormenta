import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import estilo from '../estilo';

export default function TelaSuaPropriaOrigem() {
    return (
        <ScrollView persistentScrollbar>
            <View style={estilo.container}>

                {/*CARD SOBRE*/}
                <View style={estilo.card}>
                    <Text style={estilo.titulo}>Sobre Sua Própria Origem:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Uma origem é algo que você pode mudar, negociando com o mestre, para ajustar melhor à história que você imaginou. Por
                            exemplo, Kurt Snyder estudou como médico de Salistick — mais especificamente, como alienista. A origem Curandeiro
                            oferece as perícias Cura e Vontade. Nesse caso, o jogador de Kurt poderia trocar uma dessas por Intuição. Outro
                            exemplo: o suraggel paladino Agatodemo, um herói camponês, protegeu sua aldeia contra o ataque de hobgoblins que,
                            ao fugir, deixaram cair uma arma exótica. Antes de partir da aldeia, Agatodemo treinou com essa arma. Assim, você
                            poderia trocar seus itens iniciais pela própria arma, e pegar o poder Proficiência para saber usá-la. Até mesmo uma
                            nova habilidade pode ser inventada, usando as outras como referência e inspiração. Você não precisa ficar preso
                            apenas a benefícios mecânicos, como “ganhar +2 em alguma coisa”. Pense em coisas que ajudem seu grupo ou tragam mais
                            sabor à interpretação, ou ainda algo relacionado à própria campanha — ser parente de algum NPC importante, por
                            exemplo. Ainda, você pode inventar uma origem totalmente nova. Talvez Kaine, o Coletor, seja um guerreiro esqueleto
                            conjurado pelo próprio necromante Vladislav, enquanto Ira Dodado é um clérigo de Nimb que começou sua carreira após
                            matar um dragão com uma panelada, e Kadi O’ Blaine é um arcanista vindo de Magika, mundo da deusa Wynna. Lembre-se:
                            em Arton, nenhum herói é estranho demais. Aproveite a origem para transpor para o jogo ideias que você tenha e não
                            consiga representar com raça e classe. Em outras palavras, ela é o espaço para o jogador criar. Só não vale apelar!
                            “Ah, eu era seguidor de um arcanista de 18º nível, então ele morreu engasgado com um pretzel e eu fiquei com as
                            coisas mágicas dele, tudo bem?”.
                        </Text>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}