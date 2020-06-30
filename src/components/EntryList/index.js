import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import EntryListItem from './EntryListItem';

const EntryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos Lançamentos</Text>
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

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;
