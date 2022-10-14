import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Newsfeed from './newsfeed';

const Tab = createBottomTabNavigator();

const Home = () => {
  return(
    <Tab.Navigator screenOptions={({ route }): BottomTabNavigationOptions => ({
      headerShown: false,
      tabBarStyle: { position: 'absolute' },
      tabBarShowLabel: false,
      tabBarIcon: ({ focused }) => {
        let tabIcon;

        if(route.name === 'newsfeed') {
          tabIcon = 'home'
        } 
        if(route.name === 'bookmarks') {
          tabIcon = 'bookmark'
        } 
        if(route.name === 'settings') {
          tabIcon = 'settings'
        } 

        return <Ionicons name={tabIcon} color={focused ? '#39ACFF' : '#dedede' } size={26} />
      }
    })}>
      <Tab.Screen name='newsfeed' component={Newsfeed} />
      <Tab.Screen name='bookmarks' component={Newsfeed} />
      <Tab.Screen name='settings' component={Newsfeed} />
    </Tab.Navigator>
  )
};

export default Home;