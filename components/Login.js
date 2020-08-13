import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import cityWhite from '../assets/city_white.jpg';
import MainPage from './MainPage';
import SignUp from './SignUp';

export default function Login() {
  return (
    <ImageBackground style={styles.imageBackground} source={cityWhite} resizeMode="cover">
      <View style={styles.align}>
        <View style={styles.mainBox}>
          <View style={styles.align}>
            <Text style={styles.mainText}>DO.SI.IN</Text>
            <Text>도시락 공유 플랫폼</Text>
          </View>
        </View>
        <View style={styles.textInputView}>
          <TextInput placeholder="아이디" style={styles.textInput} />
          <TextInput placeholder="비밀번호" style={styles.textInput} />
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => <MainPage />}>
            <Text>로그인 </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.joinContainer}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  align: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  mainBox: {
    width: 220,
    height: 150,
    backgroundColor: '#F3ECA5',
    position: 'absolute',
    left: 100,
    top: 70,
    borderRadius: 5,
  },
  mainText: { marginBottom: 13, fontSize: 25 },
  textInputView: {
    position: 'absolute',
    top: 300,
  },
  textInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    backgroundColor: '#F3ECA5',
    width: 200,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.1,
  },
  loginContainer: {
    position: 'absolute',
    width: 200,
    height: 35,
    left: 105,
    top: 437,
  },
  joinContainer: {
    position: 'absolute',
    width: 200,
    height: 35,
    left: 105,
    top: 500,
  },
});
