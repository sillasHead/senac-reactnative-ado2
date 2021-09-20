import axios from 'axios'
import Constants from 'expo-constants'
import React, { useEffect, useState } from "react"
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native"
import Pessoa from './Pessoa'

export default function App() {
  const [jsonData, setJsonData] = useState([])

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1")
      .then(res => {
        console.log('Sucesso! Dados: ', res.data)
        setJsonData(res.data)
      })
      .catch(err => {
        throw new Error('Erro ao consumir a API. Erro: ', err)
      })
  }, [])

  function meuItem({ item }) {
    const { first_name, last_name, avatar, email } = item
    const nomeCompleto = first_name + " " + last_name

    return (
      <Pessoa
        nome={nomeCompleto}
        link={avatar}
        email={email}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={jsonData}
        renderItem={meuItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<Text style={styles.cabecalho}>Header da Flast List</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#00BFFF',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'pink'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "#B0C4DE",
    borderRadius: 10,
    padding: 50,
    alignItems: "center",
    shadowColor: "#87CEEB",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cabecalho: {
    margin: 12,
    padding: 12,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  }
})