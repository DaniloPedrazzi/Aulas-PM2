import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Firebase from './src/config';
import { useState, useEffect } from 'react';

export default function App() {
  const [ dados, setDados ] = useState([]);

  //Executa isso antes de tudo
  useEffect(() => {
    Firebase.firestore.collection("Teste")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => { //forEach = for(i, i > doc, i++)
        setDados([doc.data()]);
      })
    })
  }, []);

  return (
    <View style={styles.container}>
      {
        dados.map((item) => {
          return <Text>{ item.nome }</Text>
        })
      }
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
