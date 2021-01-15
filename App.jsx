import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./app/components/MainScreen";
import ArticleShow from "./app/components/ArticleShow";
import LoginScreen from "./app/components/LoginScreen";
import { Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const App = () => {
	const { appTitle, currentArticle } = useSelector(state => state);
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Start"
					component={MainScreen}
					options={props => ({
						title: appTitle,
						headerRight: () => (
							<Ionicons
								name="person-add-outline"
								onPress={() => props.navigation.navigate("Login")}
                size={24}
                color="white"
                style={{marginRight: 18}}
							/>
						),
						headerStyle: {
							backgroundColor: "black",
						},
						headerTitleStyle: {
							color: "white",
							fontSize: 24,
							fontFamily: "Futura-CondensedMedium",
							fontWeight: "bold",
						},
					})}
				/>
				<Stack.Screen
					name="ArticleShow"
					component={ArticleShow}
					options={{
						title: currentArticle.title,
						headerStyle: {
							backgroundColor: "black",
						},
						headerTitleStyle: {
							color: "white",
							fontSize: 18,
							fontFamily: "Futura-CondensedMedium",
							fontWeight: "bold",
						},
					}}
				/>
				<Stack.Screen name="Login" component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
