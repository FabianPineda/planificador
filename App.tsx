import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View, Alert, Pressable, Image, Modal } from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import { generarId } from './src/helpers';
import ListadoGastos from './src/components/ListadoGastos';
import Filtro from './src/components/Filtro';

const App = () => {

  const [ isValidPresupuesto, setIsValidPresupuesto ] = useState(false)
  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ gastos, setGastos ] = useState([])
  const [ modal, setModal ] = useState(false)
  const [ gasto, setGasto ] = useState({})

  const handleNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true)
    }else{
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor')
    }
  }

  const eliminarGasto = id => {
    Alert.alert(
      '¿Deseas Eliminar este gasto?', 
      'Un gasto eliminado no se puede recuperar', 
      [
        { text : 'Cancelar', style : 'cancel' },
        { text : 'Eliminar', onPress : () => {
          const gastosActualizados = gastos.filter( gastoState => gastoState.id !== id)
          setGastos(gastosActualizados)
          setModal(!modal)
          setGasto({})
        }}
      ])
  }

  const handleGasto = gasto => {
    if ([gasto.nombre, gasto.cantidad, gasto.categoria].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligarorios')
      return
    }

    if (gasto.id) {
      // Edición para gasto
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState )
      setGastos(gastosActualizados)
    }else{
      // Añadir para nuevo gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }
    setModal(!modal)
  }

  return (
    <View style={styles.contenedor}>
      <ScrollView>
        <View style={styles.header}>

          <Header />
          {isValidPresupuesto ? (
            <ControlPresupuesto
              presupuesto={presupuesto}
              gastos={gastos}
            />
          ) : (
            <NuevoPresupuesto handleNuevoPresupuesto={handleNuevoPresupuesto} presupuesto={presupuesto} setPresupuesto={setPresupuesto} />
          )}

        </View>

        {isValidPresupuesto &&
          <>
            <Filtro/>
            <ListadoGastos gastos={gastos} setModal={setModal} setGasto={setGasto} />
          </>
        }
      </ScrollView>

      {modal && (
        <Modal animationType='slide' visible={modal} onRequestClose={() => setModal(!modal)}>
          <FormularioGasto modal={modal} setModal={setModal} handleGasto={handleGasto} gasto={gasto} setGasto={setGasto} eliminarGasto={eliminarGasto} />
        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable style={styles.presable} onPress={() => setModal(!modal)}>
          <Image style={styles.imagen} source={require('./src/img/nuevo-gasto.png')} />
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor : {
    backgroundColor : '#F5F5F5',
    flex : 1
  },
  header :{
    backgroundColor : '#3B82F6',
    minHeight : 500
  },
  imagen : {
    width : 60,
    height : 60,
    position : 'absolute',
    bottom : 30,
    right : 20,
  },
})

export default App;
