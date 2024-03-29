import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import globalStyles from '../styles';

const NuevoPresupuesto = ({handleNuevoPresupuesto, presupuesto, setPresupuesto}) => {

  return (
    <View style={styles.contenedor}>
        <Text style={styles.label}>Definir Presupuesto</Text>
        <TextInput 
            keyboardType='numeric' 
            placeholder='Agrega tu presupuesto: Ej. 300' 
            style={styles.input} 
            value={presupuesto.toString()}
            onChangeText={setPresupuesto}
        />

        <Pressable onPress={() => handleNuevoPresupuesto(presupuesto)} style={styles.boton}>
            <Text style={styles.btnTexto}>Agregar Presupuesto</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor : {
        ...globalStyles.contenedor
      },
      label : {
        textAlign : 'center',
        fontSize : 24,
        color : '#3B82F6',
        marginBottom : 10
      },
      input : {
        backgroundColor : '#F5F5F5',
        padding : 10,
        borderRadius : 10,
        textAlign : 'center',
        marginTop : 30
      },
      boton : {
        marginTop : 30,
        backgroundColor : '#1048A4',
        padding : 10,
        borderRadius : 10
      },
      btnTexto : {
        color  : '#FFF',
        textAlign : 'center',
        textTransform : 'uppercase',
        fontWeight : 'bold'
      }
      
})
export default NuevoPresupuesto
