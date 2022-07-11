import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    linha: {
        flexDirection: 'row',
        margin: 8,
    },
    botao: {
        backgroundColor: '#7D3030',
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        minHeight: 50,
        maxHeight: 100,
    },
    texto: {
        fontSize: 18,
        fontFamily: 'principal',
        color: '#fff',
        textAlign: 'center',
    },
    box: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15,
        backgroundColor: '#7D3030',
        padding: 10,
        marginBottom: 15,
        maxHeight: 160,
        minHeight: 80,
        width: 320,
    },
    titulo:{
        fontSize: 19,
        color: '#fff',
        fontFamily: 'principal',
    },
    paragrafo: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#fff',
        fontFamily: 'paragrafos',
    },
    topico: {
        fontSize: 15,
        color: 'yellow',
        fontFamily: 'principal',
        marginTop: 10,
    },
    tituloracas: {
        fontSize: 26,
        fontFamily: 'principal',
        color: 'black',
        marginTop: 10,
        textAlign: 'center',
    },
    descricao:{
        fontSize: 10,
        marginBottom: 10,
        fontFamily: 'principal',
        textAlign: 'center',
    },
})  

export default estilo;