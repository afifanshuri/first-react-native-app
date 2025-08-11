import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import MainScreen from '../module/main/MainScreen';
import Profile from '../module/main/Profile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEarth, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import Explore from '../module/main/Explore';
import ServicePage from '../module/main/ServicePage';
import Login from '../module/main/Login';
import Register from '../module/main/Register';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Tabs for Home, Explore, Profile
const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'shift',
      }}
    >
      <Tab.Screen
        name={Routes.Home}
        component={MainScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesomeIcon
              icon={faHome}
              color={focused ? '#007bff' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Explore}
        component={Explore}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesomeIcon
              icon={faEarth}
              color={focused ? '#007bff' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesomeIcon
              icon={faUser}
              color={focused ? '#007bff' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Stack navigator that wraps tabs and deeper screens
const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{
        animation: 'slide_from_right',
        headerShown:false,
      }}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Register} component={Register} />
      <Stack.Screen
        name={Routes.Home}
        component={TabsNavigator}
        options={{ headerShown: false }}/>
      <Stack.Screen name={Routes.Service} component={ServicePage} />
    </Stack.Navigator>
  );
};

export { MainNavigation, TabsNavigator };
