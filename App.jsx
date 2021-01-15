import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './app/components/MainScreen'
import ArticleShow from './app/components/ArticleShow'
import {Button} from 'react-native'

const Stack = createStackNavigator()

const App = () => {
  const { appTitle, currentArticle } = useSelector((state) => state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Start" 
          component={MainScreen} 
          options={{ 
            title: appTitle,
            headerRight: () => (
              <Button  title='Click me' />
            ),
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 24,
              fontFamily: 'Futura-CondensedMedium',
              fontWeight: 'bold',
            }
           }}
        />
        <Stack.Screen 
          name="ArticleShow"
          component={ArticleShow}
          options={{
            title: currentArticle.title,
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 18,
              fontFamily: 'Futura-CondensedMedium',
              fontWeight: 'bold',
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
