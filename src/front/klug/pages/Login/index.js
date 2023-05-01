import styles from "./styles";

import React from 'react';
import { View, Image } from 'react-native';
import { TextInput, Text, Button, DefaultTheme } from 'react-native-paper';

export default function Login({ handleLogin }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showError, setShowError] = React.useState(false);


  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLoginPress = () => {
    let emailInput = 'usuario@teste.com'
    let pswInput = 'senha123'
    if (email === emailInput && password === pswInput) {
      handleLogin(true); // Chama a função handleLogin com o argumento true para indicar sucesso no login
    } else {
      setShowError(true); // Exibe a mensagem de erro
    }
  };

    return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
        </View>

        <Image
          source={{ uri: 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-klug/main/docs/img/logo-klug.png' }}
          style={styles.Logo} />

        <View style={styles.form}>
          <Text style={{ color: 'black' }}>E-mail</Text>
          <TextInput
            label="Digite seu e-mail"
            mode="outlined"
            borderRadius={10}
            borderWidth={0}
            style={styles.input}
            onChangeText={handleEmailChange}
            theme={{
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                text: 'black', // Define a cor do texto como preto
              },
            }}
          />

          <Text style={{ color: 'black' }}>Senha</Text>
          <TextInput
            label="Digite sua senha"
            mode="outlined"
            style={styles.input}
            onChangeText={handlePasswordChange}
            secureTextEntry={true}
            theme={{
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                text: 'black', // Define a cor do texto como preto
              },
            }}
          />

          {showError && <Text style={{ color: 'red', marginTop: 10, marginBottom: 2 }}>Senha incorreta. Tente novamente.</Text>}

          <Text style={styles.lostpsw}>Esqueci a Senha</Text>
        </View>


        <Button mode="contained" onPress={handleLoginPress} style={styles.button}>
          <Text style={{ color: 'white' }}>Entrar</Text>
        </Button>

        <Text style={{ alignSelf: 'center', color: 'black' }}>Criar Conta</Text>

    </View>
  );
}

//TODO: Bruno alterar aqui.