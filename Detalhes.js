import React from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import styles from './styles'

const Detalhes = ({ display, toogleModal, mensagem }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={display}
    onRequestClose={toogleModal}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Pressable onPress={toogleModal}>
          <Text>{mensagem}</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
)

export default Detalhes