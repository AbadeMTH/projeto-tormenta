import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: '85%',
        marginBottom: 50,
        padding: 10,
    },
    img: {
        width: 250,
        height: 150,
        resizeMode: 'contain',
    },
    descricao: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'paragrafos',
    },
    botao: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: '45%',
    },
    textobotao: {
        fontSize: 15,
        fontFamily: 'principal',
        color: '#fff',
        textAlign: 'center'
    },
})

export default estilo;