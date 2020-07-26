import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component{
  render() {
    return(
      <View style={styles.geral}>
        <View style={styles.tituloView}>
          <Text style={styles.titulo}>App Gestão Rural</Text>
        </View>
        <View style={styles.formView}>
          <Text style={styles.form}>Form</Text>
        </View>
        <View style={styles.rodapeView}>
          <Text style={styles.rodape}>Desenvolvido por Celso Reis</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: '#006400',
  },
  tituloView:{
    flex: 1,
  },
  titulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  formView: {
    flex: 1,
  },
  rodapeView: {
    flex: 1,
  },
});
export default App;
