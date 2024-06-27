import {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type CurrencyBtnProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyBtn = (props: CurrencyBtnProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

export default CurrencyBtn;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 20,
    marginBottom: 4,
    color: '#000',
  },
  country: {
    fontSize: 14,
    color: '#2d3436',
  },
});
