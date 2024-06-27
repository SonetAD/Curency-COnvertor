import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import CurrencyBtn from './components/currencybtn.component';
import {currencyByRupee} from './constants';

const App = () => {
  const [inpVal, setInpVal] = useState('');
  const [resVal, setResVal] = useState('');
  const [targetCurrency, setTargetCurrency] = useState<Currency>(
    currencyByRupee[0],
  );

  const btnPresed = (currentCurrency: Currency) => {
    setTargetCurrency(currentCurrency);
    if (!inpVal) {
      Snackbar.show({
        text: 'Please enter a value to convert',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      const modVal = parseFloat(inpVal);
      if (isNaN(modVal)) {
        Snackbar.show({
          text: 'Please enter a number to convert',
          duration: Snackbar.LENGTH_SHORT,
        });
      } else {
        const res = modVal * targetCurrency.value;
        setResVal(res.toFixed(2));
      }
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" />
      <View style={styles.userInput}>
        <TextInput
          style={styles.input}
          value={inpVal}
          onChangeText={txt => setInpVal(txt)}
          keyboardType="number-pad"
          placeholder="Currency in Rupee"
        />
        {resVal && (
          <Text
            style={styles.rsTxt}>{`${targetCurrency.symbol}:${resVal}`}</Text>
        )}
      </View>
      <View style={styles.currencyBtns}>
        <FlatList
          numColumns={3}
          data={currencyByRupee}
          renderItem={({item}) => (
            <Pressable style={styles.btn} onPress={() => btnPresed(item)}>
              <CurrencyBtn name={item.name} flag={item.flag} />
            </Pressable>
          )}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#515151',
    flex: 1,
  },
  userInput: {
    alignItems: 'center',
  },
  input: {
    width: '60%',
    height: 45,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    borderEndEndRadius: 10,
  },
  currencyBtns: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 15,
    marginHorizontal: 5,
  },
  rsTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
