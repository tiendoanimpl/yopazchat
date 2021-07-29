import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from './app/screens/welcome/welcome.screen'
import ScreenNames from './app/configs/screen_names'
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext'

const Stack = createStackNavigator()
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={ScreenNames.WELCOME}
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
