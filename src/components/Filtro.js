import React, { useEffect } from 'react'
import { Text, View, StyleSheet} from "react-native"
import { Picker } from "@react-native-picker/picker";

import globalStyles from '../styles'

const Filtro = ( {filtro, setFiltro, gastos, setGastosFiltrados} ) => {

    useEffect( () => {
        if (filtro === '') {
            setGastosFiltrados([])
        }else{
           const GastosFiltrados = gastos.filter(gastosState => gastosState.categoria === filtro)
           setGastosFiltrados(GastosFiltrados)
        }
    }, [filtro] )

  return (
    <View style={styles.contenedor} >
          <Text style={styles.label} >Filtrar Gasto</Text>

          <Picker selectedValue={filtro} onValueChange={ (valor) => {
            setFiltro(valor)
          } }>
              <Picker.Item label=' -- Seleccione -- ' />
              <Picker.Item label='Ahorro' value='ahorro' />
              <Picker.Item label='Alimentación' value='alimentacion' />
              <Picker.Item label='Hogar' value='hogar' />
              <Picker.Item label='Gastos Varios' value='gastos' />
              <Picker.Item label='Entretenimiento' value='entretenimiento' />
              <Picker.Item label='Salud' value='salud' />
              <Picker.Item label='Suscripciones' value='suscripciones' />
          </Picker>
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
