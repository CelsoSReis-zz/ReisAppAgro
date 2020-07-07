import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalanceLabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text>Logotipo da Empresa</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
  },
  value: {
    fontSize: 18,
  },
});

export default BalanceLabel;
