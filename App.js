import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { COLORS } from './constants';
import CallsStack from './routes/CallsStack';
import ChatsStack from './routes/ChatsStack';
import { People, Settings, Stories } from './screens';

const App = () => {

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  })

  if(!loaded) return null;

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='chatsStack'
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: () => {
          let iconName;
          let routeName = route.name;
          if(routeName === "chatsStack"){
            iconName = 'home'
          }else if (routeName === "callsStack"){
            iconName = 'chat'
          }
          else if (routeName === "people"){
            iconName = 'people'
          }
          else if (routeName === "stories"){
            iconName = 'image'
          }
          else if (routeName === "settings"){
            iconName = 'settings'
          }
          return <MaterialIcons name={iconName} size={24} color={COLORS.primary} />
        },
        
      })}
      >
        <Tab.Screen name='chatsStack' component={ChatsStack} options={hideBottomBarChats} />
        <Tab.Screen name='callsStack' component={CallsStack} options={hideBottomBarCalls}/>
        <Tab.Screen name='people' component={People} options={{title: "People"}} />
        <Tab.Screen name='stories' component={Stories} options={{title: "Stories"}} />
        <Tab.Screen name='settings' component={Settings} options={{title: "Settings"}} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default App;

const hideBottomBarChats = ({ route }) => ({
  title: 'Chats',
  tabBarStyle: ((route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? ''
    console.log(routeName)
    if (routeName === 'chat' || routeName === 'profile') {
      return { display: "none" }

    }
    return 
  })(route),
})

const hideBottomBarCalls = ({ route }) => ({
  title: 'Calls',
  tabBarStyle: ((route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? ''
    console.log(routeName)
    if (routeName === 'chat' || routeName === 'profile') {
      return { display: "none" }

    }
    return 
  })(route),
})

