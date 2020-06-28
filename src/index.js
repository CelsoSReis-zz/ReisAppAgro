/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';

const App: () => React$Node = () => {
  // eslint-disable-next-line no-undef
  addEntry = () => {
    // eslint-disable-next-line no-alert
    alert('Abrir a tela');
  };
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{padding: 10}}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Logo da Empresa
      </Text>
      <Button onPress={addEntry} title="Adicionar" />

      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Sumário
      </Text>

      <FlatList
        data={[
          {key: 'Rebanho: 980 cab'},
          {key: 'Machos: 700 cab'},
          {key: 'Fêmeas: 280 cab'},
          {key: 'Mortes: 20 cab'}
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />

      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Últimos Lançamentos
      </Text>

      <FlatList
        data={[
          {key: 'Compra de Bovinos: 20 cab'},
          {key: 'Pagamento de Salários: R$ 8.000,00'},
          {key: 'Mortes: 2 cab'},
        ]}
  renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

export default App;
