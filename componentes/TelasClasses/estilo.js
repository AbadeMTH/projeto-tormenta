import { StyleSheet } from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    card: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15,
        backgroundColor: '#7D3030',
        padding: 10,
        marginBottom: 15,
        minHeight: 80,
        maxHeight: 160,
        width: 320,
    },
    img: {
        width: 320,
        height: 320,
        margin: 5,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'black',
        marginBottom: 15,
    },
    titulo: {
        fontSize: 19,
        color: '#fff',
        fontFamily: 'principal',
    },
    paragrafo: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#fff',
        fontFamily: 'paragrafos',
        letterSpacing: 1,
    },
    topico: {
        fontSize: 15,
        color: 'yellow',
        fontFamily: 'principal',
        marginTop: 10,
    },
    categoria: {
        fontSize: 26,
        fontFamily: 'principal',
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
    descricao: {
        fontSize: 10,
        marginBottom: 10,
        fontFamily: 'principal',
        textAlign: 'center'
    },
    requisito: {
        fontSize: 12,
        color: 'yellow',
        fontFamily: 'principal',
        marginTop: 10,
    },
    cardtabela: {

        width: 320,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'black',
        marginBottom: 20,
    },
    linhaCinza: {
        backgroundColor: '#d6cfca',
        flexDirection: 'row',
        padding: 5,
    },
    linhaCinzaTopo: {
        backgroundColor: '#d6cfca',
        flexDirection: 'row',
        borderWidth: 0,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        padding: 5,
    },
    linhaCinzaFinal: {
        backgroundColor: '#d6cfca',
        flexDirection: 'row',
        borderWidth: 0,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        padding: 5,
    },
    linhaBranca: {
        backgroundColor: '#f5f5f4',
        flexDirection: 'row',
        padding: 5,
    },
    paragrafoPreto: {
        fontSize: 11,
        textAlign: 'justify',
        color: 'black',
        fontFamily: 'paragrafos',
        letterSpacing: 1,
        maxWidth: 240,
    },
    paragrafoPretoNivel: {
        fontSize: 11,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'paragrafos',
        letterSpacing: 1,
        width: '20%'
    },
    paragrafoPretoNivelTitulo: {
        fontSize: 12,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'principal',
        letterSpacing: 1,
        width: '18%',
        padding: 5,
    },
    paragrafoPretoHabilidadeTitulo: {
        fontSize: 12,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'principal',
        letterSpacing: 1,
        padding: 5,
    },
})

export default estilo;