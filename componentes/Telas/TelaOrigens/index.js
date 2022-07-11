import React from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';

import estilo from './estilo';

export default function TelaOrigens(props) {
    return (
        <ScrollView persistentScrollbar scrollEnabled>
            <View style={estilo.container}>
                {/*CARD SOBRE AS ORIGENS*/}
                <View style={estilo.box}>
                    <Text style={estilo.titulo}>Sobre as origens:</Text>
                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Enquanto sua raça diz como você nasceu e sua classe diz o que se tornou, sua origem revela sua ocupação antes
                            de ser aventureiro. É o que você fazia até ganhar seu primeiro nível em uma classe.
                        </Text>
                        <Text style={estilo.paragrafo}>
                            Cada origem apresentada a seguir é intencionalmente vaga e breve, apenas uma ideia por onde começar. Você pode
                            usá-la como está, para jogar rapidamente, ou então colorir com quantos detalhes quiser!
                        </Text>
                    </ScrollView>
                </View>

                {/*CARD ITENS DE ORIGEM*/}
                <View style={estilo.box}>
                    <Text style={estilo.titulo}>Itens de Origem:</Text>
                    <Text style={estilo.paragrafo}>
                        Você começa com todos os itens descritos na linha “Itens” de sua origem sem pagar por eles.
                    </Text>
                </View>

                {/*CARD BENEFICIOS DE ORIGEM*/}
                <View style={estilo.box}>
                    <Text style={estilo.titulo}>Benefícios de Origem:</Text>

                    <ScrollView persistentScrollbar nestedScrollEnabled style={{ paddingRight: 7 }}>
                        <Text style={estilo.paragrafo}>
                            Cada origem possui uma lista de benefícios que inclui perícias e poderes gerais, descritos no Capítulo 2. Você
                            escolhe dois benefícios da lista — duas perícias, dois poderes ou uma perícia e um poder. Se preferir regras mais
                            rápidas, escolha apenas perícias.
                        </Text>

                        <Text style={estilo.topico}>Perícias</Text>
                        <Text style={estilo.paragrafo}>
                            Atuar como batedor aguçou os sentidos do meio-elfo Gorack Misuk. Uma infância na estrada tornou Aivy Karter capaz
                            de cuidar de si mesma nos ermos. Fugir da milícia pelas ruas de Malpetrim fez de Sima, a Astuta, uma pessoa furtiva.
                            Você se torna treinado na perícia escolhida, representando aprendizado adquirido em sua vida pregressa.
                        </Text>

                        <Text style={estilo.topico}>Poderes</Text>
                        <Text style={estilo.paragrafo}>
                            A vida de apresentações em Valkaria fez da barda Kiim Nomi uma estrela nata. Trabalhar em navios durante a juventude
                            garantiu ao bucaneiro Don Doido contatos com quem conseguir transporte marítimo. Anos servindo no exército de Deheon
                            ensinaram o paladino Rhogar a manejar sua espada. Você recebe o poder escolhido, mas ainda precisa cumprir seus
                            pré-requisitos.
                        </Text>

                        <Text style={estilo.topico}>Poder único</Text>
                        <Text style={estilo.paragrafo}>
                            Cada origem tem um poder exclusivo, descrito após os outros benefícios. Ele pode ser escolhido como um de seus dois
                            benefícios. Apenas personagens com essa origem podem escolher esse poder. O humano clérigo Pivas, que cresceu isolado
                            nas florestas de Tollon, escolhe a origem eremita. Ele começa com os seguintes itens: uma barraca e um kit de
                            medicamentos. Pivas então pode escolher dois benefícios: ele escolhe a perícia Religião e o poder único Busca Interior.
                        </Text>
                    </ScrollView>
                </View>

                {/*LISTAGENS DAS ORIGENS*/}
                <Text style={estilo.tituloracas}>Listagem das Origens</Text>
                <Text style={estilo.descricao}>Clique para checar cada origem</Text>

                {/*BOTOES COM CADA ORIGEM*/}
                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Acólito') }}>
                        <Text style={estilo.texto}>Acólito</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Amigo dos Animais') }}>
                        <Text style={estilo.texto}>Amigo dos Animais</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Amnésico') }}>
                        <Text style={estilo.texto}>Amnésico</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Aristocrata') }}>
                        <Text style={estilo.texto}>Aristocrata</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Artesão') }}>
                        <Text style={estilo.texto}>Artesão</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Artista') }}>
                        <Text style={estilo.texto}>Artista</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Assis. De Lab.') }}>
                        <Text style={estilo.texto}>Assistente de Laboratório</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Batedor') }}>
                        <Text style={estilo.texto}>Batedor</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Capanga') }}>
                        <Text style={estilo.texto}>Capanga</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Charlatão') }}>
                        <Text style={estilo.texto}>Charlatão</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Circense') }}>
                        <Text style={estilo.texto}>Circense</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Criminoso') }}>
                        <Text style={estilo.texto}>Criminoso</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Curandeiro') }}>
                        <Text style={estilo.texto}>Curandeiro</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Eremita') }}>
                        <Text style={estilo.texto}>Eremita</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Escravo') }}>
                        <Text style={estilo.texto}>Escravo</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Estudioso') }}>
                        <Text style={estilo.texto}>Estudioso</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Fazendeiro') }}>
                        <Text style={estilo.texto}>Fazendeiro</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Forasteiro') }}>
                        <Text style={estilo.texto}>Forasteiro</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Gladiador') }}>
                        <Text style={estilo.texto}>Gladiador</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Guarda') }}>
                        <Text style={estilo.texto}>Guarda</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Herdeiro') }}>
                        <Text style={estilo.texto}>Herdeiro</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Herói Camponês') }}>
                        <Text style={estilo.texto}>Herói Camponês</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Marujo') }}>
                        <Text style={estilo.texto}>Marujo</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Mateiro') }}>
                        <Text style={estilo.texto}>Mateiro</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Membro de Guilda') }}>
                        <Text style={estilo.texto}>Membro de Guilda</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Mercador') }}>
                        <Text style={estilo.texto}>Mercador</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Minerador') }}>
                        <Text style={estilo.texto}>Minerador</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Nômade') }}>
                        <Text style={estilo.texto}>Nômade</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Pivete') }}>
                        <Text style={estilo.texto}>Pivete</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Refugiado') }}>
                        <Text style={estilo.texto}>Refugiado</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Seguidor') }}>
                        <Text style={estilo.texto}>Seguidor</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Selvagem') }}>
                        <Text style={estilo.texto}>Selvagem</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Soldado') }}>
                        <Text style={estilo.texto}>Soldado</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Taverneiro') }}>
                        <Text style={estilo.texto}>Taverneiro</Text>
                    </Pressable>
                </View>

                <View style={estilo.linha}>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Trabalhador') }}>
                        <Text style={estilo.texto}>Trabalhador</Text>
                    </Pressable>
                    <Pressable style={estilo.botao} onPress={() => { props.navigation.navigate('Sua Própria Origem') }}>
                        <Text style={estilo.texto}>Sua Própria Origem</Text>
                    </Pressable>
                </View>

            </View>
        </ScrollView>
    )
}