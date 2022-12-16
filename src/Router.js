import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home/Home';
import SignIn from './screens/SignIn';
import RecycleScreen from './screens/RecycleScreen/RecycleScreen';
import DepositScreen from './screens/DepositScreen/DepositScreen';
import InformationScreen from './screens/InformationScreen/InformationScreen';
import Profile from './screens/Profile/Profile';

import AdminHome from './screens/AdminHome/AdminHome';
import ApproveScreen from './screens/ApproveSreen/ApproveScreen';
import UserInfoSpace from './screens/UserInfoSpace/UserInfoSpace';

import useBearStore from './stores/useStore';

const Stack = createNativeStackNavigator();

function App() {
  const role = useBearStore(state => state.role);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#2bbd7e',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
        <Stack.Screen name="Recycle" component={RecycleScreen} />
        <Stack.Screen name="Deposit" component={DepositScreen} />
        <Stack.Screen name="Info" component={InformationScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="Approve" component={ApproveScreen} />
        <Stack.Screen name="UserInfoSpace" component={UserInfoSpace} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
