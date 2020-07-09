import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = ({navigation}) => {
  const currentBalance = 2000;

  const entriesGrouped = [
    {key: '1', description: 'Rebanho', amount: 2000},
    {key: '2', description: 'Machos', amount: 5000},
    {key: '3', description: 'Fêmeas', amount: 5010},
    {key: '4', description: 'cavalos', amount: 6000},
  ];

  const entries = [
    {key: '1', description: 'Compra de Bovinos', amount: 10000},
    {key: '2', description: 'Pagamento de Salários', amount: 8000},
    {key: '3', description: 'insumos', amount: 1100},
  ];
  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Main;
