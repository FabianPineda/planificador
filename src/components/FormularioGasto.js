import React, {useState, useEffect} from 'react'
import {Text, SafeAreaView, View, TextInput, StyleSheet, Pressable, Alert} from 'react-native'
import { Picker } from "@react-native-picker/picker";
import globalStyles from '../styles';

const FormularioGasto = ({modal, setModal, handleGasto, gasto, setGasto, eliminarGasto}) => {

    const [ nombre, setNombre ] = useState('')
    const [ cantidad, setCantidad ] = useState('')
    const [ categoria, setCategoria ] = useState('')
    const [ id, setId ] = useState('')
    const [ fecha, setFecha ] = useState('')

    useEffect( () => {
        if (gasto?.nombre) {
            setNombre(gasto.nombre)
            setCantidad(gasto.cantidad)
            setCategoria(gasto.categoria)
            setId(gasto.id)
            setFecha(gasto.fecha)
        }
    }, [gasto] )

  return (
    <SafeAreaView style={styles.contenedor}>
        <View style={styles.contenedorBotones}>
            <Pressable style={ [ styles.btn, styles.btnCancelar ] } onPress={ () => {
                    setModal(!modal) 
                    setGasto({})
                } }
            >
                <Text style={ styles.btnTexto }>Cancelar</Text>
              </Pressable>
              {!!id && (
                  <Pressable style={[styles.btn, styles.btnEliminar]} onLongPress={() => eliminarGasto(id)} >
                      <Text style={styles.btnTexto}>Eliminar</Text>
                  </Pressable>
              )}
        </View>
        
        <View style={styles.formulario}>
            
            <Text style={styles.titulo}>{ gasto?.nombre ? 'Modificar' : 'Nuevo' } Gasto</Text>
    
            <View style={styles.campo}>
                <Text style={styles.label}>Nombre Gasto</Text>
                <TextInput style={styles.input} placeholder='Nombre del Gasto. Ej. Comida' value={nombre} onChangeText={setNombre} />
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Cantidad Gasto</Text>
                <TextInput style={styles.input} placeholder='Cantidad del Gasto. Ej. 300' keyboardType='numeric' value={cantidad} onChangeText={setCantidad} />
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Categoría Gasto</Text>
                <Picker
                    selectedValue={categoria} 
                    onValueChange={ (valor) => {
                        setCategoria(valor)
                    }}
                >
                    <Picker.Item label=' -- Seleccione -- ' />
                    <Picker.Item label='Ahorro' value='ahorro' />
                    <Picker.Item label='Alimentación' value='alimentacion' />
                    <Picker.Item label='Hogar' value='hogar' />
                    <Picker.Item label='Gastos Varios' value='gastos' />
                    <Picker.Item label='Entretenimiento' value='entretenimiento' />
                    <Picker.Item label='Salud' value='salud' />
                    <Picker.Item label='Suscripciones' value='suscripciones' />
                </Picker>
                
                <Pressable style={styles.submitBtn} onPress={ () => {
                    handleGasto({nombre, cantidad, categoria, id, fecha})
                    setGasto({})
                } }>
                    <Text style={styles.submitBtnTexto}> { gasto?.nombre ? 'Guardar Cambios' : 'Agregar' } Gasto </Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    contenedor : {
        backgroundColor : '#1E40AF',
        flex : 1
    },
    contenedorBotones : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    btn : {
        padding : 10,
        marginTop : 30,
        marginHorizontal : 10,
        flex : 1
    },
    btnEliminar : {
        backgroundColor : 'red'
    },
    btnCancelar: {
        backgroundColor : '#DB2777'
    },
    btnTexto: {
        textAlign : 'center',
        textTransform : 'uppercase',
        fontWeight : 'bold', 
        color : '#FFF'
    },
    formulario: {
        ...globalStyles.contenedor
    },
    titulo: {
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 30,
        color: '#64748B'
    },
    campo : {
        marginVertical : 10
    },
    label : {
        color : '#64748B',
        textTransform : 'uppercase',
        fontSize : 16,
        fontWeight : 'bold'
    },
    input : {
        backgroundColor : '#F5F5F5',
        padding : 10,
        borderRadius : 10,
        marginTop : 10
    },
    submitBtn : {
        backgroundColor : '#3B82F6',
        padding : 10,
        marginTop : 20
    },
    submitBtnTexto : {
        textAlign : 'center',
        color : '#FFF',
        fontWeight : 'bold',
        textTransform : 'uppercase'
    }
})

export default FormularioGasto
