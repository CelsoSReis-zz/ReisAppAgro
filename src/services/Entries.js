import {Alert} from 'react-native';
import {getRealm} from './Realm';

export const saveEntry = async () => {
  const realm = await getRealm();
  let data = {};
  try {
    realm.write(() => {
      // eslint-disable-next-line no-const-assign
      data = {
        id: 'ABC',
        amount: 12.4,
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
    Alert.alert("Erro ao salvar os dados delançamento.");
  }

  return data;
};
