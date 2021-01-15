import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Auth from "../modules/auth";

const LoginScreen = props => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState();
	const auth = new Auth({ host: "https://newsroom-api.herokuapp.com/api" });
	const authenticateUser = async () => {
		auth
			.signIn(email, password)
			.then(resp => {
				props.navigation.navigate("Start");
			})
			.catch(e => {
				setMessage(e.response.data.errors[0]);
			});
	};
	return (
		<View>
			<Text style={{ marginTop: 18, textAlign: "center", fontSize: 18, fontFamily: "AvenirNext-DemiBold" }}>Login:</Text>
			<TextInput
				onChangeText={text => setEmail(text)}
				placeholder="Email"
				style={styles.input}
			/>
			<TextInput
				secureTextEntry={true}
				onChangeText={text => setPassword(text)}
				placeholder="Password"
				style={styles.input}
			/>
			<Pressable
				title="Log In"
				onPress={() => authenticateUser()}
				style={{
					alignSelf: "center",
					backgroundColor: "green",
					padding: 10,
					borderRadius: 20,
					margin: 10,
				}}
			>
				<Text style={{ fontSize: 20, padding: 10, textAlign: 'center', color: "white" }}>Log In</Text>
				<Ionicons name="checkmark-circle-outline" size={36} color="white" style={{alignSelf: 'center'}} />
			</Pressable>
			{message && <Text style={{ color: "red" }}>{message}</Text>}
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	input: {
		padding: 9,
		margin: 18,
		height: 40,
		borderColor: "grey",
		borderWidth: 4,
		borderRadius: 8,
	},
});
