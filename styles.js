import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#222222',
  },
  paragraph: {
    margin: 12,
    marginBottom: 60,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#9466FF',
    color: 'white'
  },
  tinyLogo: {
    width: 250,
    height: 250,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    marginBottom: 12,
    width: "100vw",
    padding: 12,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  }
})

export default styles