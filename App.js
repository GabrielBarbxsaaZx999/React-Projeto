import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ínicio</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
      <Button
        title="Jogos"
        onPress={() => navigation.navigate('Jogos')}
      />
        <Button
        title="Inicio"
        onPress={() => navigation.navigate('Inicio')}
      />
    </View>
  );
}

function CadastroScreen({ navigation }) {
  const handleCadastro = () => {
    // Adicione a lógica de cadastro aqui
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
        secureTextEntry
      />


      <Button title="Cadastrar" onPress={handleCadastro} />

      <View style={styles.buttonContainer}>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          color="#555"
        />
        <Button
          title="Ir para Home"
          onPress={() => navigation.navigate('Home')}
          color="#00A6FB"
        />
      </View>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});

function JogosScreen({ navigation }) {
  return (
    <View style={stylesJogos.container}>
      <View style={stylesJogos.header}>
        <Text style={stylesJogos.headerText}>Tabela de jogos</Text>
        <Button
          style={stylesJogos.goBackButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={stylesJogos.goBackButtonText}>Voltar página</Text>
        </Button>
      </View>
      <View style={stylesJogos.tableContainer}>
        <View style={stylesJogos.subContainer}>
          <Text style={stylesJogos.subHeader}>Paulistão</Text>
          {/* Adicione a lista de jogos do Paulistão aqui */}
        </View>
        <View style={stylesJogos.subContainer}>
          <Text style={stylesJogos.subHeader}>Carioca</Text>
          {/* Adicione a lista de jogos do Carioca aqui */}
        </View>
      </View>
      <View style={stylesJogos.footer}>
        <Text style={stylesJogos.footerText}>Todos os direitos reservados@2024</Text>
      </View>
    </View>
  );
};


const stylesJogos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    backgroundColor: '#6c98ee',
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 30,
    color: 'white',
  },
  goBackButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
  },
  goBackButtonText: {
    fontSize: 16,
    color: '#6c98ee',
  },
  tableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  subContainer: {
    flex: 1,
  },
  subHeader: {
    fontSize: 20,
    marginBottom: 10,
  },
  gameItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  teamLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  teamName: {
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#6c98ee',
    padding: 15,
    alignItems: 'center',
    marginTop: 100,
  },
  footerText: {
    fontSize: 30,
    color: 'white',
  },
});

function InicioScreen() {
  return (
    <View style={stylesInicio.container}>
      <View style={stylesInicio.header}>
        <Image source={{uri: 'https://raw.githubusercontent.com/GabrielBarbxsaaZx999/logogng/main/20231128_085947%201.png'}} style={styles.logo} />
        <View style={stylesInicio.searchContainer}>
          <TextInput style={stylesInicio.pesquisar} placeholder="  Pesquisar..." />
        </View>
        <Button style={stylesInicio.button}>
          <Text style={stylesInicio.buttonText}>Cadastrar</Text>
        </Button>
        <Button style={stylesInicio.button2}>
          <Text style={stylesInicio.buttonText}>Entrar</Text>
        </Button>
      </View>
      <View style={stylesInicio.tudo}>a
        <View style={stylesInicio.sections}>
          <Text>1</Text>
        </View>
        <View style={stylesInicio.sections}>
          <Text>2</Text>
        </View>
        <View style={stylesInicio.sections}>
          <Text>3</Text>
        </View>
        <View style={stylesInicio.sections}>
          <Text>4</Text>
        </View>
      </View>
      <View style={stylesInicio.footer}>
       Todos os direitos reservados@2024
      </View>
    </View>
  );
}

const stylesInicio = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6c98ee',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    height: 50,
  },
  searchContainer: {
    flex: 1,
    marginLeft: 10,
  },
  pesquisar: {
    height: 30,
    width: '90%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#022a79',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 15,
  },
 
  button2: {
    backgroundColor: '#2354b5',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  tudo: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sections: {
    margin: 20,
    width: '90%',
    borderRadius: 10,
    color: 'black',
    height: 200,
    borderWidth: 5,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: '#6c98ee',
    padding: 15,
    width: '100%',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});

function LoginScreen({ navigation }) {
  const handleCadastro = () => {
    // Adicione a lógica de cadastro aqui
    alert('Login realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Login</Text>

  

      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua Senha"
        secureTextEntry
      />


      <Button title="Login" onPress={handleCadastro} />

      <View style={styles.buttonContainer}>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          color="#555"
        />
        <Button
          title="Ir para Home"
          onPress={() => navigation.navigate('Home')}
          color="#00A6FB"
        />
      </View>
    </View>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Jogos" component={JogosScreen} />
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Adicione mais telas, conforme necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
