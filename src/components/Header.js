import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'

const Header = () => {
  return (
    <SafeAreaView>
        <Text style={styles.texto}>Planificador de Gastos</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header :{
        backgroundColor : '#3B82F6',

    },
    texto : {
        textAlign : 'center',
        fontSize : 30,
        color : '#FFF',
        textTransform : 'uppercase',
        paddingTop : 20,
        marginHorizontal : 20,
        fontWeight : 'bold'
    }
});

export default Header
