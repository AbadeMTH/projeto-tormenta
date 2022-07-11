import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linha: {
        flexDirection: 'row',
        margin: 10,
    },
    botao: {
        backgroundColor: '#7D3030',
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        minHeight: 50,
        maxHeight: 100,
    },
    texto: {
        fontSize: 22,
        fontFamily: 'principal',
        color: '#fff',
        textAlign: 'center',
    },
    textoMenor: {
        fontSize: 16,
        fontFamily: 'principal',
        color: '#fff',
        textAlign: 'center',
    },
    titulo: {
        fontSize: 18,
        fontFamily: 'principal',
        textAlign: 'center',
        color: '#fff',
    },
    card: {
        backgroundColor: '#7D3030',
        borderRadius: 15,
        justifyContent: 'center',
        width: '85%',
        padding: 10,
        marginBottom: 30,
    },
})

export default estilo;