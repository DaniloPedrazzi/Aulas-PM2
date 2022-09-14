import { react, useState } from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import tilapia from './assets/img/tilapia.jpg';
import robalo from './assets/img/robalo.webp';
import baiacu from './assets/img/baiacu.jpg';

export default function App() {
  // useState Img
  const [img, setimg] = useState(tilapia);

  // Função pra trocar a imagem do peixe
  function changeImg(){
    if(img == tilapia){
      setimg(robalo);
    }
    else if(img == robalo){
      setimg(baiacu);
    }
    else if(img == baiacu){
      setimg(tilapia);
    }
  }

  return (
    <Container>
      {/* Text */}
      <TextWhite>Bem vindo a troca especializada de peixes!</TextWhite>
      <br/>
      {/* Image */}
      <Img source={img}></Img>
      <br/>
      {/* Button */}
      <Btn onPress={() => changeImg()}>
        <TextBtn>Trocar de Peixe</TextBtn>
      </Btn>
    </Container>
  );
}

// StyledComponents
const Container = styled.View`
  flex: 1;
  background-color: #1c1c1c;
  align-items: center;
  justify-content: center;
`;
const TextWhite = styled.Text`
  color: #fff;
  font-size: 25px;
`;
const Img = styled.Image`
  width: 305px;
  height: 159px; 
  border-radius: 15px;
`;
const Btn = styled.TouchableOpacity`
  backgroundColor: blue;
  padding: 20px;
  border-radius: 15px;
`;
const TextBtn = styled.Text`
  color: #fff;
  font-size: 20px
`;
