import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const authenticateUser = () => {
    
  }
  return (
    <View>
      <Text style={{marginBottom: 24} } >Login screen</Text>
      <TextInput 
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        style={styles.input}
      />
      <TextInput 
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        style={styles.input}
      />
      <Button 
        title="Log In"
        reverseColor="green"
        onPress={() => authenticateUser()}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  input: { padding: 9, margin: 18, height: 40, borderColor: "grey", borderWidth: 4, borderRadius: 8}
})
