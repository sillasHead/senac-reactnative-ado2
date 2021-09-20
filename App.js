import axios from 'axios'
import React, { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import Pessoa from './Pessoa'
import styles from './styles'

export default function App() {
  const [jsonData, setJsonData] = useState([])

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1")
      .then(res => {
        console.log('Sucesso! Dados: ', res)
        setJsonData(res.data.data)
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
        ListHeaderComponent={<Text style={styles.cabecalho}>Melhor App</Text>}
      />
    </View>
  )
}

