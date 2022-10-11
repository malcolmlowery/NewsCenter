import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './src/screens/registration';
import Home from './src/screens/home';
import Text from './src/components/Text';
import Avatar from './src/components/Avatar';

const Stack = createNativeStackNavigator();

const App = () => {
  const isAuthenticated = true;

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerShadowVisible: false,
        headerLeft: () => <Text fontSize={26} fontWeight='700' style={{ marginLeft: 2 }}>NewsCenter</Text>,
        headerRight: () => <Avatar uri='https://avatars.githubusercontent.com/u/100153203?v=4' style={{ marginRight: 2 }} />,
        title: '',
       }}>
        {!isAuthenticated ?
          <Stack.Screen name='registration' component={Registration} /> :
          <Stack.Screen name='home' component={Home} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;