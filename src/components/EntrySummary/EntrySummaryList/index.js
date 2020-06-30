import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const EntrySummaryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sumário</Text>
      <FlatList
        data={[
          {key: 'Rebanho: 980 cab'},
          {key: 'Machos: 700 cab'},
          {key: 'Fêmeas: 280 cab'},
          {key: 'Mortes: 20 cab'},
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
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntrySummaryList;
