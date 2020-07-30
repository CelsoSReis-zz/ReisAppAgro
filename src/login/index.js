import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.geral}>
        <View style={styles.tituloView}>
          <Text style={styles.titulo}>App Gestão Rural</Text>
        </View>
        <View style={styles.formView}>
          <TextInput
            style={styles.formUsuario}
            placeholder="Usuário"
            placeholderTextColor="#fff"
          />
          <TextInput
            style={styles.formSenha}
            placeholder="Senha"
            placeholderTextColor="#fff"
          />
          <TouchableOpacity style={styles.botao}>
            <View style={styles.areaBotao}>
              <Text style={styles.textoBotao}>Entrar</Text>
            </View>
          </TouchableOpacity>
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
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloView: {
    flex: 1,
  },
  titulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  formView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formUsuario: {
    borderWidth: 1,
    borderColor: '#006400',
    borderBottomColor: '#fff',
    marginBottom: 30,
    fontSize: 18,
    width: 300,
    color: '#fff',
    fontWeight: 'bold',
  },
  formSenha: {
    borderColor: '#006400',
    borderBottomColor: '#fff',
    borderWidth: 1,
    marginBottom: 50,
    fontSize: 18,
    width: 300,
    color: '#fff',
    fontWeight: 'bold',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 25,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  areaBotao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006400',
  },
  rodapeView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  rodape: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginForm;
