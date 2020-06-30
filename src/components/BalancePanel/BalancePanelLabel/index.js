import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalancePanelLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logotipo da empresa</Text>
      {/*<Text style={styles.value}>Rebanho total</Text>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
  },
  logo: {
    fontSize: 18,
  },
  value: {},
});

export default BalancePanelLabel;
