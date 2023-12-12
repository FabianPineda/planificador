import React from 'react'
import { Text, View, StyleSheet} from "react-native"
import globalStyles from '../styles'

const Filtro = () => {
  return (
    <View style={styles.contenedor} >
        <Text style={styles.label} >Filtrar Gasto</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor : {
        ...globalStyles.contenedor,
        transform : [{translateY : 0}],
        marginTop : 50
    },
    label : {
        fontSize : 22,
        fontWeight : '900',
        color : '#64748B'
    }
})

export default Filtro
