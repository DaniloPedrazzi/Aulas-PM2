import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from "expo-image-manipulator";
import styled from 'styled-components/native';

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  }

  let openShareDialogAsync = async () => {
    if (Platform.OS === 'web') {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    const imageTmp = await ImageManipulator.manipulateAsync(selectedImage.localUri);
    await Sharing.shareAsync(imageTmp.uri);
  };

  if (selectedImage !== null) {
    return (
      <Container>
        <Thumbnail source={{ uri: selectedImage.localUri }}/><br/>
        <MainButton onPress={openShareDialogAsync}>
          <ButtonText>Share this photo</ButtonText>
        </MainButton>
      </Container>
    );
  }
  
  return (
    <Container>
        <Logo source={{ uri: "https://i.imgur.com/TkIrScD.png" }}/>
      <Instructions>
        To share a photo from your phone with a friend, just press the button below!
      </Instructions><br/>
      <MainButton onPress={openImagePickerAsync}>
        <ButtonText>Pick a photo</ButtonText>
      </MainButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  backgroundColor: #1c1c1c;
  alignItems: center;
  justifyContent: center;
`;

const Logo = styled.Image`
  width: 305px;
  height: 159px;
  marginBottom: 10px;
`;

const Instructions = styled.Text`
  color: #888;
  fontSize: 18px;
  marginHorizontal: 15px;
`;

const MainButton = styled.TouchableOpacity`
  backgroundColor: #9943b5;
  padding: 20px;
  borderRadius: 5px;
`;

const ButtonText = styled.Text`
  fontSize: 20px;
  color: '#fff';
`;

const Thumbnail = styled.Text`
  width: 300px;
  height: 300px;
  resizeMode: "contain"
`;
