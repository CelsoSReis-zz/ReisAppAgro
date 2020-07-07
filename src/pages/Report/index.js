import React from 'react';
import {View, StyleSheet, Picker, Button} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
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
    <View>
      <BalanceLabel currentBalance={currentBalance}/>
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});

export default Report;
