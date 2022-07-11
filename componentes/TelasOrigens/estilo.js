import { StyleSheet } from 'react-native';

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
        maxHeight: 160,
        minHeight: 80,
        width: 320,
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
})

export default estilo;