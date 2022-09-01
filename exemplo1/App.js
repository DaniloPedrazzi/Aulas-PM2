import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import tilapia from './assets/img/tilapia.jpg';
import robalo from './assets/img/robalo.webp';

export default function App() {
  // useState Img
  const [img, setimg] = useState(tilapia);

  // Função pra trocar a imagem do peixe
  function changeImg(){
    if(img == tilapia){
      setimg(robalo);
    }else{
      setimg(tilapia);
    }
  }

  return (
    <View style={styles.container}>
      {/* Text */}
      <Text style={styles.textWhite}>Bem vindo a troca especializada de peixes!</Text>
      <br/>
      {/* Image */}
      <Image source={img} style={styles.img}></Image>
      <br/>
      {/* Button */}
      <TouchableOpacity
        onPress={() => changeImg()}
        style={styles.button}>
        <Text style={styles.buttonText}>Trocar de Peixe</Text>
      </TouchableOpacity>
      {/* ? */}
      <StatusBar style="auto" />
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 305, 
    height: 159, 
    borderRadius: 15
  },
  textWhite: {
    color: '#fff',
    fontSize: 25
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
});
