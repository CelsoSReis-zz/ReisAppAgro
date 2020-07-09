import {Alert} from 'react-native';
import {getRealm} from './Realm';

export const saveEntry = async value => {
  const realm = await getRealm();
  let data = {};
  const {amount} = value;

  try {
    realm.write(() => {
      data = {
        id: 'ABC',
        amount: amount,
        entryAt: new Date(),
        isInit: false,
      };

      realm.create('Entry', data, true);
    });

    console.error('saveEntry :: data: ', JSON.stringify(this.data));
  } catch (error) {
    console.error(
      'saveEntry :: error on save object: ',
      JSON.stringify(this.data),
    );
    Alert.alert('Erro ao salvar os dados delançamento.');
  }

  return data;
};
