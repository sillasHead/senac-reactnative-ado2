import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Detalhes from './Detalhes'
import styles from './styles'

const Pessoa = ({ nome, link, email }) => {
  const [modal, setModal] = useState(false)

  function mudaModal() {
    setModal(!modal)
  }

  return (
    <View>
      <Detalhes display={modal} toogleModal={mudaModal} mensagem={email} />
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: link,
          }}
        />
        <Text style={styles.paragraph}>{nome}</Text>
      </Pressable>
    </View>
  )
}

export default Pessoa