import HomeScreen from './screens/HomeScreen'
import Login from './screens/Login';
import Register from './screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login"
        component={Login}
        options={{ title: "Login" }}
        />
        <Stack.Screen 
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Welcome" }}
        />
         <Stack.Screen 
        name="Register"
        component={Register}
        options={{ title: "Register" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

